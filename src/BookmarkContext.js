import { useState, createContext, useEffect } from "react"
const Context = createContext()

function ContextProvider({ children }) {
    const [bookmarkItems, setBookmarkItems] = useState(
        JSON.parse(localStorage.getItem('bookmarks')) || []
    )

    useEffect(() => {
        localStorage.setItem('bookmarks', JSON.stringify(bookmarkItems))
    }, [bookmarkItems])


    function bookmark(newItem) {
        console.log(newItem)
        console.log(bookmarkItems)
        if (bookmarkItems.some(item => newItem.id === item.id)) {
            console.log("removing")
            removeFromBookmarks(newItem)
        } else {
            addToBookmarks(newItem)
            console.log("adding")
        }
    }

    function addToBookmarks(newItem) {
        setBookmarkItems(prevItems => [...prevItems, newItem])
    }

    function removeFromBookmarks(newItem) {
        const updatedBookmarks = bookmarkItems.filter(item => item !== newItem);
        setBookmarkItems(updatedBookmarks)

    }

    return (
        <Context.Provider value={{ bookmark, bookmarkItems }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }