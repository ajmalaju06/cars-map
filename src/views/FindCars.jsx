import React, { useState, useEffect } from "react";
import CarsList from "../components/cars/CarsList";
import MapView from "../components/maps/MapView";
import { data } from "../datas/data";

function FindCars() {
  const [cars, SetCars] = useState([]);
  const [mapDetails, setMapDetails] = useState([]);
  const [address, setAddress] = useState({});
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    SetCars(data);
  }, []);

  const mapData = (datas) => {
    setMapDetails(datas.points);
  };

  const mapPopUp = (mapAddress) => {
    setAddress(mapAddress);
    setIsPopupVisible(mapAddress.isvisible);
    setTimeout(() => {
      setIsPopupVisible(false);
    }, 2000);
  };

  return (
    <div className="findCars">
      <CarsList dataList={cars} details={(value) => mapData(value)} />
      <MapView
        mapData={mapDetails}
        getaddress={(val) => mapPopUp(val)}
      ></MapView>

      <div className={`pop-up ${isPopupVisible}`}>
        <span className="popup-indicate"></span>
        <span className="address-txt">{address.place}</span>
      </div>

      <div className="right-icons-container">
        <span className="menu-span">
          <span className="pen-span">
            <i class="far fa-edit"></i>
          </span>
          <i class="fas fa-ellipsis-v"></i>
        </span>
        <span className="arrow_span">
          <i className="fas fa-chevron-right"></i>
        </span>
      </div>
    </div>
  );
}

export default FindCars;
