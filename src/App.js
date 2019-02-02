import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './components/listBooks/ListBooks'
import SearchBooks from './components/searchBooks/SearchBooks'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'


class BooksApp extends React.Component {
  state = {
    books: [],
    booksSearchList: [],
    query: '',
    searchError: ''
  }

  componentDidMount() {
    this.getAll();
  }

  updateQuery = (query) => {
    this.setState({ query })
    if (query) {
      this.searchBooks(query)
    } else {
      this.setState({ booksSearchList: [] })
    }
  }

  getAll = () => {
    BooksAPI.getAll().then((books) => {
      this.setState( state => {
        this.setShelfOnSearchBooks(state.booksSearchList)
        return { books }
      })
    })
  }

  shelfUpdate = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then(() => {
      this.getAll();
    })
  }

  searchBooks = (query) => {
    BooksAPI.search(query.trim()).then((booksSearchList) => {
       if (Array.isArray(booksSearchList)) {
        this.setShelfOnSearchBooks(booksSearchList)
       } else {
         if (booksSearchList.error && booksSearchList.error === 'empty query') {
          this.setState({ booksSearchList: [] })
         }
       }
    })
  }

  setShelfOnSearchBooks = (booksSearchList) => {
    this.setState( state => {
      const { books } = state;

      booksSearchList.forEach((bookSearch, index) => {
        booksSearchList[index].shelf = 'none'
        let element = books.find(book => book.id === bookSearch.id)
        element && (booksSearchList[index].shelf = element.shelf) 
      });
      return { booksSearchList }
    });
  }

  render() {
    const { books, booksSearchList, query } = this.state
    return (
      <div className="app">
          <Route exact path='/' render={() => (
            <ListBooks getAll={this.getAll} shelfUpdate={this.shelfUpdate} books={books}/>
          )} />
          <Route exact path='/search' render={() => (
            <SearchBooks searchError={this.searchError} booksSearchList={booksSearchList} query={query} updateQuery={this.updateQuery} shelfUpdate={this.shelfUpdate}/>
          )} />
      </div>
    )
  }
}

export default BooksApp
