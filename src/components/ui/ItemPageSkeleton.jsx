import React from 'react';
import Skeleton from './Skeleton';
const ItemPageSkeleton = () => {
    return (
        <section id="item-info">
            <div className="container">
                <div className="row item-page__row">

                    {/* Left - image */}
                    <div className="item-page__left">
                        <figure className="item-page__img__wrapper">
                            <Skeleton width="100%" height="100%" borderRadius="12px" />
                        </figure>
                    </div>

                    {/* Right - details */}
                    <div className="item-page__right" style={{ gap: '10px' }}>

                        <Skeleton width="120px" height="18px" borderRadius="4px" />   {/* CryptoPunks */}
                        <Skeleton width="280px" height="44px" borderRadius="4px" />   {/* CryptoPunk #10 */}
                        <Skeleton width="200px" height="18px" borderRadius="4px" />   {/* Owned by ... */}

                        <div className="item-page__details">
                            <Skeleton width="100px" height="18px" borderRadius="4px" />
                            <Skeleton width="100px" height="18px" borderRadius="4px" />
                            <Skeleton width="60px" height="18px" borderRadius="4px" />
                        </div>

                        <div className="item-page__sale">
                            <div className="item-page__sale__header">
                                <Skeleton width="160px" height="16px" borderRadius="4px" />
                            </div>
                            <div className="item-page__sale__body" >

                                <Skeleton width="100px" height="16px" borderRadius="4px" />  {/* Current price */}

                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <Skeleton width="80px" height="44px" borderRadius="4px" />  {/* 2 ETH */}
                                    <Skeleton width="60px" height="24px" borderRadius="4px" />  {/* $7521 */}
                                </div>

                                {/* All buttons on the same row */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <Skeleton width="50%" height="52px" borderRadius="8px" />  {/* Buy now */}
                                    <Skeleton width="50%" height="52px" borderRadius="8px" />  {/* Make offer */}
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default ItemPageSkeleton;
