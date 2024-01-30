import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "../Pagination";
import "../Products/Products.css";

function Products() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(12);

  useEffect(() => {
    axios
      .get("https://dummyapi.online/api/products")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch(() => {
        alert("There was an error while retrieving the data");
      });
  }, []);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage);

  return (
    <section className="shop_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Latest Products</h2>
        </div>
        <div className="price-filter">
          <label htmlFor="size-select">Select Price:</label>

          <select className="form-select">
            <option selected>Select menu</option>
            <option value="1">Price high to low</option>
            <option value="2">Price low to high</option>
          </select>
        </div>
        <div className="row">
          {currentRecords.map((data) => {
            return (
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="box">
                  <a href="">
                    <div className="img-box">
                      <img src="images/p1.png" alt="" />
                    </div>
                    <div className="detail-box">
                      <h6>{data.name}</h6>
                      <h6>
                        Price
                        <span>$200</span>
                      </h6>
                    </div>
                    <div className="new">
                      <span>New</span>
                    </div>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <div className="btn-box">
          <Pagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </section>
  );
}

export default Products;
