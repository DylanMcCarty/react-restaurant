import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Loading from "./Loading";

export default function ApiCall() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://astute-baton-362318.ue.r.appspot.com/api/json/")
      .then((resp) => {
        console.log(resp.data);
        setData(resp.data);
      });
  }, []);

  // if (data.length === 0) {
  //   return <Loading />;
  // } else {
    return (
    <Header data={data} />
    )
  } 
// }

