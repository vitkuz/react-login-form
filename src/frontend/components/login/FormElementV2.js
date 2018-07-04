import React, {Component} from 'react';

class FormElementV2 extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }
  
  focus() {
    this.textInput.current.focus();
  }
  
  componentDidMount() {
    if (this.props.autofocus) {
      console.log('focus');
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
      ['aria-invalid']:isInvalid
    };
    
    return (
        <fieldset>
          {labelVisualHidden ?
              <label htmlFor={id} className="visuallyhidden">{labelText}</label> :
              <label htmlFor={id}>{labelText}</label>}
          <input {...inputOptions}
                 value={this.props.value}
                 onChange={this.props.handleInputChange}
                 aria-describedby={`${id}-tip`}
                 ref={this.textInput}/>
          {this.props.value.length > 0 && <a href="#"
                                             className="input-reset-link"
                                             arial-label="Click to reset input value"
                                             onClick={(e) => this.props.handleInputReset(e,this)}>*</a>}
          { helpText && <div role="tooltip" id={`${id}-tip`} className="help-text">{helpText}</div> }
        </fieldset>
    );
  }
  
}
;

export default FormElementV2;