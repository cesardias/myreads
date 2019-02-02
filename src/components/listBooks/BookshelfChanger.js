import React, { Component } from 'react'

class BookshelfChanger extends Component {

    handleChangeShelf = (event) => {
        this.props.changeShelf(event.target.value)
    }

    render () {  
        const { shelf } = this.props
        return (
            <div className="book-shelf-changer">
                <select onChange={this.handleChangeShelf} defaultValue={shelf ? shelf : 'none'}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default BookshelfChanger