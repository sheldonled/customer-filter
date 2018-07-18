import React, { Component } from "react";
import Form from './Form';
import List from './List';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      customers: [],
    };
  }
  render() {
    return (
      <section className="app">
        <h1 className="app__title">Customer Filter</h1>
        <Form 
          updateMessage={message => this.setState({message})}
          updateCustomerList={customers => this.setState({customers})}
        />
        <p className="app__message">{this.state.message}</p>
        <h2 className="app__subtitle" > Customer List </h2>
        <List
          headers={[{
              name:"ID",
              colspan: 1
            },
            {
              name: "Name",
              colspan: 1
            },
            {
              name: "Distance",
              colspan: 1
            }]}
            rows={this.state.customers}
        />
      </section>
    );
  }
}

export default App;