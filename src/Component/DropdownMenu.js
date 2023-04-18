import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setRegion, setOptions } from './actions';

function DropDown() {
  const dispatch = useDispatch();
  const selectedOption = useSelector(state => state.region);
  const options = useSelector(state => state.options);

  useEffect(() => {
    // Fetch data from API    
    fetch(`https://restcountries.com/v2/region/${selectedOption}`)
    .then(response => response.json())
    .then(data => dispatch(setOptions(data)))
    .catch(error => console.error(error));
  }, [selectedOption, dispatch]);

  const handleOptionChange = (event) => {
    dispatch(setRegion(event.target.value)); 
  }

  return (
    <div>
      <label htmlFor="dropdown-menu">Select a region:</label>
      <select id="dropdown-menu" value={selectedOption} onChange={handleOptionChange}>
      
      <option value="Asia">Asia </option>
      <option value="Oceania">Oceania</option>
      <option value="Africa">Africa</option>
      <option value="Europe">Europe</option>
      <option value="Americas">Americas</option>
      </select>
      <p>You selected: {selectedOption}</p>

      {/* Displaying the options returned by the API */}
      <table border={"5px"}
        className="table table-striped table-bordered table-hover"
        striped="true"
        bordered="true"
        hover="true"
        style={{
          justifyContent: "center",
          backgroundColor:'grey',
          width: "80%",
          margin: "auto",
          marginTop: "30px",
          marginBottom: "60px",
          
        }}
      >
        <thead className="table-dark">
          <tr>
            <th>Flag</th>
            <th>Name</th>
            <th>Capital</th>
          </tr>
        </thead>
        <tbody className="thead-dark">
          {options.map((option) => (
           <tr key={option.alpha3Code} option={option}>
              <td>
              <img
                width="40px"
                height="25px"
                src={option.flags.png}
                alt="flag"
              />
            </td>
            <td>{option.name}</td>
            <td>{option.capital}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
    );
  }
  
export default DropDown;
