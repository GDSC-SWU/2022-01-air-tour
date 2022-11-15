import { useState } from "react";
import Package from "./Package";
import styles from "./PackageGrid.module.css";
import package_sample from '../../../data/explore/package_sample.json';
import { useEffect } from "react";

const PackageGrid = () => {
    const [showStart, setShowStart] = useState(999999);
    const [showEnd, setShowEnd] = useState(-1);
    const FETCH_AMOUNT = 4 * 5; // WIP: needs to be responsive
    const FETCH_MAX = package_sample.data.length;

    const setShowRange = async (index) => {
        setTimeout(()=> {
            setShowStart(n => Math.min(n, index));
            setShowEnd(n => Math.max(n, index));
        }, 500);
        // 20개 단위인데 별로임
        // for (var i=0; i<FETCH_MAX; i+=FETCH_AMOUNT) {
        //     if (i <= index && index <= i+FETCH_AMOUNT-1) {
        //         setShowStart(Math.min(showStart, i));
        //         setShowEnd(Math.max(showEnd, i+FETCH_AMOUNT-1));
        //         return;
        //     }
        // }
    }

    useEffect(() => {
        console.log(showStart, showEnd)
    }, [showStart, showEnd])

    return (
        <div className={styles.grid}>
        {package_sample.data.map((e, i) => {
            return (
                <Package
                    image={e.image}
                    show={showStart <= i && i <= showEnd}
                    index={i}
                    title={e.title}
                    distance={e.distance}
                    date={e.date}
                    price={e.price}
                    rate={e.rate}
                    fetch={setShowRange}
                />
            )
        })}
        </div>
    )
}

export default PackageGrid;