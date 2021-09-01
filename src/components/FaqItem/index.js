import './index.css'

const FaqItem = props => {
  const {item, clickedIcon} = props
  const {questionText, answerText, id, openState} = item

  const iconUrl = openState
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

  const altText = openState ? 'minus' : 'plus'

  const opened = () => (
    <div>
      <hr className="breakLine" />
      <p className="answer-text">{answerText}</p>
    </div>
  )

  const openedAnswer = () => openState && opened()

  const clickOnIcon = () => {
    clickedIcon(id)
  }

  return (
    <li className="faqsitem">
      <div className="question-with-icon">
        <h1 className="question">{questionText}</h1>
        <button type="button" className="icon-btn-style" onClick={clickOnIcon}>
          <img src={iconUrl} alt={altText} className="icon-style" />
        </button>
      </div>
      {openedAnswer()}
    </li>
  )
}

export default FaqItem
