import React, { Component } from 'react'
import BookshelfChanger from './BookshelfChanger'

class Book extends Component {


    changeShelf = (shelf) => {
        const { book } = this.props;
        this.props.shelfUpdate(book, shelf);
    }


    render () {
        const { title, authors, imageLinks, shelf } = this.props.book;
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${imageLinks && imageLinks.thumbnail ? imageLinks.thumbnail : ''}")` }}></div>
                        <BookshelfChanger changeShelf={this.changeShelf} shelf={shelf}/>
                    </div>
                    <div className="book-title">{title}</div>
                    {
                        authors ? authors.map(author => (<div key={author} className="book-authors">{author}</div>)) : ''
                    }
                </div>
            </li>
        )
    }
}

export default Book