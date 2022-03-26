import { useEffect } from "react";
import data from "../data.json"
import MediaItem from "./MediaItem"

function Home() {

    const trendingMedia = data.filter(media => media.isTrending === true)
    const renderTrending = trendingMedia.map(media => {
        return <MediaItem thumbnail={media.thumbnail.trending.large} mediaInfo={media} thisClass="trending" />
    })

    console.log(data)

    const renderMedia = data.map(media => {
        return <MediaItem thumbnail={media.thumbnail.regular.large} mediaInfo={media} thisClass="recommended" />
    })

    return (
        <div className="flow">
            <section className="trending-section">
                <h2 className="fw-light fs-600">Trending</h2>
                <div className="trending-media flex">{renderTrending}</div>
            </section>

            <section className="recommended-section">
                <h2 className="fw-light fs-600">Recommended</h2>
                <div className="recommended-media grid">{renderMedia}</div>
            </section>
        </div>
    )
}

export default Home;