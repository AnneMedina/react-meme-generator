import React from "react"
import Header from "./Header"
import Meme from "./Meme"

/**
 * Challenge: 
 * - Create a Meme component.
 * - Inside the Meme component, render a styled form
 *   with our 2 inputs and the button.
 * - Don't worry about adding any functionality yet
 */
export default function App() {
    // return <h1>Hello world!</h1>
    return (
        <div>
            <Header />
            <Meme />
        </div>
    )
}
