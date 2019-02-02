import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SearchBooksBar extends Component {
    render () {
        const { query, updateQuery } = this.props
        return (
                <div className="search-books-bar">
                    <Link to='/'>
                        <button className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input 
                            type="text" 
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event) => updateQuery(event.target.value)}
                        />

                    </div>
                </div>
        )
    }
}

export default SearchBooksBar