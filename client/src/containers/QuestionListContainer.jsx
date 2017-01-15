import React from 'react'

class QuestionListComponent extends React.Component {

  constructor() {
    super()
    this.handleQuestionClicked = this.handleQuestionClicked.bind( this )
  }

  handleQuestionClicked(  ev ) {
    this.props.onQuestionSelected( ev.target.innerText )
  }

  render() {
    const questionElements = this.props.questions.map( (question, index) => {
      const className = question === this.props.selectedQuestion ? "selected-question" : ""
      return (
        <button
          key={ index }
          className={ className }
          onClick={ this.handleQuestionClicked }
        >
          { question }
        </button>
      )
    })

    return (
      <div>{ questionElements }</div>
    )
  }

}

export default QuestionListComponent
