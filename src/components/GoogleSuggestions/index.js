// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  updateSearchInput = value => {
    this.setState({searchInput: value})
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchResults = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-image"
          />

          <div className="search-container">
            <div className="search-input-container ">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-image"
              />
              <input
                type="search"
                placeholder="Search"
                className="input"
                onChange={this.onClickChangeValue}
                value={searchInput}
              />
            </div>
            <ul>
              {searchResults.map(eachItem => (
                <SuggestionItem
                  key={eachItem.id}
                  suggestionDetails={eachItem}
                  updateSearchInput={this.updateSearchInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
