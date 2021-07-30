import React, { Component } from 'react';
import { connect } from 'react-redux';
class Users extends Component {
  displayUsers = () => {
    let data = this.props.users.map((user, index) => <li key={index}>{
      user.username}</li>)
    return data
  }
  render() {
    // debugger
    return (
      <div>
          {this.props.numberOfUsers}
        <ul>
          {this.displayUsers()}
        </ul>
      </div>
    )
  }
}


//add mapStateToProps here
const mapStateToProps = (state) => {
  return {
    users: state.users,
    numberOfUsers: state.users.length
  };
};
// connect this component to Redux
export default connect(mapStateToProps)(Users)
