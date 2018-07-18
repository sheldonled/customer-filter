import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import './Form.scss';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      reference: '',
      distance: '',
    };
  }
  handleChange(property, value) {
    this.props.updateMessage('');
    this.setState({[property]: value}, () => {
      if(!this.state.reference || !this.state.distance)
        return;
      fetch(`/api/customers?reference=${this.state.reference}&distance=${this.state.distance}`)
        .catch(() => this.props.updateMessage('Something went wrong while fetching data'))
        .then(response => response.json())
        //eslint-disable-next-line
        .then(data => this.props.updateCustomerList(data));
    });
  }
  render() {
    return (
      <form className="app__form">
        <section className="form__reference-input">
          <label> Reference </label>
          <div className="form__reference-input-wrapper">
            <select onChange={evt => this.handleChange('reference', evt.target.value)}>
              <option value="">Manual input</option>
              <option value="53.3497782,-6.2610535">Spire of Dublin</option>
              <option value="53.339428,-6.257664">Intercom Office</option>
            </select>
            <input
              type="text"
              className="form__input--large"
              value={this.state.reference} 
              onChange={evt => this.handleChange('reference', evt.target.value)}
            />
          </div>
        </section>
        <section className="form__distance-input">
          <label>Distance (Km)</label>
          <input
            type="number"
            value={this.state.distance}
            onChange={evt => this.handleChange('distance', evt.target.value)}
          />
        </section>
      </form>
    );
  }
}

Form.propTypes = {
  updateMessage: PropTypes.func,
};

export default Form;