import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    // a array help function
    return this.props.books.map((book)=> {
      return (
        <li
          key={book.title}
          onClick={()=> this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
        // because it's a list , need use key
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

//this function is to take state as an argument
// state contains the array of books and the active book
function mapStateToProps(state) {
//whatever is returned (state.books)will show up as this.props.books
//inside of BookList
  return {
    books: state.books
  };
}

//anything returned from this function will be end up as props
//on the BookList container
function mapDispatchToProps(dispatch) {
//whenever selectBook is called, the result should be passed
//to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//use of the connect function
//promote BookList from a component to a container -- it needs to know
//about this new dispatch method, selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
