import React from 'react'

import TextInputContainer from './TextInputContainer'
import QuestionListComponent from '../components/QuestionListComponent'

class QuestionEditContainer extends React.Component {

  constructor() {
    super()
    this.handleQuestionEntered = this.handleQuestionEntered.bind( this )
  }

  handleQuestionEntered( question ) {
    this.props.addQuestionCallback( question )
  }

  render() {
    return (
      <div className="half-width">
        <TextInputContainer
          textEnteredCallback={ this.handleQuestionEntered }
          placeholder="Enter a question"
          buttonText="Add Question"
        />
        <QuestionListComponent
          questions={ this.props.questions }
        />
      </div>
    )
  }

}

export default QuestionEditContainer
