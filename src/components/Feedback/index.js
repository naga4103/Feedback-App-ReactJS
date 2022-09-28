// Write your React code here.

import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    isEmojiClicked: false,
  }

  setIsFeedbackSelected = () => {
    this.setState(prevState => ({isEmojiClicked: !prevState.isEmojiClicked}))
  }

  renderEmojiContainer = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div>
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emojis-list-container">
          {emojis.map(emoji => (
            <li
              key={emoji.id}
              className="list-item-container"
              onClick={this.setIsFeedbackSelected}
            >
              <img src={emoji.imageUrl} alt={emoji.name} className="emoji" />
              <p className="emoji-title">{emoji.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderSuccessfulContainer = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thankyou-container">
        <img src={loveEmojiUrl} className="emoji" alt="love emoji" />
        <h1 className="thankyou-heading">Thank You!</h1>
        <p className="thankyou-message">
          We’ll use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isEmojiClicked} = this.state
    return (
      <div className="app-container">
        <div className="container">
          {isEmojiClicked
            ? this.renderSuccessfulContainer()
            : this.renderEmojiContainer()}
        </div>
      </div>
    )
  }
}

export default Feedback
