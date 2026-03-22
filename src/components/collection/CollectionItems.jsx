import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CollectionItems({ user }) {
  const [numOfItems, setNumOfItems] = useState(12);
  const [itemsList, setItemsList] = useState([])
  const [items, setItems] = useState('')
  function loadMoreItems() {
    setNumOfItems(prev => prev + 6)
  }

  useEffect(() => {
    if (user?.items) {
      setItemsList(user.items)
    }
  }, [user])

  useEffect(() => {
    if (itemsList.length === 0) return
    if (items === 'LOW_TO_HIGH') {
      setItemsList([...itemsList].sort((a, b) => Number(a.price) - Number(b.price)))
    }
    else if (items === 'HIGH_TO_LOW') {
      setItemsList([...itemsList].sort((a, b) => Number(b.price) - Number(a.price)))
    }
    else if (items === '') {
      setItemsList(user.items)
    }

  }, [items])



  return (
    <section id="collection-items">
      <div className="row collection-items__row">
        <div className="collection-items__header">
          <div className="collection-items__header__left">
            <span className="collection-items__header__live">
              <div className="green-pulse"></div>
              Live
            </span>
            <span className="collection-items__header__results">
              {itemsList.length} results
            </span>
          </div>
          <select className="collection-items__header__sort" value={items} onChange={(e) => setItems(e.target.value)} >
            <option value="" default>
              Default
            </option>
            <option value="HIGH_TO_LOW">Price high to low</option>
            <option value="LOW_TO_HIGH">Price low to high</option>
          </select>
        </div>
        <div className="collection-items__body">
          {
            itemsList.length > 0 &&
            itemsList?.slice(0, numOfItems).map((item) => (
              <div className="item-column" key={item.itemId}>
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
                    <button className="item__see-more__button">See More</button>
                    <div className="item__see-more__icon">
                      <FontAwesomeIcon icon={faShoppingBag} />
                    </div>
                  </div>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
      {
        numOfItems < itemsList.length &&
        <button className="collection-page__button" onClick={loadMoreItems}>Load more</button>
      }
    </section>
  );
}
