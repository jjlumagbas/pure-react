import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment';

function Avatar({ hash }) {
  const url = `https://www.gravatar.com/avatar/${hash}`;
  return (
    <img
      src={url}
      className="avatar"
      alt="avatar" />
  );
}

function NameWithHandle({ author }) {
  const { name, handle } = author;
  return (
    <span className="name-with-handle">
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>
  );
}

const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return (
    <time className="time">{timeString}</time>
  );
}

const ReplyButton = () => (
  <button>
    <i className="fas fa-reply" aria-hidden="true"> </i>
    <span className="sr-only">Reply</span>
  </button>
);

const Count = ({ count }) =>
  count > 0 ? <span className="count">{count}</span> : null;


const RetweetButton = ({ count }) => (
  <button>
    <i className="fas fa-retweet" aria-hidden="true"> </i>
    <span className="sr-only">Retweet</span>
    <Count count={count} />
  </button>
);

const LikeButton = ({ count }) => (
  <button>
    <i className="fas fa-heart" aria-hidden="true"> </i>
    <span className="sr-only">Like</span>
    <Count count={count} />
  </button>
);

const MoreOptionsButton = () => (
  <button>
    <i className="fas fa-ellipsis-h" aria-hidden="true"> </i>
    <span className="sr-only">More Options</span>
  </button>
);

function Message({ text }) {
  return (
    <p className="message">{text}</p>
  );
}

function Tweet({ tweet }) {
  return (
    <article className="tweet">
      <Avatar hash={tweet.gravatar} />
      <section className="content">
        <NameWithHandle author={tweet.author} />
        <Time time={tweet.timestamp} />
        <Message text={tweet.message} />
        <footer className="buttons">
          <ul className="actions">
            <li><ReplyButton /></li>
            <li><RetweetButton count={tweet.retweets} /></li>
            <li><LikeButton count={tweet.likes} /></li>
            <li><MoreOptionsButton /></li>
          </ul>
        </footer>
      </section>
    </article>
  );
}

var testTweet = {
  message: "I neither know nor I think I know.",
  gravatar: "1f38e8410cb0596d418bab5e61366613",
  author: {
    handle: "catperson",
    name: "IAMA Cat Person"
  },
  likes: 2,
  retweets: 12293,
  timestamp: "2016-07-30 21:24:37"
};

ReactDOM.render(
  <Tweet tweet={testTweet} />,
  document.querySelector('#root')
);