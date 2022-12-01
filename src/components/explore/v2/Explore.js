import React from "react";
import styles from "./Explore.module.css";
import Package from "./Package.js";
import "bootstrap/dist/css/bootstrap.css";
import explore_sample from "../../../data/explore/package_sample2.json";

export default function Explore() {
  const render = () => {
    const result = [];

    for (let i = 0; i < 8; i++) {
      explore_sample.data.map((e, idx) => {
        result.push(
          <Package
            key={`${idx}_${i}`}
            img={e.images[i % 5]}
            city={e.city}
            etc={e.etc}
            sche={e.schedule}
            price={e.price}
            score={e.score}
          />
        );

        return result;
      });
    }

    return result;
  };

  return (
    <div className={styles.container}>
      <div className={styles.gridbox}>{render()}</div>
    </div>
  );
}
