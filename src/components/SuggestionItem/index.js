// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updateSearchInput} = props
  const {suggestion} = suggestionDetails

  const OnClickSuggestion = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="list">
      <p className="para">{suggestion}</p>
      <button
        type="button"
        onClick={OnClickSuggestion}
        className="arrow-button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
