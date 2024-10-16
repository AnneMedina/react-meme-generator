import React from "react";

export default function Meme() {
    return (
        <form className="meme">
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

            <button className="meme--button">Get a new meme image  🖼 <img src="" className="button-logo" /></button>
        </form>
    )
}
