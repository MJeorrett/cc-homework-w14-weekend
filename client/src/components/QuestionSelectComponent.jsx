import React from 'react'

class QuestionSelectComponent extends React.Component {

  constructor() {
    super()
    this.handleOptionSelected = this.handleOptionSelected.bind( this )
  }

  handleOptionSelected( ev ) {
    this.props.onQuestionSelected( ev.target.value )
  }

  render() {
    var options = this.props.options.map( (optionText, index) => {
      return <option key={ index } value={ optionText }>{ optionText }</option>
    })

    options.unshift( <option key="please-select" value="" disabled>Select a question</option> )

    return (
      <select
        onChange={ this.handleOptionSelected }
        value={ this.props.selectedQuestion }
      >
        { options }
      </select>
    )
  }

}

export default QuestionSelectComponent
