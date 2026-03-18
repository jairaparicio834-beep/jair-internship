import React, { useEffect, useState } from "react";
import CollectionHeader from "../components/collection/CollectionHeader";
import CollectionInfo from "../components/collection/CollectionInfo";
import CollectionItems from "../components/collection/CollectionItems";
import axios from "axios";
import { useParams } from "react-router-dom";
import CollectionPageSkeleton from "../components/ui/CollectionPageSkeleton";
export default function CollectionPage() {
  const { id } = useParams()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  async function fetchCollection() {
    try {
      const { data } = await axios.get(`https://remote-internship-api-production.up.railway.app/collection/${id}`)
      const userData = data.data;
      setUser(userData)
      setLoading(false)
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true)
    fetchCollection()
  }, [id]);

  return (
    <>
      {
        loading ?
          <>
            <CollectionPageSkeleton />
          </>
          : <>
            <CollectionHeader user={user} />
            <CollectionInfo user={user} />
            <CollectionItems user={user} />
          </>
      }

    </>
  );
}
