import React, { useState, useEffect } from "react";
import Search from "../searchBox/Search";

function Cars({ dataList, details }) {
  const [selectedItem, setSelectedItem] = useState(-1);
  const [carsList, setCarsList] = useState([]);
  const [navButton, setNavButton] = useState(true);

  useEffect(() => {
    setCarsList(dataList);
    console.log(carsList);
  }, [dataList]);

  const searchCar = (value) => {
    if (value !== "" || value != null) {
      const array = dataList.filter((e) =>
        e.name.toLowerCase().includes(value)
      );
      setCarsList(array);
    } else {
      setCarsList(dataList);
    }
    console.log(dataList);
  };

  const selectedCar = (item, idx) => {
    details(item);
    setSelectedItem(idx);
  };

  const navButtonClick = () => {
    setNavButton(!navButton);
  };

  return (
    <div className={`side-bar ${navButton}`}>
      <Search searchEvent={(input) => searchCar(input)}></Search>
      <div className="cars-list-container">
        <ul>
          {carsList.map((e, index) => {
            const active = selectedItem === index ? "active" : "";
            return (
              <li onClick={() => selectedCar(e, index)} className={active}>
                <span className={`indicate ${e.indicate}`}></span>
                <span className="car-name">{e.name}</span>
                {e.badge !== 0 && (
                  <span className={`badge ${e.indicate}`}>{e.badge}</span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <span className="navbar-button" onClick={navButtonClick}>
        {navButton ? (
          <i className="fas fa-chevron-left"></i>
        ) : (
          <i className="fas fa-chevron-right"></i>
        )}
      </span>
    </div>
  );
}

export default Cars;
