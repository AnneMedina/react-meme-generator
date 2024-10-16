import React from "react";
import memesData from "./memesData.js";



function getMemeImage() {
    const memesArr = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArr.length);
    console.log(memesArr[randomNumber].url);
}


export default function Meme() {

    /**
     * Challenge: Get a random image from the `memesData` array
     * when the "new meme image" button is clicked.
     * 
     * Log the URL of the image to the console. (Don't worry
     * about displaying the image yet)
     */
    return (
        <div className="meme">
            <div className="meme--inputs">
                <label>Top text
                    <input type="text" className="meme--input" placeholder="Shut up"></input>
                </label>
            </div>

            <div className="meme--inputs">
                <label>Bottom text
                    <input type="text" className="meme--input" placeholder="And take my money"></input>
                </label>
            </div>

            <button onClick={getMemeImage} className="meme--button">Get a new meme image  🖼 <img src="" className="button-logo" /></button>
        </div>
    )
}
