import React from "react";

export default function Joke(props) {
    return (
        <div class="jokeInstance">
            <p id="setup">{props.setup}</p>
            <p id="punchline">{props.punchline}</p>
        </div>
    )
}