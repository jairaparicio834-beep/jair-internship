import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import UserPageSkeleton from "../components/ui/UserPageSkeleton";
export default function UserPage() {
  const [user, setUser] = useState(null)
  const [userItems, setUserItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [amount, setAmount] = useState(12)
  const [sortPrices, setSortPrices] = useState('');
  const { id } = useParams()
  async function fetchUser() {
    const { data } = await axios.get(`https://remote-internship-api-production.up.railway.app/user/${id}`)
    const userData = data.data;
    setUser(userData)
    setUserItems(userData.items)
    setLoading(false)
  }
  function addAmount() {
    setAmount(prev => prev + 6)
  }

  useEffect(() => {
    setLoading(true)
    window.scrollTo(0, 0);
    fetchUser()
  }, []);
  useEffect(() => {
    if (sortPrices === 'LOW_TO_HIGH') {
      setUserItems(userItems.slice().sort((a, b) => a.price - b.price))
    }
    else if (sortPrices === 'HIGH_TO_LOW') {
      setUserItems(userItems.slice().sort((a, b) => b.price - a.price))
    } else if (sortPrices === '') {
      setUserItems(user?.items)
    }

  }, [sortPrices])

  return (
    <>
      {loading ?
        <UserPageSkeleton />
        : <>
          <header
            style={{
              backgroundImage: `url(${user?.imageLink})`,
            }}
            id="user-header"
          ></header>

          <section id="user-info">
            <div className="row">
              <div className="user-info__wrapper">
                <figure className="user-info__img__wrapper">
                  <img
                    src={user?.profilePicture}
                    alt=""
                    className="user-info__img"
                  />
                </figure>
                <h1 className="user-info__name">{user?.name}</h1>
                <div className="user-info__details">
                  <span className="user-info__wallet">
                    <FontAwesomeIcon
                      icon={faEthereum}
                      className="user-info__wallet__icon"
                    />
                    <span className="user-info__wallet__data">{user?.walletCode}</span>
                  </span>
                  <span className="user-info__year">
                    <span className="user-info__year__data">
                      Joined {user?.creationDate}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section id="user-items">
            <div className="row user-items__row">
              <div className="user-items__header">
                <div className="user-items__header__left">
                  <span className="user-items__header__text">{userItems?.length} items</span>
                </div>
                <select className="user-items__header__sort" onChange={(e) => setSortPrices(e.target.value)}>
                  <option value="">Recently purchased</option>
                  <option value="HIGH_TO_LOW">Price high to low</option>
                  <option value="LOW_TO_HIGH">Price low to high</option>
                </select>
              </div>
              <div className="user-items__body">
                {userItems?.slice(0, amount).map((item) => (
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
                        <span className="item__details__price">{Number(item.price).toFixed(2)} ETH</span>
                        <span className="item__details__last-sale">
                          Last sale:{item.lastSale} ETH
                        </span>
                      </div>
                      <a className="item__see-more" href="#">
                        <button className="item__see-more__button">See More</button>
                        <div className="item__see-more__icon">
                          <FontAwesomeIcon icon={faShoppingBag} />
                        </div>
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            {
              amount < userItems?.length &&
              <button className="collection-page__button" onClick={addAmount}>Load more</button>
            }
          </section>
        </>}
    </>
  );
}
