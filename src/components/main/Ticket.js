import React, { useEffect, useRef, useState } from 'react';
import styles from './Ticket.module.css';
import ticket_sample from '../../data/main/ticket_sample.json';
import TicketCarousel from './TicketCarousel';
import Wrapper from '../common/Wrapper';
import useScrollPosition from "../etc/useScrollPosition";

function Ticket() {
    const [response, setResponse] = useState({});
    const [position, setPosition] = useState(0);
    const [SLIDE_MAX, setSlideMax] = useState(0);

    // scrollPosition Event
    const scrollPosition = useScrollPosition();
    const titleRef = useRef(null);
    const subTitleRef = useRef(null);
    const arrowRef = useRef(null);
    const [parentTriggered, setParentTriggered] = useState(false);

    useEffect(() => {
        setResponse(ticket_sample)
        setSlideMax(ticket_sample.data.length - 1)
    }, [])

    useEffect(() => {
        if (titleRef.current.getBoundingClientRect().y < window.innerHeight/2) {
            titleRef.current.style.transform = "translateY(0px)";
            titleRef.current.style.opacity = 1.0;
            arrowRef.current.style.transform = "translateY(0px)";
            arrowRef.current.style.opacity = 1.0;
            setTimeout(() => {
                subTitleRef.current.style.transform = "translateY(0px)";
                subTitleRef.current.style.opacity = 1.0;
                setParentTriggered(true);
            }, 300);
        }
        // console.log(titleRef.current.getBoundingClientRect(), window.innerHeight)
    }, [scrollPosition])

    const leftButtonHandler = () => {
        if(position !== 0) {
            setPosition(position - 1);
        }
    }

    const rightButtonHandler = () => {
        if(position !== SLIDE_MAX) {
            setPosition(position + 1);
        }
    }

    return (
        <>
        <Wrapper>
            <div style={{display: "flex"}}>
                <div style={{display: "flex", flexDirection: "column", flexGrow: 1}}>
                    <div className={styles.title} ref={titleRef}>긴급 항공권</div>
                    <div className={styles.subTitle} ref={subTitleRef}>패키지용 공동구매 항공권으로 최소출발인원이 필요해요</div>
                </div>
                <div className={styles.arrowContainer} ref={arrowRef}>
                    <div className={styles.leftArrowButton} onClick={leftButtonHandler}>
                        <svg width="61" height="22" viewBox="0 0 61 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M61 20H5.5L23.6295 2" stroke={position === 0 ? "#C4C4C4" : "#4F4F4F"} strokeWidth="4"/>
                        </svg>
                    </div>
                    <div className={styles.rightArrowButton} onClick={rightButtonHandler}>
                        <svg width="61" height="22" viewBox="0 0 61 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 20H55.5L37.3705 2" stroke={position === SLIDE_MAX ? "#C4C4C4" : "#4F4F4F"} strokeWidth="4"/>
                        </svg>
                    </div>
                </div>
            </div>
        </Wrapper>
        <TicketCarousel data={response.data} position={position} trigger={parentTriggered}/>
        </>
    );
}

export default Ticket;