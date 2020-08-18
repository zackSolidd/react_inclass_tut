import React from "react";

function Display(props) {
    return (
        <div>
            Display Component
            <div> Display all the information that i want</div>
            <h1>{props.slang}</h1>
            <h2>{props.word}</h2>
            <h2>{props.number}</h2>
            <h3>{props.info.map((student) => (
                (student.age > 4) ? (
                    <li>
                        {student.name} - {student.age}
                    </li>
                ) : null
            ))}</h3>
        </div>
    )
}

export default Display;
