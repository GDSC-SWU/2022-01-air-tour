import Placeholder from "../../common/Placeholder.js";
import styles from "./Package.module.css";
import { useRef, useState, useEffect } from "react";

export default function Package(props) {
  const packageRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const IMAGE_PATH = require(`../../../images/img/explore/${props.img}`);

  // callback
  const onIntersect = ([entry], io) => {
    if (entry.isIntersecting) {
      io.unobserve(entry.target);
      setTimeout(() => {
        setIsLoaded(true);
      }, 2000); // 2000 ms
    }
  };

  // IntersectionObserver 등록
  useEffect(() => {
    const io = new IntersectionObserver(onIntersect, { threshold: 0.5 });
    io.observe(packageRef.current);
    return () => io.disconnect();
  });

  return (
    <div className={styles.package_container} ref={packageRef}>
      {isLoaded ? (
        <>
          <div className={styles.img_container}>
            <img
              className={`${styles.img} ${styles.fadein}`}
              src={IMAGE_PATH}
              alt={props.img}
            />
          </div>
          <div className={styles.info_container}>
            <div className={`${styles.info_city} ${styles.fadein}`}>
              {props.city}
            </div>
            <div className={`${styles.info_etc} ${styles.fadein}`}>
              {props.etc}
            </div>
            <div className={`${styles.info_sche} ${styles.fadein}`}>
              {props.sche}
            </div>
            <div className={`${styles.info_price} ${styles.fadein}`}>
              <span className={styles.info_price_price}>
                ₩{props.price.toLocaleString()}
              </span>
              <span className={styles.info_price_text}>&nbsp;/박</span>
            </div>
            <div className={`${styles.info_star} ${styles.fadein}`}>
              <span className={styles.info_star_star}>★</span>
              <span className={styles.info_star_score}>{props.score}</span>
            </div>
          </div>
        </>
      ) : (
        <Placeholder />
      )}
    </div>
  );
}
