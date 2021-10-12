import React from "react";
import "./Card.css";

const Card = ({ data }) => {
  return (
    <div className="card-wrapper">
      {data.map((item) => (
        <div className="item-container">
          <div className="details-part">
            <div className="image-container">
              <img src={item.image} alt="item-image" />
            </div>
            <div className="content">
              <div className="header">{item.title}</div>
              <div className="price">$ {item.price}</div>
              <div className="category">{item.category}</div>
            </div>
            <div className="button-centered">
              <button>Add to cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;

{
  /* <div className="ui link cards">
<div className="card">
  <div className="image">
    <img src={item.image} alt={item.title} />
  </div>
  <div className="content">
    <div className="header">{item.title}</div>
    <div className="meta price">$ {item.price}</div>
    <div className="meta">{item.category}</div>
  </div>
</div> */
}
