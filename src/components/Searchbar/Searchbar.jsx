import { useState } from "react"

const Searchbar = ({ onSubmit }) => {
  const [q, setQ] = useState("")
  
  const onChange = (e) => {
    setQ(e.target.value)
  }


    return (
      <header className="Searchbar">
        <form onSubmit={onSubmit} className="SearchForm">
          <input
            className="SearchFormInput"
            onChange={onChange}
            name="q"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={q}
          />
          <button type="submit" className="SearchFormButton">
            <span className="SearchFormButtonLabel">Search</span>
          </button>
        </form>
      </header>
    )
  
}

export default Searchbar
