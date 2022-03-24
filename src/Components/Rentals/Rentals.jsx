import axios from "axios";
import { useEffect, useState } from "react";
import "./Rentals.css";

export const Rentals = () => {
  const [show, setShow] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios.get(`http://localhost:8080/houses`).then((res) => {
      setShow(res.data);
    });
  };

  return (
    <div className="rentalContainer">
      <div className="sortingButtons">
        <button
          onClick={() => {
            let arr = show.sort((a, b) => b.id - a.id);
            setShow([...arr]);
          }}
          className="sortById"
        >
          Sort by ID
        </button>
        <button
          onClick={() => {
            let arr = show.sort((a, b) => +a.rent - +b.rent);
            setShow([...arr]);
          }}
          className="sortByRentAsc"
        >
          Rent Low to high
        </button>
        <button
          onClick={() => {
            let arr = show.sort((a, b) => +b.rent - +a.rent);
            setShow([...arr]);
          }}
          className="sortByRentDesc"
        >
          Rent High to low
        </button>
        <button
          onClick={() => {
            let arr = show.sort((a, b) => +a.areaCode - +b.areaCode);
            setShow([...arr]);
          }}
          className="sortByAreaAsc"
        >
          Area Low to high
        </button>
        <button
          onClick={() => {
            let arr = show.sort((a, b) => +b.areaCode - +a.areaCode);
            setShow([...arr]);
          }}
          className="sortByAreaDesc"
        >
          Area High to Low
        </button>
      </div>
      <input
        className="searchAddress"
        type="text"
        placeholder="Search Address"
      />
      <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>Owner Name</th>
            <th>Address</th>
            <th>Area Code</th>
            <th>Rent</th>
            <th>Available For</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {show.map((house, index) => {
            return (
              <tr key={house.id} className="houseDetails">
                <td className="houseId">{house.id}</td>
                <td className="houseName">{house.name} </td>
                <td className="ownersName">{house.ownerName}</td>
                <td className="address">{house.address}</td>
                <td className="areaCode">{house.areaCode}</td>
                <td className="rent">{house.rent}</td>
                <td className="preferredTenants">
                  {house.bachelor ? "Bachelor" : "Married"}
                </td>
                <td className="houseImage">
                  <img src={house.image} alt="house" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
