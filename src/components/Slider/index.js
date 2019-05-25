import React, { Component } from 'react';
import Input from '../Input';


class StepSlider extends Component {
  static defaultProps = {
    min: 0,
    max: 25,
    step: 1
  };

  render() {
      const {
        min,
        max,
        step,
      } = this.props;

      const value = this.state.value

      return (
        <div className="StepSlider">
          <Input 
            type="range" 
            step={step} 
            min={min}
            max={max}
            value={value}
            onChange={this.handleChange}
          />
          <small>{value} years</small>
      </div>  
      )
  }

  handleChange = (event) => {
    this.setState({value: event.target.value})

  }
}

export default StepSlider;
