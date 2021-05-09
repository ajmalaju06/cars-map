import React, { useState, useEffect } from "react";
import CarsList from "../cars/CarsList";
import MapView from "../maps/MapView";
import { data } from "../../datas/data";

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
    </div>
  );
}

export default FindCars;
