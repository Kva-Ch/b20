import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import React, {useState, useEffect} from "react";
import { Form, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FiSearch} from '@react-icons/all-files/fi/FiSearch'

const SearchBar = ({ history }) => {
  const [keyword, setKeyword] = useState('')
  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  const handleSubmit = (e) => {
    
  }

  return (
    <form onSubmit={handleSubmit} className ="searchbar">
        <input className="inputsearch" type="text" placeholder='Enter Bug Id'/>
      {/* <input className="btn btn-lg btn-dark" type="submit" /> */}
      <button type="submit" className="btn btn-lg searchbutton">
      <FiSearch />
      </button>
    </form>
  )

}



export default SearchBar