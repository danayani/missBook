const { useState, useEffect } = React

export function BookEdit() {

    const [newBook, setNewBook] = useState({
        title: null, price: null
    })

    function onSubmitAddBook(ev) {
        ev.preventDefault()
    }

    function onAddBook({ target }) {
        console.log('target:', target)
        let { value, name: field, type } = target
        value = (type === 'number') ? +value : value
        setNewBook((prevBook) => {
            return { ...prevBook, [field]: value }
        })
    }

    return <section className="add-book-container">
        <form onSubmit={onSubmitAddBook}>
            <input type="text"
                name="title"
                value={setNewBook.title}
                placeholder="Enter Book Title" />
            <input type="number"
                name="price"
                value={setNewBook.price}
                placeholder="Enter Book Price" />
            <button onClick={onAddBook}>Add Book</button>
        </form>
    </section>
}