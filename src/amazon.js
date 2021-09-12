import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function Amazon() {
  const [list, setlist] = useState([]);
  useEffect(async () => {
    try {
      let products = await axios.get("http://localhost:3000/");
      setlist([...products.data]);
    } catch (error) {}
  }, []);

  return (
    <div className="container-fluid" id="amazon">
      <div>
        <h2 style={{ textAlign: "center" }}>Amazon Shirts</h2>
      </div>
      <div className="row ">
        {list.map((obj) => {
          return (
            <div className="col-lg-3" id="first">
              <div className="row">
                <div className="col">
                  <img src={obj.srcs} id="card-img-top" alt={obj.name} />
                </div>
                <div className="col" id="size">
                  <div>
                    <strong>{obj.name}</strong>
                  </div>
                  <div>
                    <span style={{ color: "white" }}> Price:</span>
                    <strong>Rs{obj.price}/-</strong>
                  </div>
                  <div>
                    <span style={{ color: "white" }}> Brand:</span>
                    <strong>{obj.type}</strong>
                  </div>
                  <div>
                    <span style={{ color: "white" }}> offers:</span>
                    <strong>{obj.offers}</strong>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Amazon;
