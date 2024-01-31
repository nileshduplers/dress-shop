import React from "react";
import "../WhyshopUs/WhyshopUs.css";

function WhyshopUs() {
  const details = [
    {
      title: "Fast Delivery",
      content: "variations of passages of Lorem Ipsum available",
      image: "/src/assets/img/1.svg",
    },
    {
      title: "Free Shiping",
      content: "variations of passages of Lorem Ipsum available",
      image: "/src/assets/img/2.svg",
    },

    {
      title: "PDF Download",
      content: "variations of passages of Lorem Ipsum available",
      image: "/src/assets/img/3.svg",
    },
  ];

  return (
    <section className="why_section ">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Why Shop With Us</h2>
        </div>

        <div className="row">
          {details.map(function (data) {
            return (
              <div className="col-md-4">
                <div className="box ">
                  <div className="img-box">
                    <img src={data.image} alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>{data.title}</h5>
                    <p>{data.content}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyshopUs;
