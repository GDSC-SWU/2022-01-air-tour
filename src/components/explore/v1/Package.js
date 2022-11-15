import { useEffect, useRef } from "react";
import { useState } from "react";
import styles from "./PackageGrid.module.css";
import PackageLoader from "./PackageLoader";
import useFade from "../../etc/useFade";
import {ReactComponent as StarSvg} from "../../../images/package/star.svg";

const Package = (props) => {
    const packageRef = useRef(null);
    const imageRef = useRef(null);
    const [VWIDTH, setVWIDTH] = useState(0);
    const GRID_COLUMNS = 4 // WIP: needs to be responsive
    const COLUMN_GAP = 24
    const TOTAL_PADDING = 80 * 2 // WIP: needs to be responsive

    const [show, setShow] = useState(false);
    const IMAGE_PATH = require(`../../../images/package/lazy_test/${props.image}`)

    const [isVisible, setVisible, _, fadeProps] = useFade();

    const onWindowResized = () => {
        setVWIDTH((document.documentElement.clientWidth - TOTAL_PADDING - COLUMN_GAP * (GRID_COLUMNS-1)) / GRID_COLUMNS)
    }

    const onIntersect = async ([entry], observer) => {
        if (entry.isIntersecting) {
            observer.unobserve(entry.target);
            props.fetch(props.index)
            // setTimeout(() => {setShow(true)}, 500); // intended 500ms
        }
    }

    useEffect(() => {
        onWindowResized()
        window.addEventListener('resize', onWindowResized)
        return () => window.removeEventListener('resize', onWindowResized)
    }, [])

    /* assign IntersectionObserver */
    useEffect(() => {
        const observer = new IntersectionObserver(onIntersect, { threshold: 0.0 });
        observer.observe(packageRef.current);
        return () => observer.disconnect();
    }, []);
    useEffect(() => {
        const observer = new IntersectionObserver(onIntersect, { threshold: 0.5 });
        observer.observe(packageRef.current);
        return () => observer.disconnect();
    }, []);
    useEffect(() => {
        const observer = new IntersectionObserver(onIntersect, { threshold: 1.0 });
        observer.observe(packageRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div className={styles.package} ref={packageRef}>
            {props.show &&
            <>
                <div className={styles.packageImage} ref={imageRef} >
                    <img {...fadeProps} src={IMAGE_PATH} width={VWIDTH} height={VWIDTH*0.95} alt="package" />
                </div>
                
                <div className={styles.packageInfo}>
                    <div className={styles.infoContainer}>
                        <div className={styles.title}>{props.title}</div>
                        <div className={styles.distance}>{props.distance}</div>
                        <div className={styles.date}>{props.date}</div>
                        <div className={styles.price}>₩{props.price.toLocaleString('ko-KR')} /박</div>
                    </div>
                    <div className={styles.rate}>
                        <StarSvg />
                        {props.rate}
                    </div>
                </div>
                
            </>
            }
            {!props.show && <PackageLoader />}
        </div>
    )
}

export default Package;