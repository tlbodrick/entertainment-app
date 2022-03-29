import { useEffect, useState } from "react"
import { Link, Route, Routes, useNavigate } from "react-router-dom"
import SearchResults from "./components/SearchResults"
import Movies from "./components/Movies"
import Tv from "./components/Tv"
import Bookmarks from "./components/Bookmarks"
import logo from "./icons/logo.svg"
import iconSearch from "./icons/icon-search.svg"
import { ReactComponent as IconNavHome } from './icons/icon-nav-home.svg'
import { ReactComponent as IconNavMovies } from './icons/icon-nav-movies.svg'
import { ReactComponent as IconNavTv } from './icons/icon-nav-tv-series.svg'
import { ReactComponent as IconNavBookmark } from './icons/icon-nav-bookmark.svg'
import avatar from "./icons/image-avatar.png"
import Home from "./components/Home"

function App() {
  const [query, setQuery] = useState('')
  let navigate = useNavigate()

  // when type in input
  function handleChange(e) {
    setQuery(e.target.value)
  }

  // search form submit
  function handleSubmit(e) {
    e.preventDefault();
    navigate('/results')
  }







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
        {/* search bar */}


        <form className="search flex" onSubmit={(e) => handleSubmit(e)}>
          <button className="search-btn" type="submit"><img src={iconSearch} /></button>
          <label className="label" htmlFor="query"><span className="sr-only">Search bar</span></label>
          <input
            value={query}
            className="search-bar fw-light"
            type="text"
            name="query"
            placeholder="Search for movies or TV series"
            onChange={handleChange}
          />
        </form>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/results" element={<SearchResults query={query} />} />
        </Routes>

      </main >
    </div >
  );
}

export default App;

