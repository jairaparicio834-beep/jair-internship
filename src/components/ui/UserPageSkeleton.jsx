import React from "react";
import Skeleton from "./Skeleton";

const UserPageSkeleton = () => {
    return (
        <>
            {/* Header banner */}
            <header id="user-header">
                <Skeleton width="100%" height="100%" borderRadius="0px" />
            </header>

            {/* User info */}
            <section id="user-info">
                <div className="row">
                    <div className="user-info__wrapper">
                        <figure className="user-info__img__wrapper" style={{ marginBottom: '20px' }}>
                            <Skeleton width='180px' height='180px' />
                        </figure>
                        <Skeleton width="160px" height="28px" borderRadius="4px" />     {/* name */}
                        <div className="user-info__details" style={{ marginTop: '16px' }}>
                            <Skeleton width="130px" height="18px" borderRadius="4px" />   {/* wallet */}
                            <Skeleton width="150px" height="18px" borderRadius="4px" />   {/* joined date */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Items grid */}
            <section id="user-items">
                <div className="row user-items__row">
                    <div className="user-items__header">
                        <Skeleton width="80px" height="18px" borderRadius="4px" />   {/* "163 items" */}
                        <Skeleton width="160px" height="36px" borderRadius="4px" />   {/* sort dropdown */}
                    </div>
                    <div className="user-items__body">
                        {new Array(12).fill(0).map((_, index) => (
                            <div className="item-column" key={index}>
                                <div className="item">
                                    <figure className="item__img__wrapper">
                                        <Skeleton width="100%" height="400px" borderRadius="8px" />
                                    </figure>
                                    <div className="item__details">
                                        <Skeleton width="80%" height="16px" borderRadius="4px" />  {/* title */}
                                        <Skeleton width="50%" height="16px" borderRadius="4px" />  {/* price */}
                                        <Skeleton width="65%" height="14px" borderRadius="4px" />  {/* last sale */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default UserPageSkeleton;