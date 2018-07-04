import React, {Component} from 'react';

class FormElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      errorMessage: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputReset = this.handleInputReset.bind(this);
    this.textInput = React.createRef();
  }
  
  handleInputChange(e) {
    console.log(e.target.value);
    const {name, value} = e.target;
  
    this.props.updateFormState(e);
    
    this.setState(() => {
      return {
        value:value
      }
    })
  }
  
  handleInputReset(e) {
    this.setState(() => {
      return {
        value:''
      }
    })
    this.focus();
  }
  
  focus() {
    this.textInput.current.focus();
  }
  
  componentDidMount() {
    console.log(`Component "${this.props.name}" did mount`);
    if (this.props.autofocus) {
      console.log('focus');
      this.focus();
    }
  }
  
  render() {
    
    console.log('render');
    
    const {labelText, helpText, labelVisualHidden, isInvalid} = this.props;
    const {id, type, name, placeholder, className, required} = this.props;
    
    const inputOptions = {
      id,
      type,
      name,
      placeholder,
      className,
      required,
      ['aria-invalid']:isInvalid
    };
    
  
    return (
        <fieldset>
          {labelVisualHidden ?
              <label forhtml={id} className="visuallyhidden">{labelText}</label> :
              <label forhtml={id}>{labelText}</label>}
          <input {...inputOptions}
                 value={this.state.value}
                 onChange={this.handleInputChange}
                 aria-describedby={`${id}-tip`}
                 ref={this.textInput}/>
          {this.state.value.length > 0 && <a href="#" className="input-reset-link" arial-label="Click to reset input value" onClick={this.handleInputReset}>*</a>}
          { helpText && <div role="tooltip" id={`${id}-tip`} className="help-text">{helpText}</div> }
        </fieldset>
    );
  }
  
}
;

export default FormElement;