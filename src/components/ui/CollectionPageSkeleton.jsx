import React from 'react';
import Skeleton from "../ui/Skeleton";
const CollectionPageSkeleton = () => {
    return (
        <>
            {new Array(12).fill(0).map(() =>
                <div className="collection-column">
                    <div className="collection">
                        <Skeleton width="100%" height="200px" borderRadius="8px" />  {/* image */}
                        <div className="collection__info">
                            <Skeleton width="60%" height="22px" borderRadius="4px" />  {/* title */}
                            <div className="collection__stats">
                                <div className="collection__stat">
                                    <Skeleton width="40px" height="14px" borderRadius="4px" />  {/* Floor label */}
                                    <Skeleton width="60px" height="14px" borderRadius="4px" />  {/* Floor value */}
                                </div>
                                <div className="collection__stat">
                                    <Skeleton width="80px" height="14px" borderRadius="4px" />  {/* Total Volume label */}
                                    <Skeleton width="60px" height="14px" borderRadius="4px" />  {/* Total Volume value */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </>
    );
}

export default CollectionPageSkeleton;
