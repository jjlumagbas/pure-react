import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Avatar() {
  return (
    <img
      src="https://www.gravatar.com/avatar/nothing"
      className="avatar"
      alt="avatar" />
  );
}

function NameWithHandle() {
  return (
    <span className="name-with-handle">
      <span className="name">Your Name</span>
      <span className="handle">@yourhandle</span>
    </span>
  );
}

const Time = () => (
  <time className="time">3h ago</time>
);

const ReplyButton = () => (
  <button>
    <i class="fas fa-reply" aria-hidden="true"> </i>
    <span class="sr-only">Reply</span>
  </button>
);

const RetweetButton = () => (
  <button>
    <i class="fas fa-retweet" aria-hidden="true"> </i>
    <span class="sr-only">Retweet</span>
  </button>
);

const LikeButton = () => (
  <button>
    <i class="fas fa-heart" aria-hidden="true"> </i>
    <span class="sr-only">Like</span>
  </button>
);

const MoreOptionsButton = () => (
  <button>
    <i class="fas fa-ellipsis-h" aria-hidden="true"> </i>
    <span class="sr-only">More Options</span>
  </button>
);

function Message() {
  return (
    <p className="message">
      This is less than 140 characters.
    </p>
  );
}

function Actions() {
  return (
    <ul className="actions">
      <li><ReplyButton/></li>   
      <li><RetweetButton/></li>   
      <li><LikeButton/></li>   
      <li><MoreOptionsButton/></li>   
    </ul>
  );
}

function Tweet() {
  return (
    <article className="tweet">
      <Avatar/>
      <section className="content">
        <NameWithHandle/><Time/>
        <Message/>
        <footer className="buttons">
          <Actions/>
        </footer>
      </section>
    </article>
  );
}

ReactDOM.render(
  <Tweet/>, 
  document.querySelector('#root')
);