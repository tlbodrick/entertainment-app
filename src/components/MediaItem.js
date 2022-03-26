import { ReactComponent as IconBookmarkEmpty } from '../icons/icon-bookmark-empty.svg'
import iconPlay from '../icons/icon-play.svg'

function MediaItem({ thumbnail }) {

    return (
        <div className="item">
            <button className="bookmark-icon flex" aria-selected="false"><IconBookmarkEmpty /></button>
            <div className="thumbnail">
                <img src={thumbnail} />
                <div className="playPanel flex fs-600 fw-500"><img src={iconPlay} /> Play</div>
            </div>
        </div>
    )
}

export default MediaItem;