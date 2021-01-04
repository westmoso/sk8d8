import React from 'react'
import Carousel from "react-elastic-carousel";
import Card from "./Card";
import '../styling/CardFrame.css';


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

function CardFrame() {
    return (
        <><h1 style={{ textAlign: "center" }}>Choose a Skater</h1>
            <div className="CardFrame">
                <Carousel breakPoints={breakPoints}>
                    <Card />
                </Carousel>
            </div>
        </>
    )
}

export default CardFrame
