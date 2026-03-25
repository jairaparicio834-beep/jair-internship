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
                                <Skeleton width='24px' height='24px' borderRadius="4px" />
                                <Skeleton width='220px' height='24px' borderRadius="6px" />
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
                                    {Array.from({ length: 6 }).map((_, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="item" style={{ pointerEvents: 'none' }}>
                                                <figure className="item__img__wrapper" style={{ aspectRatio: '1 / 1' }}>
                                                    <Skeleton width="100%" height="100%" />
                                                </figure>
                                                <div className="item__details">
                                                    <Skeleton width="80px" height="14px" borderRadius="4px" />
                                                    <Skeleton width="60px" height="14px" borderRadius="4px" />
                                                    <Skeleton width="110px" height="14px" borderRadius="4px" />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                            <div className="recommended-items__footer">
                                <Skeleton width="160px" height="44px" borderRadius="12px" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default RecommendedItemsSkeleton;
