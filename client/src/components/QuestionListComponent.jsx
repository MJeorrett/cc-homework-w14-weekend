import React from 'react'

class QuestionListComponent extends React.Component {

  render() {

    const questionElements = this.props.questions.map( (question, index) => {
      return (
        <button
          key={ index }
          questionText={ question }
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
