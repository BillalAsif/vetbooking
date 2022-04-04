import Header from "./Header";
import BookAppoitment from "./Booking";
import {Search, callSearch} from "./Search";
import {useEffect, useState} from 'react';


function App() {

  useEffect( () => {
    
    return () => {
      console.log("change dected")
    }

  }, [callSearch])

  return (
    <>
      <Header />
      <BookAppoitment />
      <Search />
    </>
  )
}

export default App;