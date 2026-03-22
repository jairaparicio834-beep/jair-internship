import React from 'react';
import Skeleton from "../ui/Skeleton";
const CollectionPageSkeleton = () => {
    return (
        <>
            <div style={{ width: '100%', height: '320px' }}>
                <Skeleton width="100%" height="320px" />
            </div>

            <section id="collection-info">
                <div className="row">
                    <div className="collection-info__wrapper" style={{ gap: '8px' }}>
                        <Skeleton width="90%" height={14} borderRadius={4} />
                        <Skeleton width="90%" height={14} borderRadius={4} />
                        <Skeleton width="65%" height={14} borderRadius={4} />

                        <div className="collection-info__details" style={{ margin: '20px 0' }}>
                            <Skeleton width={50} height={14} borderRadius={4} />
                            <Skeleton width={120} height={14} borderRadius={4} />
                            <Skeleton width={110} height={14} borderRadius={4} />
                            <Skeleton width={90} height={14} borderRadius={4} />
                        </div>
                    </div>
                </div>
            </section>

            <section id="collection-items">
                <div className="row collection-items__row">
                    <div className="collection-items__header">
                        <div className="collection-items__header__left">
                            <Skeleton width={52} height={16} borderRadius={4} />
                            <Skeleton width={72} height={16} borderRadius={4} />
                        </div>
                        <Skeleton width={200} height={36} borderRadius={8} />
                    </div>

                    <div className="collection-items__body">
                        {Array.from({ length: 12 }).map((_, i) => (
                            <div className="item-column" key={i}>
                                <div className="item">
                                    <figure className="item__img__wrapper">
                                        <Skeleton width="100%" height="100%" borderRadius={0} />
                                    </figure>
                                    <div className="item__details">
                                        <Skeleton width="65%" height={14} borderRadius={4} />
                                        <Skeleton width="40%" height={12} borderRadius={4} />
                                        <Skeleton width="80%" height={12} borderRadius={4} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    );
}

export default CollectionPageSkeleton;
