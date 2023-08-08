// Write your code here
import {Component} from 'react'
import './index.css'

class DestinationItem extends Component {
  render() {
    const {initialDestinationsList} = this.props
    const {name, imgUrl} = initialDestinationsList

    return (
      <li className="list-container">
        <img src={imgUrl} alt={name} className="destination-image-style" />
        <p className="img-description">{name}</p>
      </li>
    )
  }
}

export default DestinationItem
