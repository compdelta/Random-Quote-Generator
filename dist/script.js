function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const quotes = {
  "text": ["There are nights when the wolves are silent and only the moon howls.", "There’s nothing wrong with having a tree as a friend.", "Poetry is an echo asking a shadow to dance.", "All cats are mortal. Socrates is mortal. Therefore Socrates is a cat.", "Cannibals prefer those who have no spines.", "I can wait for you longer. Because you have arrived."],
  "author": ["George Carlin", "Bob Ross", "Carl Sandburg", "Eugene Ionesco", "Stanislaw Jerzy Lec", "Antonio Porchia"] };


const min = 1;
const max = 6;
const rand = min + Math.floor(Math.random() * (max - min));

class RandomQuote extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleClick",




    () => {
      this.setState({ rand: min + Math.floor(Math.random() * (max - min)) });
    });this.state = { rand: min + Math.floor(Math.random() * (max - min)) };}

  render() {
    return (
      React.createElement("div", { id: "wrapper" },
      React.createElement("h1", null, "Random Quote Generator"),
      React.createElement("div", { id: "quote-box", class: "text-center" },
      React.createElement("div", { id: "text" }, "\"", quotes.text[this.state.rand], "\""),
      React.createElement("div", { id: "author" }, quotes.author[this.state.rand]),
      React.createElement("div", { id: "buttons" },

      React.createElement("button", { onClick: this.handleClick, id: "new-quote" }, "New Quote"),

      React.createElement("button", { id: "tweet-quote" }, React.createElement("a", { href: "https://twitter.com/intent/tweet?text='" + quotes.text[this.state.rand] + "' - " + quotes.author[this.state.rand], target: "_blank" }, "Tweet Quote"))))));




  }}



ReactDOM.render(React.createElement(RandomQuote, null), document.getElementById('App'));