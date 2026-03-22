import { faShoppingBag, faTableCells } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function RecommendedItems({ collectionId, id }) {
  const [items, setItems] = useState([])
  async function fetchRecommendedItems() {
    if (!collectionId) return;
    const { data } = await axios.get(
      `https://remote-internship-api-production.up.railway.app/collection/${collectionId}`
    );
    const itemData = data.data.items;
    setItems(itemData);

  }
  useEffect(() => {
    fetchRecommendedItems()
  }, [collectionId])

  return (
    <section id="recommended-items">
      <div className="container">
        <div className="row recommended-items__row">
          <div className="recommended-items__wrapper">
            <div className="recommended-items__header">
              <FontAwesomeIcon icon={faTableCells} />
              <h3 className="recommended-items__header__title">
                More from this collection
              </h3>
            </div>
            <div className="recommended-items__body">
              <Swiper
                modules={[Navigation]}
                navigation
                loop={true}
                spaceBetween={16}
                breakpoints={{
                  480: { slidesPerView: 1 },
                  640: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  860: { slidesPerView: 4 },
                  1024: { slidesPerView: 5 },
                  1280: { slidesPerView: 6 },
                }}
              >
                {
                  items?.filter(item => item.itemId !== id)
                    .slice(0, 10)
                    .map((item) => (
                      <SwiperSlide className="item-column" key={item.itemId} >
                        <Link to={`/item/${item.itemId}`} className="item">
                          <figure className="item__img__wrapper">
                            <img
                              src={item.imageLink}
                              alt=""
                              className="item__img"
                            />
                          </figure>
                          <div className="item__details">
                            <span className="item__details__name">{item.title}</span>
                            <span className="item__details__price">{item.price} ETH</span>
                            <span className="item__details__last-sale">
                              Last sale: {item.lastSale} ETH
                            </span>
                          </div>
                          <div className="item__see-more">
                            <button className="item__see-more__button">
                              See More
                            </button>
                            <div className="item__see-more__icon">
                              <FontAwesomeIcon icon={faShoppingBag} />
                            </div>
                          </div>
                        </Link>
                      </SwiperSlide>
                    ))}
              </Swiper>
            </div>
            <div className="recommended-items__footer">
              <Link
                to={`/collection/${collectionId}`}
                className="recommended-items__footer__button"
              >
                View Collection
              </Link>
            </div>


          </div>

        </div>
      </div>
    </section>
  );
}
