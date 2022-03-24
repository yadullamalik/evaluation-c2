import axios from "axios";
import { useEffect, useState } from "react";

export const AddHouse = () => {
  const [data, setData] = useState({
    name: "",
    ownerName: "",
    address: "",
    areaCode: "",
    rent: "",
    bachelor: "",
    married: "",
    image: "",
  });
  useEffect(() => {
    handleSubmit();
  }, []);
  const handleChange = (e) => {
    let { name, value, checked, type } = e.target;
    value = type === "checkbox" ? checked : value;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:8080/houses`, data).then(
      setData({
        name: "",
        ownerName: "",
        address: "",
        areaCode: "",
        rent: "",
        bachelor: "",
        married: "",
        image: "",
      })
    );
  };
  return (
    <div className="addHouseContainer">
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input
          type="text"
          className="name"
          value={data.name}
          name="name"
          onChange={handleChange}
          required
        />
        <br />
        <label>ownerName</label>
        <input
          value={data.ownerName}
          type="text"
          className="ownerName"
          name="ownerName"
          onChange={handleChange}
          required
        />
        <br />
        <label>address</label>
        <input
          value={data.address}
          type="text"
          className="address"
          name="address"
          onChange={handleChange}
          required
        />
        <br />
        <label>areaCode</label>
        <input
          value={data.areaCode}
          type="text"
          className="areaCode"
          name="areaCode"
          onChange={handleChange}
          required
        />
        <br />
        <label>rent</label>
        <input
          value={data.rent}
          type="text"
          className="rent"
          name="rent"
          onChange={handleChange}
          required
        />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input
          checked={data.bachelor}
          type="checkbox"
          name="bachelor"
          onChange={handleChange}
          className="bachelor"
        />
        <br />
        <label>married</label>
        <input
          checked={data.married}
          type="checkbox"
          className="married"
          name="married"
          onChange={handleChange}
        />
        <br />
        <label>image</label>
        <input
          value={data.image}
          type="text"
          className="image"
          name="image"
          onChange={handleChange}
          required
        />
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};
