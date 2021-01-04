import React from 'react'
import Switch from "./Switch";
import Calendar from 'react-calendar';


export default function Card() {
    return (
        <div class="card-container">
            <img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
            <h3>Britney Spears</h3>
            <h6>New York</h6>
            <p>Newbie Skater</p>
            <div class="buttons">
                <button class="primary">
                    Message
		</button>
                <button class="primary ghost">
                    Following
		</button>
            </div>
            <div class="skills">
                <h6>Skate Preferences</h6>
                <ul>
                    <li>Indoor</li>
                </ul>
            </div>
            <Switch />
            <Calendar />
        </div>
    )
}
