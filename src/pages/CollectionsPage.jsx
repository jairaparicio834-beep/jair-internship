import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

import CollectionPageSkeleton from "../components/ui/CollectionPageSkeleton";
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
            <CollectionPageSkeleton />
            : collections.slice(0, load).map((collection) => (
              <Card key={collection.creatorId} collection={collection} />
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
