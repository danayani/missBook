import { utilService } from "../services/util.service.js"

export function BooksPreview({ book }) {

    return <article className="book-preview">
        <h2>{book.title}</h2>
        <img src={book.thumbnail} />
        {/* <h3>Price: {book.listPrice.amount} {book.listPrice.currencyCode}</h3> */}

        {/* Option 1 */}
        {/* <h3>Price: {book.listPrice.amount.toLocaleString(
            undefined, { style: 'currency', currency: `${book.listPrice.currencyCode}` }
        )}</h3> */}

        {/* Option 2 */}
        <h3>Price: {utilService.getAmount(book.listPrice.amount, book.listPrice.currencyCode)}</h3>

    </article>
}