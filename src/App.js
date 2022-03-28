import { Link, Route, Routes, Navigate } from "react-router-dom"
import Movies from "./components/Movies"
import Tv from "./components/Tv"
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
    <div className="App container flow flex">
      {/* nav  */}
      <nav className="flex bg-dark">
        <img className="logo" alt="logo" src={logo} />
        <div className="pages flex">
          <Link to="/">
            <IconNavHome />
          </Link>
          <Link to="/movies">
            <IconNavMovies />
          </Link>
          <Link to="/tv">
            <IconNavTv />
          </Link>
          <Link to="/bookmarks">
            <IconNavBookmark />
          </Link>
        </div>
        <img className="avatar" src={avatar} />
      </nav>

      <main>
        {/* search */}
        <form className="search flex">
          <button className="search-btn" type="submit"><img src={iconSearch} /></button>
          <label className="label" htmlFor="query"><span className="sr-only">Search bar</span></label>
          <input className="search-bar fw-light" type="text" name="query" placeholder="Search for movies or TV series" />
        </form>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/bookmarks" element={<Movies />} />
        </Routes>

      </main >
    </div >
  );
}

export default App;

