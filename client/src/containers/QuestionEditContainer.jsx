import React from 'react'

import TextInputContainer from './TextInputContainer'
import QuestionListContainer from './QuestionListContainer'

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
      <QuestionListContainer
          questions={ this.props.questions }
          selectedQuestion={ this.props.selectedQuestion }
          onQuestionSelected={ this.props.onQuestionSelected }
        />
      </div>
    )
  }

}

export default QuestionEditContainer
