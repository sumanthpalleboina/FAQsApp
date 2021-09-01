import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  constructor(props) {
    super(props)
    const {faqsList} = props
    this.state = {
      faqsList: faqsList.map(each => ({
        ...each,
        openState: false,
      })),
    }
  }

  clickedIcon = id => {
    this.setState(prevState => ({
      faqsList: prevState.faqsList.map(each => {
        if (each.id === id) {
          return {...each, openState: !each.openState}
        }
        return each
      }),
    }))
  }

  render() {
    const {faqsList} = this.state
    console.log(faqsList)
    return (
      <div className="app-container">
        <div className="Faqs-section">
          <h1 className="faqs-heading">FAQs</h1>
          <ul className="faqs-items">
            {faqsList.map(each => (
              <FaqItem
                key={each.id}
                item={each}
                clickedIcon={this.clickedIcon}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
