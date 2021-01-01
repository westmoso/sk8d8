import React, { useState, useEffect } from 'react';
import TinderCards from 'react-tinder-card'
import '../styling/Cards.css';
import database from "../base"
// import database from "../firebase" --importing to configure database connection to collection of users later. requires modifying the base.js file which needs .env error corrected that stops/invalidates signup and sign in


function Cards() {
    const [skater, setSkater] = useState([
        {
            name: "Black Widow",
            url: "https://a-static.besthdwallpaper.com/scarlett-johansson-as-black-widow-in-avengers-wallpaper-2732x2048-12874_172.jpg"

        },
        {
            name: "Iron Man",
            url: "https://pmcvariety.files.wordpress.com/2013/12/01-iron-man-3.jpg"
        },
        {
            name: "Scarlet Witch",
            url: "https://mtv.mtvnimages.com/uri/mgid:ao:image:mtv.com:91092?quality=0.8&format=jpg&width=1440&height=810&.jpg"
        }

    ]);

    // useEffect(() => {
    //     const unsubscribe = database
    //         .collection(`skaters`)
    //         .onSnapshot(snapshot => {
    //             setSkater(snapshot.docs.map(doc => doc.data()))
    //         });

    //     return () => {
    //         unsubscribe();
    //     };
    // }, [])


    const swiped = (direction, nameToDelete) => {
        console.log("receiving " + nameToDelete)
    }


    const outOfFrame = (name) => {
        console.log(name + " was swiped off the screen!")
    }

    return (
        <div className="skaterCards">
            <div className="card_container">
                {skater.map(person => (
                    <TinderCards
                        className="swipe"
                        key={skater.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swiped(dir, skater.name)}
                        onCardLeftScreen={() => outOfFrame(skater.name)}>
                        <div style={{
                            backgroundImage: `url(${person.url})`
                        }}
                            className="card"
                        >
                            <h2>{skater.name} {skater.age}</h2>
                        </div>
                    </TinderCards>

                ))}
            </div>
        </div>
    )
}

export default Cards
