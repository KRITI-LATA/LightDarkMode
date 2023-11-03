// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: false}

  onChangeMode = () => {
    const {isDarkMode} = this.state
    console.log({isDarkMode})
    this.setState(() => ({isDarkMode: !isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state

    const buttonText = isDarkMode ? 'Dark Mode' : 'Light Mode'

    return (
      <div className="bg-container">
        <div
          className={`container ${isDarkMode ? ' light-mode' : 'dark-mode'}`}
        >
          <h1 className={`${isDarkMode ? 'header' : 'head-text'}`}>
            Click To Change Mode
          </h1>
          <div>
            <button
              type="button"
              className="light-btn"
              onClick={this.onChangeMode}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
