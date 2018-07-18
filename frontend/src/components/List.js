import React, { Component } from "react";
import PropTypes from 'prop-types'; 
import './List.scss';


class List extends Component {
  render() {
    return (
      <table className="customers-table">
        <thead>
          <tr>
            {this.props.headers.map(header => <th colSpan={header.colspan} key={header.name}>{header.name}</th>)}
          </tr>
        </thead>
        <tbody>
          {this.props.rows.map(row => (
            <tr key={row.user_id}>
              <td>{row.user_id}</td>
              <td>{row.name}</td>
              <td>{Number(row.dist).toFixed(2)}Km</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

List.propTypes = {
  headers: PropTypes.array,
  rows: PropTypes.array,
};

export default List;