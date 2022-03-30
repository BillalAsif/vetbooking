import Header from "./Header";
import BookAppoitment from "./Booking";
import Search from "./Search";
import {useEffect, useState} from 'react';


function App() {

  let searchBar = document.getElementById('search-bar');

  useEffect( () => {
    
    return () => {
      console.log("change dected")
    }

  }, [searchBar])

  return (
    <>
      <Header />
      <BookAppoitment />
      <Search />
    </>
  )
}

export default App;