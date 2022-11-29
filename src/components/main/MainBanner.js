import { useState, useEffect, useRef } from "react";
import Slide from "./Slide.js";
import styles from "./MainBanner.module.css";
import mainbanner_sample from "../../data/main/mainbanner_sample.json";
import leftArrow from "../../images/icon/left.svg";
import rightArrow from "../../images/icon/right.svg";

function MainBanner() {
  const [current, setCurrent] = useState(0);
  const [style, setStyle] = useState({
    marginLeft: `-${current}00%`,
  });
  const imgSize = useRef(mainbanner_sample.data.length); // 슬라이드 이동을 위해 전체 슬라이드 개수 가져오기

  // 슬라이드 이동
  const moveSlide = (i) => {
    let nextIndex = current + i;

    if (nextIndex < 0) nextIndex = imgSize.current - 1;
    else if (nextIndex >= imgSize.current) nextIndex = 0;

    // 다음 인덱스로 슬라이드 이동
    setCurrent(nextIndex);
  };

  // 캐러셀 슬라이딩: margin-left 설정
  useEffect(() => {
    setStyle({ marginLeft: `-${current}00%` });
  }, [current]);

  // setInterval 사용 시 dependency warning 방지 위한 커스텀 interval func.
  const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    // Remember the latest callback
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  };

  // 캐러셀 자동 슬라이드 (3500 ms)
  useInterval(() => {
    moveSlide(1);
  }, 3500);

  return (
    <div className={styles.container}>
      <div className={styles.slide}>
        <div className={styles.window}>
          <div className={styles.flexbox} style={style}>
            {mainbanner_sample.data.map((e, i) => {
              return <Slide key={i} data={e} index={i} />;
            })}
          </div>
          <div className={styles.pagination_container}>
            <div className={styles.pagination}>
              <div
                className={styles.btn}
                onClick={() => {
                  moveSlide(-1);
                }}
              >
                <img
                  src={leftArrow}
                  alt="previous slide"
                  width={9}
                  height={18}
                  className={styles.btn_left}
                ></img>
              </div>
              <div className={styles.pos}>
                <span className={styles.pos_current}>{current + 1}</span>
                <span className={styles.pos_slash}>/</span>
                <span className={styles.pos_size}>{imgSize.current}</span>
              </div>
              <div
                className={styles.btn}
                onClick={() => {
                  moveSlide(1);
                }}
              >
                <img
                  src={rightArrow}
                  alt="next slide"
                  width={9}
                  height={18}
                  className={styles.btn_right}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBanner;
