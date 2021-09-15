import {useState, createContext} from 'react'


export const BookContext = createContext()

export const BookController = (props) => {

    const [books, setBooks] = useState([
        {
            name : 'To Kill a Mockingbird',
            author : 'Harper Lee',
            price : '$7'
        },
        {
            name : 'Flash', 
            author : 'Charles Duchaussois',
            price : '$8'
        },
        {
            name : 'Lord of the ring', 
            author : 'Tolkien',
            price : '$20'
        },
        {
            name : '1984', 
            author : 'George Orwell',
            price: '$10'
        },
        {
            name : 'Brave new world', 
            author : 'Adolf Huxley',
            price: '$5'
        }
    ])

    return (
        <BookContext.Provider value={[books, setBooks]}>
            {props.children}
        </BookContext.Provider>
    )
}