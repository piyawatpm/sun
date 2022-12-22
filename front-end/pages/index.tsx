import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import Interface from "../components/Interface";
import Time from "../components/Time";

import AddDevice from "../components/AddDevice";
import Login from "../components/Login";
import { GetServerSidePropsContext } from "next";
import { getCookieFromServer } from "../utils/cookie";
import DeviceDashboard from "../components/DeviceDashboard";

type HomeProps = {
  isLoggedin: boolean;
};
export default function Home({ isLoggedin }: HomeProps) {
  console.log(isLoggedin);
  const [isOpenInterface, setIsOpenInterface] = useState(true);
  const [isLogin, setIsLogin] = useState(isLoggedin);
  const [isAddDevice, setIsAddDevice] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const defaultProps = {
    center: {
      lat: -33.86882,
      lng: 151.20929,
    },
    zoom: 10,
  };
  const openAddDevicePopup = () => {
    setIsAddDevice(true);
  };
  const closeAddDevicePopup = () => {
    setIsAddDevice(false);
  };
  return (
    <>
      <div  style={{ height: "100vh", width: "100%", position: "relative" }}>
        {isLogin ? (
          <Interface openAddDevicePopup={openAddDevicePopup} />
        ) : (
          <Login login={setIsLogin} />
        )}
        {isAddDevice && <AddDevice closeAddDevicePopup={closeAddDevicePopup} />}
        <button className=" absolute top-0 left-0 bg-white z-10 mt-2 ml-2 rounded-full p-2 px-3 font-extrabold" onClick={()=> setIsDashboardOpen(e=>!e)}>Dashboard Toggle</button>
        {isDashboardOpen && <DeviceDashboard />}
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
        <Time />
      </div>
    </>
  );
}
export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  try {
    const token = getCookieFromServer("userToken", ctx);
    if (token) {
      return {
        props: {
          isLoggedin: true,
        },
      };
    } else {
      return {
        props: {
          isLoggedin: false,
        },
      };
    }
  } catch (error) {
    return {
      props: {
        isLoggedin: false,
      },
    };
  }
}
