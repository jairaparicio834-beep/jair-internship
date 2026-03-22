import React from 'react';
import Skeleton from './Skeleton';
const CollectionPageSkeleton = () => {
    return (
        <>
            {new Array(12).fill(0).map(() =>
                <div className="collection-column">
                    <div className="collection">
                        <Skeleton width="100%" height="200px" borderRadius="8px" />
                        <div className="collection__info">
                            <Skeleton width="60%" height="20px" borderRadius="4px" />
                            <div className="collection__stats">
                                <div className="collection__stat">
                                    <Skeleton width="40px" height="14px" borderRadius="4px" />
                                    <Skeleton width="70px" height="14px" borderRadius="4px" />
                                </div>
                                <div className="collection__stat">
                                    <Skeleton width="80px" height="14px" borderRadius="4px" />
                                    <Skeleton width="70px" height="14px" borderRadius="4px" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)}
        </>
    );
}

export default CollectionPageSkeleton;
