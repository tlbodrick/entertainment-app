import { ReactComponent as IconBookmarkEmpty } from '../icons/icon-bookmark-empty.svg'
import iconPlay from '../icons/icon-play.svg'
import iconCategoryMovie from "../icons/icon-category-movie.svg"
import iconCategoryTV from "../icons/icon-category-tv.svg"

function MediaItem({ thumbnail, mediaInfo, thisClass }) {

    return (
        <div className="item">
            <button className="bookmark-icon flex" aria-selected="false"><IconBookmarkEmpty /></button>
            <div className="thumbnail">
                <img src={thumbnail} />
                <div className="playPanel flex fs-600 fw-500"><img src={iconPlay} /><p className="sr-only">Play</p></div>
            </div>
            <div className={thisClass}>
                <div className="media-info fw-light fs-300 flex">
                    <p>{mediaInfo.year}</p>
                    <span>•</span>
                    {mediaInfo.category === 'Movie' ?
                        <p><img className="category-img" src={iconCategoryMovie} /> Movie</p> :
                        <p><img className="category-img" src={iconCategoryTV} />TV Series</p>
                    }
                    <span>•</span>
                    <p>{mediaInfo.rating}</p>
                </div>
                <p className="fw-bold fs-500">{mediaInfo.title}</p>
            </div>
        </div>
    )
}

export default MediaItem;