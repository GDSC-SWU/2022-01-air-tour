import React, { useEffect, useRef } from 'react';
import styles from './Ticket.module.css';
import {ReactComponent as FlightLogo} from '../../images/ticket/ticket-top-flight-icon.svg';
import Background1 from '../../images/ticket/ticket-top-background-1.png';
import Background2 from '../../images/ticket/ticket-top-background-2.png';
import Background3 from '../../images/ticket/ticket-top-background-3.png';
import Asiana from '../../images/ticket/asiana-airline.png';
import Korean from '../../images/ticket/korean-air.png';

function TicketCarousel(props) {
    const TICKET_WIDTH = 50.8;
    const TICKET_GAP = 3.0;

    const ticketRef = [];
    const carouselRef = useRef(false);

    useEffect(() => {
        ticketRef.forEach((ref, idx) => {
            if (idx < props.position) {
                ref.style.opacity = 0;
                ref.style.scale = 0.5;
            } else {
                ref.style.opacity = 1;
                ref.style.scale = 1.0;
            }
            ref.style.transform = `translateX(-${props.position * TICKET_WIDTH}rem) translateX(-${props.position * TICKET_GAP}rem)`;
        })
    },[props.position])

    useEffect(() => {
        if (props.trigger) {
            setTimeout(() => {
                carouselRef.current.style.transform = "translateY(0px)";
                carouselRef.current.style.opacity = 1.0;
            }, 300);
        }
    }, [props.trigger])

    const getTopImage = (i) => {
        switch (i % 3) {
            case 0: return Background1;
            case 1: return Background2;
            case 2: return Background3;
            default: console.error("INVALID CASE")
        }
    }

    return (
        <>
        <div className={styles.carouselContainer} ref={carouselRef}>
        {props.data && props.data.map((e, i) => {
            return(
                <div className={styles.ticketBox} key={i} ref={ref => ticketRef[i] = ref}>
                    <div className={styles.ticketHoleLeft} />
                    <div className={styles.ticketHoleRight} />

                    <div className={styles.ticketTop} style={{backgroundImage: `url(${getTopImage(i)})`}}>
                        <div className={styles.ticketTopFrom}>
                            <div className={styles.ticketTopTitle}>출발지</div>
                            <div className={styles.ticketTopContent}>{e.from}</div>
                        </div>
                        <FlightLogo />
                        <div className={styles.ticketTopTo}>
                            <div className={styles.ticketTopTitle}>도착지</div>
                            <div className={styles.ticketTopContent}>{e.to}</div>
                        </div>
                    </div>
                    <div className={styles.ticketBottom}>
                        <div style={{display: 'flex', flexGrow: 1}}>
                            <div className={styles.ticketBottomFrom}>
                                <div className={styles.ticketBottomTitle}>한국 출발</div>
                                <div className={styles.ticketBottomContent}>{e.departure}</div>
                            </div>
                            <div className={styles.ticketBottomTo}>
                                <div className={styles.ticketBottomTitle}>한국 도착</div>
                                <div className={styles.ticketBottomContent}>{e.arrival}</div>
                            </div>
                        </div>
                        <div style={{display: 'flex', marginBottom: 0}}>
                            <img
                                src={e.airline === "아시아나항공" ? Asiana : Korean}
                                alt="항공사 이미지"
                                width={e.airline === "아시아나항공" ? '159' : '174'}
                                height={e.airline === "아시아나항공" ? '46' : '50'}
                                style={{margin: 'auto auto 0 0'}}
                            />
                            <div className={styles.ticketBottomPrice}>{e.price.toLocaleString('ko-KR')}원</div>
                        </div>
                    </div>
                </div>
            );
        })}
        </div>
        </>
    );
}

export default TicketCarousel;