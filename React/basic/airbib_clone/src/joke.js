import React from "react";

export default function Joke(props){
    return (
        <div className="JokeDiv">
            {props.setup && <div className="setup">Setup : {props.setup}</div>}
            {props.punchline && <div className="punchline">{props.punchline}</div>}
            {props.upvotes && <p className='greet'>Upvotes : {props.upvotes}</p>}
            {props.downVotes && <p className='greet'>DownVotes : {props.downVotes}</p>}

            {props.comments && (
                <div className='comments'>
                    <p>Comments:</p>
                    <ul>
                        {props.comments.map((comment, index) => (
                            <li key={index}>
                                <strong>{comment.author}:</strong> {comment.comm}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            
        </div>
    );
}
