import React, {Component} from 'react';

class FormElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      errorMessage: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputReset = this.handleInputReset.bind(this);
    this.textInput = React.createRef();
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
  
  handleInputReset(e) {
    this.setState(() => {
      return {
        inputValue:''
      }
    })
    this.focus();
  }
  
  focus() {
    this.textInput.current.focus();
  }
  
  componentDidMount() {
    console.log(`Component "${this.props.name}" did mount`)
    if (this.props.autofocus) {
      console.log('focus')
      this.focus();
    }
  }
  
  render() {
    
    const {labelText, helpText, labelVisualHidden, isInvalid} = this.props;
    const {id, type, name, placeholder, className, required} = this.props;
    
    const inputOptions = {
      id,
      type,
      name,
      placeholder,
      className,
      required,
    };
    
    if (isInvalid) {
      inputOptions['aria-invalid'] = true;
    }
    
    switch (this.props.type) {
      case 'text':
        return (
          <fieldset>
            {labelVisualHidden ?
              <label forhtml={id} className="visuallyhidden">{labelText}</label> :
              <label forhtml={id}>{labelText}</label>}
            <input {...inputOptions}
                   value={this.state.inputValue}
                   onChange={this.handleInputChange}
                   aria-describedby={`${id}-tip`}
                   ref={this.textInput}/>
            {this.state.inputValue.length > 0 && <a href="#" className="input-reset-link" arial-label="Click to reset input value" onClick={this.handleInputReset}>*</a>}
            { helpText && <div role="tooltip" id={`${id}-tip`} className="help-text">{helpText}</div> }
          </fieldset>
        );
        break;
      case 'password':
        return (
          <fieldset>
            {labelVisualHidden ? <label forhtml={id} className="visuallyhidden">{labelText}</label> :
              <label forhtml={id}>{labelText}</label>}
            <input {...inputOptions}
                   value={this.state.inputValue}
                   onChange={this.handleInputChange}
                   aria-describedby={`${id}-tip`}
                   ref={this.textInput}/>
            { helpText && <div role="tooltip" id={`${id}-tip`} className="help-text">{helpText}</div> }
          </fieldset>
        );
        break;
      case 'email':
        return (
          <fieldset>
            <label htmlFor={this.props.id}>{labelText}</label>
            <input {...inputOptions} value={this.state.inputValue} onChange={this.handleInputChange}/>
            { helpText && <p className="help-text">{helpText}</p> }
          </fieldset>
        );
        break;
      default:
        return (
          <fieldset>
            <label htmlFor={this.props.id}>{labelText}</label>
            <input {...inputOptions} value={this.state.inputValue} onChange={this.handleInputChange}/>
            { helpText && <p className="help-text">{helpText}</p> }
          </fieldset>
        )
    }
    
  }
  
}
;

export default FormElement;