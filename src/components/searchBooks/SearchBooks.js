import React, { Component } from 'react'
import SearchBooksResults from './SearchBooksResults'
import SearchBooksBar from './SearchBooksBar'

class SearchBooks extends Component {
    render () {
        const { updateQuery, shelfUpdate, query, booksSearchList } = this.props
        return (
            <div className="search-books">
                <SearchBooksBar updateQuery={updateQuery} query={query} />
                <SearchBooksResults shelfUpdate={shelfUpdate} booksSearchList={booksSearchList} query={query}/>
            </div>
        )
    }
}

export default SearchBooks