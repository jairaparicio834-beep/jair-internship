import React from 'react';
import Skeleton from './Skeleton';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const RecommendedItemsSkeleton = () => {
    return (
        <>
            <section id="recommended-items">
                <div className="container">
                    <div className="row recommended-items__row">
                        <div className="recommended-items__wrapper">
                            <div className="recommended-items__header">
                                <Skeleton width='260px' height='30px' borderRadius="12px" />
                                <h3 className="recommended-items__header__title">
                                </h3>
                            </div>
                            <div className="recommended-items__body">
                                <Swiper
                                    modules={[Navigation]}
                                    navigation={true}
                                    loop={true}
                                    spaceBetween={16}
                                    slidesPerView={1}
                                    breakpoints={{
                                        480: { slidesPerView: 1 },
                                        640: { slidesPerView: 2 },
                                        768: { slidesPerView: 3 },
                                        860: { slidesPerView: 4 },
                                        1024: { slidesPerView: 5 },
                                        1280: { slidesPerView: 6 },
                                    }}
                                >
                                    {new Array(10).fill(0).map((_, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="item">
                                                <figure className="item__img__wrapper">
                                                    <Skeleton width="100%" height="210px" />
                                                </figure>
                                                <div className="item__details">
                                                    <div>
                                                        <Skeleton width="70px" height="14px" borderRadius="4px" />
                                                    </div>
                                                    <div>
                                                        <Skeleton width="100px" height="14px" borderRadius="4px" />
                                                    </div>
                                                    <div>
                                                        <Skeleton width="120px" height="14px" borderRadius="4px" />
                                                    </div>
                                                </div>
                                                {/* 👇 add this */}
                                                <div className="item__see-more">
                                                    <Skeleton width="100%" height="36px" borderRadius="8px" />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                            <div className="recommended-items__footer">
                                <Skeleton width="160px" height="44px" borderRadius="8px" />
                            </div>

                        </div>
                    </div>
                </div>
            </section >

        </>
    );
}
export default RecommendedItemsSkeleton;
