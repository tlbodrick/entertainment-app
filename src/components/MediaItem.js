import { useState, useContext, useEffect } from "react"
import { Context } from "../BookmarkContext"
import { ReactComponent as IconBookmarkFull } from '../icons/icon-bookmark-full.svg'
import { ReactComponent as IconBookmarkEmpty } from '../icons/icon-bookmark-empty.svg'
import iconPlay from '../icons/icon-play.svg'
import iconCategoryMovie from "../icons/icon-category-movie.svg"
import iconCategoryTV from "../icons/icon-category-tv.svg"

function MediaItem({ thumbnail, mediaInfo, addBookmark, thisClass }) {

    const { addToBookmarks } = useContext(Context)

    const [info, setInfo] = useState(mediaInfo)

    function updateBookmark() {
        setInfo(prevInfo => { return { ...prevInfo, isBookmarked: !prevInfo.isBookmarked } })
        console.log("updated")
    }

    useEffect(() => {
        localStorage.setItem("info", JSON.stringify(info))
    }, [info])

    function bookmarkIcon() {
        if (info.isBookmarked === true) {
            return <IconBookmarkFull />
        } else if (info.isBookmarked === false) {
            return <IconBookmarkEmpty />
        }
    }




    return (
        <div className="item">
            <div className="bookmark-icon flex" onClick={() => addToBookmarks(info, updateBookmark)}>{bookmarkIcon()}</div>
            <div className="thumbnail">
                <img src={thumbnail} alt="thumbnail" />
                <div className="playPanel flex fs-600 fw-500"><img src={iconPlay} alt="play-icon" /><p className="sr-only">Play</p></div>
            </div>
            <div className={thisClass}>
                <div className="media-info fw-light fs-300 flex">
                    <p>{info.year}</p>
                    <span>•</span>
                    {mediaInfo.category === 'Movie' ?
                        <p><img className="category-img" src={iconCategoryMovie} alt="movie-icon" /> Movie</p> :
                        <p><img className="category-img" src={iconCategoryTV} alt="tv-series-icon" />TV Series</p>
                    }
                    <span>•</span>
                    <p>{info.rating}</p>
                </div>
                <p className="fw-bold fs-500">{info.title}</p>
            </div>
        </div >
    )
}

export default MediaItem;