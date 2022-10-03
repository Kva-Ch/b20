import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import React, {useState, useEffect} from "react";
import {Form, Button} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {FiSearch} from '@react-icons/all-files/fi/FiSearch'
import {generatePath, useNavigate} from 'react-router';

const SearchBar = ({history}) => {
  let navigate = useNavigate();
  const [searchId, setSearchId] = useState('')
  function handleChange(e) {
    setSearchId(e.target.value);
    console.log(searchId);
  }

  const handleSubmit = (e) => {
    console.log(searchId);
    let temp = '/globalBugInfoPage/'+String(searchId)+"/";
    console.log(temp);
    navigate(temp);
  }

  return (<form  className="searchbar">
    <input className="inputsearch" type="text" placeholder='Enter Bug Id' onChange={handleChange}/> {/* <input className="btn btn-lg btn-dark" type="submit" /> */}
    <button type="submit" onClick={handleSubmit} className="btn btn-lg searchbutton">
      <FiSearch className=" fillblack"/>
    </button>
  </form>)

}

export default SearchBar
