import React from "react";
import "./ResultCard.css";

export default function ResultCard({ cardInfo }) {

  const GetDescBullets = ({ descBullets }) => {
    return descBullets ? descBullets.map((item) => <li className="subTitle">{item}</li>) : null
  };
  function openUrlInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className="card">
      <div className="card-banner">
        <a href={cardInfo.content} target="_blank">
          <img crossOrigin={"anonymous"} className="card-banner image" src={cardInfo.image} alt={cardInfo.title} />
        </a>
      </div>
      <div className="card-text-details">
        <h5 className="card-text-title">{cardInfo.title}</h5>
        <h5 className="card-text-subtitle">{cardInfo.subtitle}</h5>
        <p className="subTitle card-text-desc">{cardInfo.desc}</p>
        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} />
        </ul>{/*
        <a href={cardInfo.url} target="_blank">View Demo</a>*/}
      </div>
    </div>
  );
}
