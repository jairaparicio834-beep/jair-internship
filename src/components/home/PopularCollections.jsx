import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from "swiper/modules";
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Skeleton from "../ui/Skeleton";

export default function PopularCollections() {
  const [popularCollections, setPopularCollections] = useState([])
  const [loading, setLoading] = useState(true)
  async function fetchPopularCollections() {
    const { data } = await axios.get('https://remote-internship-api-production.up.railway.app/popularCollections')
    const realData = data.data;

    setPopularCollections(realData)
    setLoading(false)
  }

  useEffect(() => {
    setLoading(true)
    fetchPopularCollections()
  }, [])
  return (
    <section id="popular-collections">
      <div className="container">
        <div className="row" data-aos="fade-up" >
          <h2 className="popular-collections__title">Popular Collections</h2>
          <div className="popular-collections__body" data-aos="fade-up">
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
                : popularCollections.map((collection) => (
                  <SwiperSlide className="collection-column " key={collection.collectionId}>
                    <Link to={`/collection/${collection.collectionId}`} className="collection">
                      <img
                        src={collection.imageLink}
                        alt=""
                        className="collection__img"
                      />
                      <div className="collection__info">
                        <h3 className="collection__name">{collection.title}</h3>
                        <div className="collection__stats">
                          <div className="collection__stat">
                            <span className="collection__stat__label">Floor</span>
                            <span className="collection__stat__data">{Number(collection.floor).toFixed(2)} ETH</span>
                          </div>
                          <div className="collection__stat">
                            <span className="collection__stat__label">
                              Total Volume
                            </span>
                            <span className="collection__stat__data">{collection.totalVolume}K ETH</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
