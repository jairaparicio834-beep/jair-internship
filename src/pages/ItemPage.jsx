import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faShapes,
  faTag,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState, useRef } from "react";
import RecommendedItems from "../components/item/RecommendedItems";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import ItemPageSkeleton from "../components/ui/ItemPageSkeleton";
import RecommendedItemsSkeleton from "../components/ui/RecommendedItemsSkeleton";
export default function ItemPage() {
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const { id } = useParams()
  const [timeLeft, setTimeLeft] = useState(null)
  const rafRef = useRef(null)
  const endTimeRef = useRef(null)
  const pad = (n) => String(n).padStart(2, '0');


  async function fetchItemPost() {
    const { data } = await axios.get(`https://remote-internship-api-production.up.railway.app/item/${id}`)
    const postData = data.data;
    setPost(postData)
    setLoading(false)
    endTimeRef.current = postData.expiryDate;
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true)
    fetchItemPost()
  }, [id]);

  useEffect(() => {
    function tick() {
      if (!post?.expiryDate) return

      const timeRemaining = endTimeRef.current - Date.now();
      if (timeRemaining <= 0) {
        setTimeLeft('Sale is over')
        return
      }
      const secondsRemaining = timeRemaining / 1000;

      setTimeLeft({
        hours: Math.floor(secondsRemaining / 3600),
        minutes: Math.floor((secondsRemaining % 3600) / 60),
        seconds: Math.floor(secondsRemaining % 60)
      })

      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [post])


  return (
    <>
      {loading ?
        <>
          <ItemPageSkeleton />
          <RecommendedItemsSkeleton />
        </>
        :
        <>
          <section id="item-info">
            <div className="container">
              <div className="row item-page__row">
                <div className="item-page__left">
                  <figure className="item-page__img__wrapper">
                    <div className="item-page__img__details">
                      <FontAwesomeIcon
                        icon={faEthereum}
                        className="item-page__img__icon"
                      />
                      <div className="item-page__img__likes">
                        <FontAwesomeIcon
                          icon={faHeart}
                          className="item-page__img__icon"
                        />
                        <span className="item-page__img__likes__text">{post?.favorites}</span>
                      </div>
                    </div>
                    <img
                      src={post?.imageLink}
                      alt=""
                      className="item-page__img"
                    />
                  </figure>
                </div>
                <div className="item-page__right">
                  <Link
                    to={`/collection/${post?.collectionId}`}
                    className="item-page__collection light-blue"
                  >
                    {post?.collection}
                  </Link>
                  <h1 className="item-page__name">{post?.title}</h1>
                  <span className="item-page__owner">
                    Owned by{" "}
                    <Link
                      to={`/user/${post?.ownerId}`}
                      className="light-blue item-page__owner__link"
                    >
                      {post?.owner}
                    </Link>
                  </span>
                  <div className="item-page__details">
                    <div className="item-page__detail">
                      <FontAwesomeIcon
                        icon={faEye}
                        className="item-page__detail__icon"
                      />
                      <span className="item-page__detail__text">{post?.views} views</span>
                    </div>
                    <div className="item-page__detail">
                      <FontAwesomeIcon
                        icon={faHeart}
                        className="item-page__detail__icon"
                      />
                      <span className="item-page__detail__text">{post?.favorites} favorites</span>
                    </div>
                    <div className="item-page__detail">
                      <FontAwesomeIcon
                        icon={faShapes}
                        className="item-page__detail__icon"
                      />
                      <span className="item-page__detail__text">{post?.category}</span>
                    </div>
                  </div>
                  <div className="item-page__sale">
                    <div className="item-page__sale__header">
                      <div className="green-pulse"></div>
                      <span>{timeLeft
                        ? `Sale ends in ${pad(timeLeft?.hours)}h ${pad(timeLeft?.minutes)}m ${pad(timeLeft?.seconds)}s` : 'Sale is over'
                      }</span>
                    </div>
                    <div className="item-page__sale__body">
                      <span className="item-page__sale__label">Current price</span>
                      <div className="item-page__sale__price">
                        <span className="item-page__sale__price__eth">{post?.ethPrice} ETH</span>
                        <span className="item-page__sale__price__dollars">
                          {post?.usdPrice}
                        </span>
                      </div>
                      <div className="item-page__sale__buttons">
                        <div className="item-page__sale__buy">
                          <button className="item-page__sale__buy__button disabled">
                            Buy now
                          </button>
                          <button className="item-page__sale__buy__icon disabled">
                            <FontAwesomeIcon icon={faShoppingBag} />
                          </button>
                        </div>
                        <button className="item-page__sale__offer disabled">
                          <FontAwesomeIcon icon={faTag} />
                          Make offer
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <RecommendedItems collectionId={post?.collectionId} id={post?.id} />
        </>
      }
    </>
  );
}
