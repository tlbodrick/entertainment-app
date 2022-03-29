import { useState, createContext } from "react"
const Context = createContext()

function ContextProvider({ children }) {
    const [bookmarkItems, setBookmarkItems] = useState([])


    console.log(bookmarkItems)

    function addToBookmarks(newItem, updateBookmark) {
        setBookmarkItems(prevItems => [...prevItems, newItem])
        updateBookmark()
    }

    return (
        <Context.Provider value={{ addToBookmarks, bookmarkItems }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }