import React from 'react';
import calculate from './logic/calculator';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '0',
      total: null,
      next: null,
      toNumber1: true,
      operation: null,
    };
    this.addNumber.bind = this.addNumber.bind(this);
  }

  proccessResult = (result) => {
    this.setState(() => ({
      display: result.total,
      total: result.total,
      next: result.next,
      operation: result.operation,
      toNumber1: true,
    }));
  };

  selectOperator = (event) => {
    event.preventDefault();
    const option = event.target.innerText;
    if (
      option === '+/-'
      || option === '%'
      || option === '÷'
      || option === 'x'
      || option === '-'
      || option === '+'
    ) {
      this.setState(() => ({
        operation: option,
        toNumber1: false,
      }));
    }

    if (option === 'AC') {
      const { total, next, operation } = this.state;
      const obj = { total, next, operation };
      const result = calculate(obj, option);
      this.proccessResult(result);
    }

    if (option === '.') {
      const { total, next, operation } = this.state;
      const obj = { total, next, operation };
      const result = calculate(obj, option);
      this.setState(() => ({
        total: result.total,
        display: result.total,
      }));
    }

    if (option === '=') {
      const { total, next, operation } = this.state;
      const obj = { total, next, operation };
      const result = calculate(obj, option);
      this.proccessResult(result);
    }
  };

  addNumber = (event) => {
    event.preventDefault();
    const {
      toNumber1, total, operation, next, display,
    } = this.state;
    let newTotal = total;
    const number = event.target.innerText;
    let numberResult = null;
    let float = null;
    if (total) {
      float = total.indexOf('.');
    }

    if (display !== '0' && !next && !operation && !float) {
      newTotal = null;
    }

    if (toNumber1 === true) {
      numberResult = newTotal;
      if (numberResult) {
        numberResult += number;
      } else {
        numberResult = number;
      }

      this.setState(() => ({
        total: numberResult,
        display: numberResult,
      }));
    } else {
      numberResult = next;
      if (numberResult) {
        numberResult += number;
      } else {
        numberResult = number;
      }
      const display = `${newTotal} ${operation} ${numberResult}`;
      this.setState(() => ({
        next: numberResult,
        display,
      }));
    }
  };

  render() {
    const { display } = this.state;

    return (
      <div className="calculator-body">
        <div className="body-result">
          <h5>{display}</h5>
        </div>
        <div className="body-buttons">
          <div className="buttons-row-1">
            <button
              onClick={this.selectOperator}
              name="AC"
              type="button"
              className="col-1 "
            >
              AC
            </button>
            <button
              onClick={this.selectOperator}
              name="+/-"
              type="button"
              className="col-2 "
            >
              +/-
            </button>
            <button
              onClick={this.selectOperator}
              name="%"
              type="button"
              className="col-3 "
            >
              %
            </button>
            <button
              onClick={this.selectOperator}
              name="÷"
              type="button"
              className="col-4 orange"
            >
              ÷
            </button>
          </div>
          <div className="buttons-row-2">
            <button
              onClick={this.addNumber}
              name="7"
              type="button"
              className="col-1 "
            >
              7
            </button>
            <button
              onClick={this.addNumber}
              name="8"
              type="button"
              className="col-2 "
            >
              8
            </button>
            <button
              onClick={this.addNumber}
              name="9"
              type="button"
              className="col-3 "
            >
              9
            </button>
            <button
              onClick={this.selectOperator}
              name="x"
              type="button"
              className="col-4 orange"
            >
              x
            </button>
          </div>
          <div className="buttons-row-3">
            <button
              onClick={this.addNumber}
              name="4"
              type="button"
              className="col-1 "
            >
              4
            </button>
            <button
              onClick={this.addNumber}
              name="5"
              type="button"
              className="col-2 "
            >
              5
            </button>
            <button
              onClick={this.addNumber}
              name="6"
              type="button"
              className="col-3 "
            >
              6
            </button>
            <button
              onClick={this.selectOperator}
              name="-"
              type="button"
              className="col-4 orange"
            >
              -
            </button>
          </div>
          <div className="buttons-row-4">
            <button
              onClick={this.addNumber}
              name="1"
              type="button"
              className="col-1 "
            >
              1
            </button>
            <button
              onClick={this.addNumber}
              name="2"
              type="button"
              className="col-2 "
            >
              2
            </button>
            <button
              onClick={this.addNumber}
              name="3"
              type="button"
              className="col-3 "
            >
              3
            </button>
            <button
              onClick={this.selectOperator}
              name="+"
              type="button"
              className="col-4 orange"
            >
              +
            </button>
          </div>
          <div className="buttons-row-5">
            <button
              onClick={this.addNumber}
              name="0"
              type="button"
              className="col-1-2 "
            >
              0
            </button>
            <button
              onClick={this.selectOperator}
              name="."
              type="button"
              className="col-3 "
            >
              .
            </button>
            <button
              onClick={this.selectOperator}
              name="="
              type="button"
              className="col-4 orange"
            >
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
