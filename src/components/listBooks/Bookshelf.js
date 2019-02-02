import React, { Component } from 'react'
import Book from './Book'

class Bookshelf extends Component {

    capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1) 

    render () {
        const { shelf, booksShelf, shelfUpdate } = this.props
        return (
            <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.capitalizeFirstLetter(shelf.replace(/([a-z](?=[A-Z]))/g, '$1 '))}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            booksShelf.map((book) => <Book key={book.id} shelfUpdate={shelfUpdate} book={book} /> )
                        }
                    </ol>
                  </div>
                </div>
        )
    }
}

export default Bookshelf