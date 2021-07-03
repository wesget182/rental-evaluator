import React, { useState, useEffect } from 'react';


export const SearchBox = () => {
  console.log('Search box')
  const APIEndpoint = 'http://localhost:8080'
  
  const [searchQuery, setSearchQuery] = useState('')
  const [listings, setListings] = useState({})

  console.log(typeof searchQuery)
  const onSearchChanged = (e) => setSearchQuery(e.target.value)
  
  useEffect( () => {
    if (searchQuery) {
      console.log('searchQuery ', searchQuery);
    }
  }, [searchQuery])

  async function onSearchClicked (e) {
    e.preventDefault()
    try {
      let res = await fetch(
        `/api/properties?location=${searchQuery}`
        )
      const listings = await res.json()
      setListings(listings)
    }
    catch(e) {
      console.error(`error ${err}`)
    }
  };

  return (
    <section>
      <form>
        <label htmlFor="searchBox">Search ...</label>
        <input
          type="text"
          id="searchBox"
          name="searchBox"
          placeholder="What's on your mind?"
          value={searchQuery}
          onChange={onSearchChanged}
        />
      </form>
      <button type="button" onClick={onSearchClicked}>
        Search
      </button>
    </section>
  )
}