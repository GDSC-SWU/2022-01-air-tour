import { useState, useEffect, useRef } from "react";
import styles from "./MainBanner.module.css";
import slide0 from "../../images/img/slide0.jpg";
import slide1 from "../../images/img/slide1.jpg";
import slide2 from "../../images/img/slide2.jpg";
import airplaneIcon from "../../images/icon/airplane.svg";
import handIcon from "../../images/icon/hand.svg";
import leftArrow from "../../images/icon/left.svg";
import rightArrow from "../../images/icon/right.svg";

function MainBanner() {
  // 배너 이미지 배열
  const images = useRef([
    { src: `url('${slide0}')` },
    { src: `url('${slide1}')` },
    { src: `url('${slide2}')` },
  ]);

  const [current, setCurrent] = useState(0);
  const [style, setStyle] = useState({
    marginLeft: `-${current}00%`,
  });
  const imgSize = useRef(images.current.length);

  // 슬라이드 이동 func
  const moveSlide = (i) => {
    let nextIndex = current + i;

    if (nextIndex < 0) nextIndex = imgSize.current - 1;
    else if (nextIndex >= imgSize.current) nextIndex = 0;

    // 다음 인덱스로 슬라이드 이동
    setCurrent(nextIndex);
  };

  //
  useEffect(() => {
    setStyle({ marginLeft: `-${current}00%` });
  }, [current]);

  return (
    <div className={styles.container}>
      <div className={styles.slide}>
        <div className={styles.window}>
          <div className={styles.flexbox} style={style}>
            <div
              className={styles.img}
              style={{
                backgroundImage: `${images.current[0].src}`,
              }}
            >
              <div className={styles.content}>
                <div className={styles.recommandTag}>
                  <div
                    style={{
                      backgroundColor: "#FFFFFF",
                      color: "#000000",
                      padding: "2px 14px",
                    }}
                  >
                    여행지 추천
                  </div>
                </div>
                <div className={styles.country_title}>스페인 포르투갈</div>
                <div className={styles.title_text}>
                  여행이 완벽히 완성되는 순간
                </div>
                <div className={styles.aboveContent}>
                  <div className={styles.above_li}>
                    <img
                      src={airplaneIcon}
                      alt="airplane icon"
                      width={33}
                      height={32}
                    ></img>
                    <span>아시아나 항공 직항</span>
                  </div>
                  <div className={styles.above_li}>
                    <img
                      src={handIcon}
                      alt="hand icon"
                      width={33}
                      height={33}
                    ></img>
                    <span>유럽 전문 인솔자 동행</span>
                  </div>
                </div>
              </div>
              <div className={styles.img_cover}></div>
            </div>
            <div
              className={styles.img}
              style={{ backgroundImage: `${images.current[1].src}` }}
            >
              <div className={styles.content}>
                <div className={styles.recommandTag}>
                  <div
                    style={{
                      backgroundColor: "#000000",
                      padding: "2px 14px",
                    }}
                  >
                    에어투어 단독
                  </div>
                </div>
                <div className={styles.country_title}>런던</div>
                <div className={styles.title_text}>
                  나의 로망이 이루어지는 곳
                </div>
                <div className={styles.aboveContent}>
                  <div className={styles.above_li}>
                    <span>COVID-19 입국 제한 해제!</span>
                  </div>
                  <div className={styles.above_li}>
                    <span>에어투어에서 준비한 투어를 만나보세요</span>
                  </div>
                </div>
              </div>
              <div className={styles.img_cover}></div>
            </div>
            <div
              className={styles.img}
              style={{ backgroundImage: `${images.current[2].src}` }}
            >
              <div className={styles.content}>
                <div className={styles.ecommandTag}>
                  <div style={{ backgroundColor: "red", padding: "2px 14px" }}>
                    SALE
                  </div>
                </div>
                <div className={styles.country_title}>일본</div>
                <div className={styles.title_text}>에어투어 단독 특가</div>
                <div className={styles.aboveContent}>
                  <div className={styles.above_li}>
                    <img
                      src={airplaneIcon}
                      alt="airplane icon"
                      width={33}
                      height={32}
                    ></img>
                    <span>아시아나 항공 직항</span>
                  </div>
                  <div className={styles.above_li}>
                    <span>인기 있는 곳만 모아서 압축한 일본여행 패키지</span>
                  </div>
                </div>
              </div>
              <div className={styles.img_cover}></div>
            </div>
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
                  width={28}
                  height={28}
                  className={styles.btnLeft}
                ></img>
              </div>
              <span className={styles.position}>{current + 1}</span>
              <span className={styles.pos_text1}>/</span>
              <span className={styles.pos_text}>3</span>
              <div
                className={styles.btn}
                onClick={() => {
                  moveSlide(1);
                }}
              >
                <img
                  src={rightArrow}
                  alt="next slide"
                  width={28}
                  height={28}
                  className={styles.btnRight}
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
