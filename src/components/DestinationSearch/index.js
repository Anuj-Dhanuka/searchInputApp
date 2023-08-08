// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem/index'

class DestinationSearch extends Component {
  state = {searchValue: '', destinationsList: ''}

  searchDestinationPlace = event => {
    this.setState({searchValue: event.target.value})
  }

  render() {
    const {initialDestinationsList} = this.props
    const {searchValue} = this.state
    const {destinationsList} = this.state

    const searchResults = initialDestinationsList.filter(eachPlace =>
      eachPlace.name.includes(searchValue),
    )
    console.log(searchResults)

    return (
      <div className="destination-search-bg-container">
        <h1 className="destination-main-heading">Destination Search</h1>
        <div className="search-bar-container">
          <input
            type="search"
            className="search-bar"
            onChange={this.searchDestinationPlace}
            value={searchValue}
          />
          <button type="button" className="button-style">
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </button>
        </div>
        <ul className="items-list-container">
          {searchResults.map(eachItem => (
            <DestinationItem
              initialDestinationsList={eachItem}
              key={eachItem.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
