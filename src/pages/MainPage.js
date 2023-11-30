import React from 'react';
import MainBanner from '../components/main/MainBanner';
import Ticket from '../components/main/Ticket';

function MainPage() {
    return (
        <>
        <MainBanner />
        <div style={{width: "100px", height: "800px"}} />
        <Ticket />
        <div style={{width: "100px", height: "500px"}} />
        </>
    );
}

export default MainPage;