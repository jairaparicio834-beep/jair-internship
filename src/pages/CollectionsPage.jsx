import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import Skeleton from "../components/ui/Skeleton";
export default function CollectionsPage() {
  const [collections, setCollections] = useState([])
  const [load, setLoad] = useState(12)
  const [loading, setLoading] = useState(true)
  async function fetchCollections() {
    const { data } = await axios.get('https://remote-internship-api-production.up.railway.app/collections')
    const list = data.data
    setCollections(list)
    setLoading(false)
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true)
    fetchCollections()
  }, []);
  function loadMore() {
    setLoad(prev => prev + 6)
  }
  return (
    <div className="container">
      <div className="row">
        <h1 className="collections-page__title">Collections</h1>
        <div className="collections__body">
          {loading ?
            Array.from({ length: 12 }).map((_, i) => (
              <div key={i} style={{ display: 'flex', flexWrap: 'wrap', width: '16%' }}>
                <Skeleton width="100%" height="200px" borderRadius="8px" />
                <div style={{ padding: "12px 0" }}>
                  <Skeleton width="60%" height="1.2rem" borderRadius="4px" />
                  <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
                    <Skeleton width="80px" height="1rem" borderRadius="4px" />
                    <Skeleton width="80px" height="1rem" borderRadius="4px" />
                  </div>
                </div>
              </div>
            ))
            : collections.slice(0, load).map((collection) => (
              <Card key={collection.collectionId} collection={collection} />
            ))}
        </div>
        {
          load < collections.length &&
          <button className="collections-page__button" onClick={loadMore}>Load more</button>
        }
      </div>
    </div>
  );
}
