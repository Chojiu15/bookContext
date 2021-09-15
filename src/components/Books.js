import { useContext } from "react"
import { BookContext } from "../context/BookContext"



const Books = () => {
    const [books, setBooks] =useContext(BookContext)
    console.log(books)

    return(
        <div>
            {books.map(book => {
                return(
                    <div> 
                        <h1>{book.name}</h1>
                        <h2>{book.author}</h2>
                        <p>{book.price}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Books