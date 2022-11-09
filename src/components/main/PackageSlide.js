import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './PackageSlide.module.css';
import Wrapper from '../../components/common/Wrapper' //재사용(모듈화)
import Card1 from '../../images/card1.png'
import Card2 from '../../images/card2.png'
import Card3 from '../../images/card3.png'
import Card4 from '../../images/card4.png'
import Card5 from '../../images/card5.png'


function App() {
  
  
  // React Slick carousel responsive settings
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,  // 한 화면에 3개의 카드 보여줌
      slidesToScroll: 1,  // 슬라이드 1개씩 넘김
      initialSlide: 0,
      
      // 반응형
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <Wrapper>
    <h2>실속있는 당신을 위한 긴급 모객 패키지</h2>
    <span>여행 마니아들이 자주 찾아요</span>
    <Slider {...settings}>
    <div className={styles.card}>
    <div className={styles.cardBorder}>
        <div className={styles.cardTop}>
          <img className={styles.topimg} src={Card1} alt="img1" /> 
        </div>
        <div className={styles.cardBottom}>
          <p className={styles.departDate}>4/27 출발</p>
          <p className={styles.title}>[KTX+평창관광택시/2인출발가능] 대관령 하늘목장 + 월정사 전나무숲</p>
          <div className={styles.price}>
            <p className={styles.notSalePrice}>120,000원</p>
            <p className={styles.salePrice}>92,000원</p>
        </div>
        </div>
      </div>
      </div>
      <div className={styles.card}>
      <div className={styles.cardBorder}>
        <div className={styles.cardTop}>
          <img className={styles.topimg} src={Card2} alt="img1" /> 
        </div>
        <div className={styles.cardBottom}>
          <p className={styles.departDate}>4/27 출발</p>
          <p className={styles.title}>[KTX+평창관광택시/2인출발가능] 대관령 하늘목장 + 월정사 전나무숲</p>
          <div className={styles.price}>
            <p className={styles.notSalePrice}>120,000원</p>
            <p className={styles.salePrice}>92,000원</p>
        </div>
        </div>
      </div>
      </div>
      <div className={styles.card}>
      <div className={styles.cardBorder}>
        <div className={styles.cardTop}>
          <img className={styles.topimg} src={Card3} alt="img1" /> 
        </div>
        <div className={styles.cardBottom}>
          <p className={styles.departDate}>4/27 출발</p>
          <p className={styles.title}>[KTX+평창관광택시/2인출발가능] 대관령 하늘목장 + 월정사 전나무숲</p>
          <div className={styles.price}>
            <p className={styles.notSalePrice}>120,000원</p>
            <p className={styles.salePrice}>92,000원</p>
          </div>
        </div>
      </div>
      </div>
      <div className={styles.card}>
      <div className={styles.cardBorder}>
        <div className={styles.cardTop}>
          <img className={styles.topimg} src={Card4} alt="img1" /> 
        </div>
        <div className={styles.cardBottom}>
          <p className={styles.departDate}>4/27 출발</p>
          <p className={styles.title}>[KTX+평창관광택시/2인출발가능] 대관령 하늘목장 + 월정사 전나무숲</p>
          <div className={styles.price}>
            <p className={styles.notSalePrice}>120,000원</p>
            <p className={styles.salePrice}>92,000원</p>
          </div>
        </div>
      </div>
      </div>
      <div className={styles.card}>
      <div className={styles.cardBorder}>
        <div className={styles.cardTop}>
          <img className={styles.topimg} src={Card5} alt="img1" /> 
        </div>
        <div className={styles.cardBottom}>
          <p className={styles.departDate}>4/27 출발</p>
          <p className={styles.title}>[KTX+평창관광택시/2인출발가능] 대관령 하늘목장 + 월정사 전나무숲</p>
          <div className={styles.price}>
            <p className={styles.notSalePrice}>120,000원</p>
            <p className={styles.salePrice}>92,000원</p>
          </div>
        </div>
      </div>
      </div>
    </Slider>
  </Wrapper>
  );
}

export default App;