/* eslint-disable no-unused-expressions */
// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    number: 0,
  }

  onRandomNumberGenerator = () => {
    const newRandom = Math.ceil(Math.random() * 100)
    // eslint-disable-next-line react/no-unused-state
    this.setState({number: newRandom})
  }

  render() {
    const {number} = this.state
    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="desc">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="generate-button"
            onClick={this.onRandomNumberGenerator}
          >
            Generate
          </button>
          <p className="number">{number}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
