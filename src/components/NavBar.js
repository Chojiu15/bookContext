import { useContext } from "react"
import { BookContext } from "../context/BookContext"

const NavBar = () => {
    const [books, setBooks] = useContext(BookContext)

    return(
        <div>
            <h1>We do have {books.length} books in my library</h1>
        </div>
    )
}

export default NavBar
