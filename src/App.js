import logo from "./icons/logo.svg"
import { ReactComponent as IconNavHome } from './icons/icon-nav-home.svg'
import { ReactComponent as IconNavMovies } from './icons/icon-nav-movies.svg'
import { ReactComponent as IconNavTv } from './icons/icon-nav-tv-series.svg'
import { ReactComponent as IconNavBookmark } from './icons/icon-nav-bookmark.svg'
import avatar from "./icons/image-avatar.png"
import iconSearch from "./icons/icon-search.svg"

import Home from "./components/Home"

function App() {
  return (
    <div className="App container flow">
      {/* nav  */}
      <nav className="flex container bg-dark">
        <img src={logo} />
        <div className="pages flex">
          <IconNavHome />
          <IconNavMovies />
          <IconNavTv />
          <IconNavBookmark />
        </div>
        <img className="avatar" src={avatar} />
      </nav>

      {/* search */}
      <form className="search container flex">
        <button className="search-btn" type="submit"><img src={iconSearch} /></button>
        <label className="label" htmlFor="query"><span className="sr-only">Search bar</span></label>
        <input className="search-bar fw-light" type="text" name="query" placeholder="Search for movies or TV series" />
      </form>

      <Home />
    </div>
  );
}

export default App;

{/* <div className="item">
  <button className="bookmark-icon flex" aria-selected="false"><IconBookmarkEmpty /></button>
  <div className="thumbnail">
    <img src={thumbnail} />
    <div className="playPanel flex fs-600 fw-500"><img src={iconPlay} /> Play</div>
  </div>
</div> */}
