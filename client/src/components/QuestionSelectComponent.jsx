import React from 'react'

class QuestionSelectComponent extends React.Component {

  render() {
    var options = this.props.options.map( (optionText, index) => {
      return <option key={ index } value={ optionText }>{ optionText }</option>
    })

    return (
      <select>
        { options }
      </select>
    )
  }

}

export default QuestionSelectComponent
