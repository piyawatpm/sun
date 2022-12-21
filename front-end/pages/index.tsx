import React, { useState } from "react";
import GoogleMapReact from 'google-map-react';
import Interface from "../components/Interface";
import Time from "../components/Time";
import Login from "./login";
import AddDevice from "../components/AddDevice";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Home() {
  const [isOpenInterface, setIsOpenInterface] = useState(true)
  const [isLogin,setIsLogin] = useState(false)
  const [isAddDevice,setIsAddDevice] = useState(false)
  const defaultProps = {
    center: {
      lat: -33.868820,
      lng: 151.209290
    },
    zoom: 10
  };
  const openAddDevicePopup=()=>{
    setIsAddDevice(true)
  }
  const closeAddDevicePopup=()=>{
    setIsAddDevice(false)
  }
  return (
    <>
      <div style={{ height: '100vh', width: '100%', position: 'relative' }}>


       {isLogin? <Interface openAddDevicePopup={openAddDevicePopup} />:<Login login={setIsLogin} />} 
       {isAddDevice&&<AddDevice closeAddDevicePopup={closeAddDevicePopup}/>}
    
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCTd-4w5z5_-dQtt6U1_dK-lWXRQVSjgGU" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          {/* <AnyReactComponent
          lat={-33.868820}
          lng={151.209290}
          text="My Marker"
        /> */}

        </GoogleMapReact>
        <Time/>
      </div>
    </>

  );
}