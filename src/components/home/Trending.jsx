import React, { useEffect, useState } from "react";
import VerifiedIcon from "../../assets/verified.png";
import TrendingCollection from "../../assets/trending-collection.avif";
import { Link } from "react-router-dom";
import axios from "axios";
import Skeleton from "../ui/Skeleton";

export default function Trending() {
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(true);
  async function fetchTrendingNFTs() {
    const { data } = await axios.get('https://remote-internship-api-production.up.railway.app/trendingNFTs')
    const NFTs = data.data;
    setTrends(NFTs);
    setLoading(false)
  }

  useEffect(() => {
    setLoading(true)
    fetchTrendingNFTs()
  }, [])
  return (
    <section id="trending">
      <div className="container">
        <div className="row trending__row">
          <div className="trending__header">
            <h2 className="trending__header__title">Trending NFTs</h2>
            <Link className="trending__header__button" to={"/collections"}>
              View All
            </Link>
          </div>
          <div className="trending__body">
            <div className="trending-column">
              <div className="trending-column__header">
                <div className="trending-column__header__rank">#</div>
                <div className="trending-column__header__collection">
                  Collection
                </div>
                <div className="trending-column__header__price">
                  Floor Price
                </div>
                <div className="trending-column__header__price">Volume</div>
              </div>
              <div className="trending-column__body">
                {
                  loading
                    ? Array(5).fill(0).map((_, i) => (
                      <div key={i} className="trending-collection">
                        <div className="trending-collection__rank">{i + 1}</div>
                        <div className="trending-collection__collection">
                          <Skeleton width="64px" height="64px" borderRadius="8px" />
                          <div style={{ marginLeft: '16px' }}>
                            <Skeleton width="120px" height="16px" />
                          </div>
                        </div>
                        <div className="trending-collection__price">
                          <Skeleton width="80px" height="16px" />
                        </div>
                        <div className="trending-collection__volume">
                          <Skeleton width="80px" height="16px" />
                        </div>
                      </div>
                    )) :
                    trends.slice(0, 5).map((trend) => (
                      <Link
                        to={`/collection/${trend.collectionId}`}
                        key={trend.collectionId}
                        className="trending-collection"
                      >
                        <div className="trending-collection__rank">{trend.rank}</div>
                        <div className="trending-collection__collection">
                          <figure className="trending-collection__img__wrapper">
                            <img
                              src={trend.imageLink}
                              alt=""
                              className="trending-collection__img"
                            />
                          </figure>
                          <div className="trending-collection__name">
                            {trend.title}
                          </div>
                          <img
                            src={VerifiedIcon}
                            className="trending-collection__verified"
                          />
                        </div>
                        <div className="trending-collection__price">
                          <span className="trending-collection__price__span">
                            {Number(trend.floor).toFixed(2)} ETH
                          </span>
                        </div>
                        <div className="trending-collection__volume">
                          <span className="trending-collection__volume__span">
                            {trend.totalVolume} ETH
                          </span>
                        </div>
                      </Link>
                    ))}
              </div>
            </div>
            <div className="trending-column">
              <div className="trending-column__header trending-column__header2">
                <div className="trending-column__header__rank">#</div>
                <div className="trending-column__header__collection">
                  Collection
                </div>
                <div className="trending-column__header__price">
                  Floor Price
                </div>
                <div className="trending-column__header__price">Volume</div>
              </div>
              <div className="trending-column__body">
                {loading
                  ? Array(5).fill(0).map((_, i) => (
                    <div key={i} className="trending-collection">
                      <div className="trending-collection__rank">{i + 6}</div>
                      <div className="trending-collection__collection">
                        <Skeleton width="64px" height="64px" borderRadius="8px" />
                        <div style={{ marginLeft: '16px' }}>
                          <Skeleton width="120px" height="16px" />
                        </div>
                      </div>
                      <div className="trending-collection__price">
                        <Skeleton width="80px" height="16px" />
                      </div>
                      <div className="trending-collection__volume">
                        <Skeleton width="80px" height="16px" />
                      </div>
                    </div>
                  )) :
                  trends.slice(5, 10).map((trend) => (
                    <Link
                      to={`/collection/${trend.collectionId}`}
                      key={trend.collectionId}
                      className="trending-collection"
                    >
                      <div className="trending-collection__rank">{trend.rank}</div>
                      <div className="trending-collection__collection">
                        <figure className="trending-collection__img__wrapper">
                          <img
                            src={trend.imageLink}
                            alt=""
                            className="trending-collection__img"
                          />
                        </figure>
                        <div className="trending-collection__name">
                          {trend.title}
                        </div>
                        <img
                          src={VerifiedIcon}
                          className="trending-collection__verified"
                        />
                      </div>
                      <div className="trending-collection__price">
                        <span className="trending-collection__price__span">
                          {Number(trend.floor).toFixed(2)} ETH
                        </span>
                      </div>
                      <div className="trending-collection__volume">
                        <span className="trending-collection__volume__span">
                          {trend.totalVolume} ETH
                        </span>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
