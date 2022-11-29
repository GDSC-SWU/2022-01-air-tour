import styles from "./Slide.module.css";
import airplaneIcon from "../../images/icon/airplane.svg";
import handIcon from "../../images/icon/hand.svg";

export default function Slide(props) {
  const IMAGE_PATH = require(`../../images/img/main_banner/${props.data.image}`);
  return (
    <div
      className={styles.img}
      style={{
        backgroundImage: `url('${IMAGE_PATH}')`,
      }}
    >
      {props.index === 0 ? (
        <div className={styles.img_cover}></div>
      ) : (
        <div className={styles.img_cover2}></div>
      )}
      <div className={styles.content}>
        <div className={`${styles.recommandTag} `}>
          {props.index === 0 && (
            <div className={styles.tag_0}>{props.data.tag}</div>
          )}
          {props.index === 1 && (
            <div className={styles.tag_1}>{props.data.tag}</div>
          )}
          {props.index === 2 && (
            <div className={styles.tag_2}>{props.data.tag}</div>
          )}
        </div>
        <div className={styles.title}>{props.data.title}</div>
        <div className={styles.title_text}>{props.data.title_text}</div>
        <div className={styles.text}>
          {props.data.text[0].includes("항공") ? (
            <div className={styles.text_li}>
              <img
                src={airplaneIcon}
                alt="airplane icon"
                width={33}
                height={32}
              ></img>
              <span>{props.data.text[0]}</span>
            </div>
          ) : (
            <div className={`${styles.text_li} ${styles.li_no_icon}`}>
              <span>{props.data.text[0]}</span>
            </div>
          )}
          {props.data.text[1].includes("동행") ? (
            <div className={styles.text_li}>
              <img src={handIcon} alt="hand icon" width={33} height={33}></img>
              <span>{props.data.text[1]}</span>
            </div>
          ) : (
            <div className={`${styles.text_li} ${styles.li_no_icon}`}>
              <span>{props.data.text[1]}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
