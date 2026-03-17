import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from "swiper/modules";
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import axios from "axios";
import Skeleton from "../ui/Skeleton";
export default function NewCollections() {
  const [cards, setCards] = useState([])
  const [loading, setLoading] = useState(true)
  async function fetchCollections() {
    const { data } = await axios.get('https://remote-internship-api-production.up.railway.app/newCollections')
    const collections = data.data;
    setCards(collections)
    setLoading(false)
  }
  useEffect(() => {
    setLoading(true)
    fetchCollections()
  }, [])
  return (
    <section id="new-collections">
      <div className="container">
        <div className="row">
          <h2 className="new-collections__title">New Collections</h2>
          <div className="new-collections__body">
            <Swiper
              modules={[Navigation]}
              loop={true}
              navigation
              spaceBetween={10}
              slidesPerView={6}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                480: {
                  slidesPerView: 2,
                },
                640: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 4,
                },
                840: {
                  slidesPerView: 5,
                },
                1024: {
                  slidesPerView: 6,
                }
              }}>
              {loading ? Array.from({ length: 9 }).map((_, i) => (
                <SwiperSlide key={i}>
                  <Skeleton width="100%" height="200px" borderRadius="8px" />
                  <div style={{ padding: "12px 0" }}>
                    <Skeleton width="60%" height="1.2rem" borderRadius="4px" />
                    <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
                      <Skeleton width="80px" height="1rem" borderRadius="4px" />
                      <Skeleton width="80px" height="1rem" borderRadius="4px" />
                    </div>
                  </div>
                </SwiperSlide>
              ))
                : cards.map((card) => (
                  <SwiperSlide className="collection-column " key={card.collectionId}>
                    <Link to={`/collection/${card.collectionId}`} className="collection">
                      <img
                        src={card.imageLink}
                        alt=""
                        className="collection__img"
                      />
                      <div className="collection__info">
                        <h3 className="collection__name">{card.title}</h3>
                        <div className="collection__stats">
                          <div className="collection__stat">
                            <span className="collection__stat__label">Floor</span>
                            <span className="collection__stat__data">{Number(card.floor).toFixed(2)} ETH</span>
                          </div>
                          <div className="collection__stat">
                            <span className="collection__stat__label">
                              Total Volume
                            </span>
                            <span className="collection__stat__data">{card.totalVolume} ETH</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </div>
      </div>
    </section >
  );
}
