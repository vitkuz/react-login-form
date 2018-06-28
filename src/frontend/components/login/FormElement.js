import React, { Component } from 'react';

class FormElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue:'',
      errorMessage:''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(e) {
    console.log(e.target.value);
    const inputValue = e.target.value;
    this.setState(() => {
      return {
        inputValue
      }
    })
  }
  render() {
  
    const { labelText, helpText } = this.props;
    const {id,type,name,placeholder,className,required} = this.props;
    
    const inputOptions = {
      id,
      type,
      name,
      placeholder,
      className,
      required
    };
    
    switch(this.props.type) {
      case 'text':
        return (
            <fieldset>
              <label forhtml={id}>{labelText}</label>
              <input {...inputOptions} value={this.state.inputValue} onChange={this.handleInputChange}/>
              { helpText && <p className="help-text">{helpText}</p> }
            </fieldset>
        );
        break;
      case 'password':
        return (
            <fieldset>
              <label forhtml={this.props.id}>{labelText}</label>
              <input {...inputOptions} value={this.state.inputValue} onChange={this.handleInputChange}/>
              { helpText && <p className="help-text">{helpText}</p> }
            </fieldset>
        );
        break;
      case 'email':
        return (
            <fieldset>
              <label forhtml={this.props.id}>{labelText}</label>
              <input {...inputOptions} value={this.state.inputValue} onChange={this.handleInputChange}/>
              { helpText && <p className="help-text">{helpText}</p> }
            </fieldset>
        );
        break;
      default:
        return (
            <fieldset>
              <label forhtml={this.props.id}>{labelText}</label>
              <input {...inputOptions} value={this.state.inputValue} onChange={this.handleInputChange}/>
              { helpText && <p className="help-text">{helpText}</p> }
            </fieldset>
        )
    }
    
  }
  
};

export default FormElement;