import { useEffect } from "react";
import data from "../data.json"
import MediaItem from "./MediaItem"

function Home() {

    const trendingMedia = data.filter(media => media.isTrending === true)
    const renderTrending = trendingMedia.map(media => {
        return <MediaItem thumbnail={media.thumbnail.trending.large} />
    })

    return (
        <div>
            <section>
                <h2 className="fw-light fs-600">Trending</h2>
                <div className="trending-media flex">{renderTrending}</div>
            </section>

            <section className="container">
                <h2 className="fw-light fs-600">Recommended</h2>
            </section>
        </div>
    )
}

export default Home;