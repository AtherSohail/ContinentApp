





import React, { useState } from "react";
import axios from "axios";
export const SearchBar = () => {
  const [country, setCountry] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  //   console.log(searchQuery)
  const handlesearch = async () => {
    setLoading(true);
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${searchQuery}`
    );
    console.log(response.data[0]);
    setCountry(response.data[0]);
    setLoading(false);
  };

  return (
    <div className="search-container">
      <div className="input-button-container">
        <input
          type="text"
          placeholder="Search for a country..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <button onClick={handlesearch}>Search</button>
      </div>
      {country && !loading && (
        <div
          className="card"
          style={{
            width: "0%",
            alignItems: "center",
            margin: "auto",
            marginTop: "30px",
          }}
        >
          <img
            src={country.flags.png}
            className="card-img-top"
            alt="..."
            style={{
              width: "20%",
                height: "20%",
                alignItems: "center",
            }}
          />
          <table border={"5px"}  style={{
              width: "20px",
                height: "100%",
                alignItems: "center",
                backgroundColor:"lemonchiffon",
            }}>

          <div className="card-body">
           <tr> <h5 >{country.name.common}</h5></tr>
           <tr> <p >{country.capital[0]}</p></tr>
           <tr> <p >{country.region}</p></tr>
          </div>
          </table>
          
        </div>
      )}

      {/* <h2 className="loading">loading...</h2> */}
    </div>
  );
};

export default SearchBar;