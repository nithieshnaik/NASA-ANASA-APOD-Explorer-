import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:4000/api/apod/today")
      .then(res => setData(res.data.data))
      .catch(err => console.error(err));
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div style={{ padding: 20 }}>
      <h1>{data.title}</h1>
      <img src={data.url} width="500" alt="APOD" />
      <p>{data.explanation}</p>
    </div>
  );
}
