import React from 'react'
import './SearchBox.css'
import { IoSearchSharp } from "react-icons/io5";

const SearchBox = () => {
  return (
    <div className='searchBox position-relative d-flex align-items-center'>
        <IoSearchSharp className='me-2'/>
      <input type="text" name="" id="" placeholder='Quick finding...' />
    </div>
  )
}

export default SearchBox
