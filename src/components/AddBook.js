import { useContext, useState } from "react"
import { BookContext } from "../context/BookContext"


const AddBook = () => {
    const [books,setBooks] = useContext(BookContext)
    const [name, setName] = useState('')
    const [author, setAuthor] = useState('')
    const [price, setPrice] = useState('')

    const AddBook = (e) => {
        e.preventDefault()
        setBooks([...books, {name,author,  price : `$${price}`} ])
    }

    return(
        <div>
            <form onSubmit={AddBook}>
                <input value={name} onChange={e => setName(e.target.value)} />
                <input value={author} onChange={e => setAuthor(e.target.value)} />
                <input value={price} onChange={e => setPrice(e.target.value)} />
                <button type='submit'>
                    Submit your book
                </button>
            </form>
        </div>
    )
}

export default AddBook