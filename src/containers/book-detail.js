import React, { Component } from 'react';
import { connect } from 'react-redux';

//make use of this.props.book inside of below container
//because we map our application state to the props of below component
//print out the title of the current selected book
class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div>Select a book to get started.</div>
    }

    return (
      <div>
      <h3>Details for:</h3>
      <div>Title: {this.props.book.title}</div>
      <div>Pages: {this.props.book.pages}</div>
      </div>
    );
  }
}

//below object book the we return is to show up as props inside of BookDetail
//activeBook reducer create a piece of state: activeBook
//below function return a piece of state: activeBook state
function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
