import React, { useEffect, useState } from "react";
import CollectionHeader from "../components/collection/CollectionHeader";
import CollectionInfo from "../components/collection/CollectionInfo";
import CollectionItems from "../components/collection/CollectionItems";
import axios from "axios";
import { useParams } from "react-router-dom";
export default function CollectionPage() {
  const { id } = useParams()
  const [user, setUser] = useState(null)

  async function fetchCollection() {
    const { data } = await axios.get(`https://remote-internship-api-production.up.railway.app/collection/${id}`)
    const userData = data.data;
    setUser(userData)
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchCollection()
  }, [id]);

  return (
    <>
      <CollectionHeader user={user} />
      <CollectionInfo user={user} />
      <CollectionItems user={user} />
    </>
  );
}
