import React, { useEffect } from "react";
import VerifiedIcon from "../../assets/verified.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Skeleton from "../ui/Skeleton";
export default function SelectedCollection() {
  const [feature, setFeature] = useState(null)
  const [loading, setLoading] = useState(true)

  async function fetchSelectedFeature() {
    try {
      const { data } = await axios.get('https://remote-internship-api-production.up.railway.app/selectedCollection');
      const content = data.data;
      console.log(content)
      setFeature(content)
      setLoading(false)
    }
    catch (e) {
      console.log(e)
      setLoading(false)
    }

  }

  useEffect(() => {
    setLoading(true)
    fetchSelectedFeature()
  }, [])

  return (
    <header>
      {
        loading ? <Skeleton width="100%" height="500px" /> :
          <div className="selected-collection">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster={feature?.thumbnail}
              src={feature?.videoLink}
              className="selected-collection__bg"
            />
            <div className="selected-collection__description">
              <img
                src={feature?.logo}
                alt=""
                className="selected-collection__logo"
              />
              <h1 className="selected-collection__title">
                {feature?.title}
              </h1>
              <Link to={`/user/${feature?.creatorId}`} className="selected-collection__author">
                By {feature?.creator}
                <img
                  src={VerifiedIcon}
                  className="selected-collection__author__verified"
                />
              </Link>
              <div className="selected-collection__details">{feature?.amountOfItems} items · {feature?.floorPrice} ETH</div>
              <Link to={`/collection/${feature?.collectionId}`} className="selected-collection__button">
                <div className="green-pulse"></div>
                View Collection
              </Link>
            </div>
          </div>}
    </header>
  );
}
