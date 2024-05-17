import React, { useContext, useState }  from 'react'
import { GlobalContext } from '../App'

export default function SearchBar() {

  const { find, finder } = useContext(GlobalContext)

  const sendInput = (event) => {
    finder(event.target.value);
    // console.log(find);
  }

  return (
    <>
        <input type='text' className='searchbar_input h3' id='searchbar' placeholder='Search by Name'  onChange={sendInput}></input>
    </>
  )
}
