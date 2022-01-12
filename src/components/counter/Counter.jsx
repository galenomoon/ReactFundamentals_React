// Component is like a package with so much proprieties, like useState, setState "e afins"
import React, { Component } from "react";
import "./Counter.css";
import Display from "./Display";
import Buttons from "./Buttons";
import RateForm from "./RateForm";

//Get values using classes is literally like WhatsApp Clone project, this.el.tra lá lá
class Counter extends Component {
  state = {
    number: this.props.initialNumber || 0,
    rate: this.props.rateNumber || 5,
  };

  //-- Change State --//
  inc = _ => {
    //-- It ⤵ was obtained by components --//
    this.setState({
      number: this.state.number + this.state.rate,
    });
  };

  //-- Change State --//
  dec = _ => {
    //-- It ⤵ was obtained by components --//
    this.setState({
      number: this.state.number - this.state.rate,
    });
  };

  setRate = (newRate) => {
    this.setState({
      rate: newRate,
    });
  };

  render() {
    return (
      <div className="Counter">
        <h2>Counter</h2>
        <Display number={this.state.number}/>
        <RateForm rate={this.state.rate} setRate={this.setRate}/>
        <Buttons setInc={this.inc} setDec={this.dec}/>
      </div>
    );
  }
}

export default Counter;
