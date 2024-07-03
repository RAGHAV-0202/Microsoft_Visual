import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Joke from './joke';

function SayHi(){
  return (
    <div className='header'>
      <p>Raghav</p>
      <p>React JS</p>
    </div>
  )
}
const data = [
  { setup: "Why don't scientists trust atoms?", punchline: "Because they make up everything!", upvotes: 20, downVotes: 40, comments: [{ author: "raghav", comm: "wow" }, { author: "aas", comm: "love that !!!" }] },
  { setup: "Why did the chicken join a band?", punchline: "Because it had the drumsticks!", upvotes: 15, downVotes: 5, comments: [{ author: "john", comm: "funny" }] },
  { setup: "Why don't some couples go to the gym?", punchline: "Because some relationships don't work out!", upvotes: 25, downVotes: 10, comments: [{ author: "jane", comm: "haha!" }] },
  { setup: "Why was the math book sad?", punchline: "Because it had too many problems!", upvotes: 30, downVotes: 2, comments: [{ author: "doe", comm: "so true" }] }
];

function MainBody(){
  return (
    <div className='main'>
      {data.map((content, index) => (
        <Joke 
          key={index}
          setup={content.setup} 
          punchline={content.punchline} 
          upvotes={content.upvotes}
          downVotes={content.downVotes}
          comments={content.comments}
        />
      ))}
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
      <SayHi/>
      <MainBody/>
    </>
);
