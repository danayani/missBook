const { useState } = React
import { AppHeader } from './cmps/app-header.jsx'
import { HomePage } from "./views/home.jsx";
import { BooksIndex } from "./views/books-index.jsx";
import { AboutUs } from "./views/about.jsx";

export function App() {
    const [page, setPage] = useState('book')

    function onSetPage(ev, page) {
        ev.preventDefault()
        setPage(page)
    }

    return <section className="main-layout app">

        {/* <header className="app-header full main-layout">
            <h1>Miss Books</h1>
            <nav className="app-nav">
                <a href="#" onClick={() => setPage('home')}>Home</a> |
                <a href="#" onClick={() => setPage('about')}>About</a> |
                <a href="#" onClick={() => setPage('books')}>Books</a>
            </nav>
        </header> */}

        <header className="app-header full main-layout">
            <AppHeader onSetPage={onSetPage} />
        </header>

        <main>
            {page === 'home' && <HomePage />}
            {page === 'about' && <AboutUs />}
            {page === 'book' && <BooksIndex />}
        </main>
    </section>
}