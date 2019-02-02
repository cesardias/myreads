import React, { Component } from 'react'
import Book from '../listBooks/Book'

class SearchBooksResults extends Component {

    render () {
        const { shelfUpdate, booksSearchList, query } = this.props
        return (
            <div className="search-books-results">
                <ol className="books-grid">
                    {
                        booksSearchList.length > 0 ?
                            booksSearchList.map((book) => <Book key={book.id} shelfUpdate={shelfUpdate} book={book} /> )
                        : query ? <div>Nenhum resultado para "<b>{query}</b>"</div>  : ''  
                    }
                </ol>
                </div>
        )
    }
}

export default SearchBooksResults