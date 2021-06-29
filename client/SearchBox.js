imort React from 'react';


const SearchBox = () => {
  console.log('Search box')

  return (
    <section>
      <form>
        <label htmlFor="searchBox">Search ...</label>
        <input
          type="text"
          id="searchBox"
          name="searchBox"
          placeholder="What's on your mind?"
          value={title}
          onChange={onSearchChanged}
        />
      </form>
      <button type="button" onClick={onSearchClicked}>
        Search
      </button>
    </section>
  )
}