const { useState, useEffect } = React

import { BooksFilter } from '../cmps/books-filter.jsx';
import { BooksList } from '../cmps/books-list.jsx';
import { BookDetails } from '../cmps/book-details.jsx';
// import { BookEdit } from '../cmps/book-edit.jsx';
import { UserMsg } from '../cmps/user-msg.jsx';
import { Loader } from '../cmps/loader.jsx';


import { booksService } from '../services/books.service.js';

export function BooksIndex() {

    const [books, setBooks] = useState(null)
    const [selectedBook, setSelectedBook] = useState(null)
    const [filterBy, setFilterBy] = useState(booksService.getDefaultFilter())
    const [userMsg, setUserMsg] = useState('')

    useEffect(() => {
        loadBooks()
    }, [filterBy])

    function loadBooks() {
        booksService.query(filterBy)
            .then(booksToUpdate => setBooks(booksToUpdate))
    }

    function onSetFilter(filterByFromFilter) {
        setFilterBy(filterByFromFilter)
    }

    function onRemoveBook(bookId) {
        booksService.remove(bookId)
            .then(() => {
                const updatedBooks = books.filter(book => book.id !== bookId)
                setBooks(updatedBooks)
                flashMsg('Book removed!')
            })
    }

    function onSelectBook(bookId) {
        booksService.get(bookId).then((book) => {
            setSelectedBook(book)
        })
    }

    function flashMsg(msg) {
        setUserMsg(msg)
        setTimeout(() => {
            setUserMsg('')
        }, 3000)
    }

    if (!books) return <Loader />
    return <section className="books-index ">
        {userMsg && <UserMsg msg={userMsg} />}
        {!selectedBook && <div>
            <h1>Hello from Books Index!</h1>
            <BooksFilter onSetFilter={onSetFilter} />
            {/* <BookEdit /> */}
            <BooksList books={books} onRemoveBook={onRemoveBook} onSelectBook={onSelectBook} />
        </div>}

        {selectedBook && <BookDetails
            book={selectedBook}
            onGoBack={() => setSelectedBook(null)}
        />}
    </section>
}