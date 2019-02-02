import React, { Component } from 'react'
import Bookshelf from './Bookshelf'
import { Link } from 'react-router-dom'
import { uniq } from 'lodash';

class ListBooks extends Component {

    componentDidMount() {
        this.props.getAll();
    }

    render () {
        const { books, shelfUpdate } = this.props
        const shelfGroups = uniq(books.map((book) => {
            return book.shelf
        }));
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                <div>
                    {
                        shelfGroups.map((shelf) => (
                            <Bookshelf key={shelf} shelf={shelf} shelfUpdate={shelfUpdate}  booksShelf={books.filter((book) => book.shelf === shelf)} />
                        ))
                    }
                </div>
                </div>
                <div className="open-search">
                    <Link to='/search'>
                      <button>Add a book</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default ListBooks