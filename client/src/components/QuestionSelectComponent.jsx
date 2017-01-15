import React from 'react'

class QuestionSelectComponent extends React.Component {

  render() {
    var options = this.props.options.map( (optionText, index) => {
      return <option key={ index } value={ optionText }>{ optionText }</option>
    })

    options.unshift( <option key="please-select" value="" selected disabled>Select a question</option> )

    return (
      <select>
        { options }
      </select>
    )
  }

}

export default QuestionSelectComponent
