import React, { Component } from 'react';
import { connect } from 'react-redux';

class CounterList extends Component {
  render() {
    return (
      <div style={{ width: '50%', margin: 'auto' }}>
        <table className="table table-bordered table-hover mt-3">
          <thead className="bg-warning">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Counter Value</th>
            </tr>
          </thead>
          <tbody>
            {this.props.reslts.map((res, index) => (
              <tr onClick={() => this.props.onDeleteCounter(index)} key={index + 1}>
                <th scope="row">{index + 1}</th>
                <td>{res}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    reslts: state.results,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteCounter: id => dispatch({ type: 'DELETE', id: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterList);
