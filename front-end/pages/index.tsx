import React, { useState, useCallback, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

import Interface from "../components/Interface";
import Time from "../components/Time";

import AddDevice from "../components/AddDevice";
import Login from "../components/Login";
import { GetServerSidePropsContext } from "next";
import { getCookieFromServer } from "../utils/cookie";
import DeviceDashboard from "../components/DeviceDashboard";

import mockJson from "../utils/testJson.json";

type HomeProps = {
  isLoggedin: boolean;
};
export const mockDevices = [
  {
    status: "online",
    cellHours: 1075,
    oxyHours: 2012,
    district: "area1",
    client: "client1",
  },
  {
    status: "offline",
    cellHours: 1453,
    oxyHours: 3042,
    district: "area1",
    client: "client1",
  },
  {
    status: "warning",
    cellHours: 5012,
    oxyHours: 1053,
    district: "area2",
    client: "client2",
  },
  {
    status: "maintencence",
    cellHours: 1661,
    oxyHours: 3212,
    district: "area3",
    client: "client3",
  },
  {
    status: "online",
    cellHours: 60220,
    oxyHours: 2240,
    district: "area3",
    client: "client4",
  },
];
export const mockDistrict = ["area1", "area2", "area3"];
export const filterDistrict = (deviceArr, districtArr) => {
  const totalArea = districtArr.length
  
};
export default function Home({ isLoggedin }: HomeProps) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCTd-4w5z5_-dQtt6U1_dK-lWXRQVSjgGU",
  });
  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  console.log(isLoggedin);
  const [isOpenInterface, setIsOpenInterface] = useState(true);
  const [isLogin, setIsLogin] = useState(isLoggedin);
  const [isAddDevice, setIsAddDevice] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  const containerStyle = {
    width: "100vw",
    height: "100vh",
  };

  const center = {
    lng: 2.39865112304693,
    lat: 48.8894157409669,
  };

  const openAddDevicePopup = () => {
    setIsAddDevice(true);
  };
  const closeAddDevicePopup = () => {
    setIsAddDevice(false);
  };
  useEffect(() => {
    if (map && isLoaded) {
      console.log("useeffect");
      const features = map?.data.addGeoJson(mockJson);

      console.log(features);
      var marker = new google.maps.Marker({
        position: {
          lng: 2.40033936500561,
          lat: 48.8777471008302,
        },
        map: map,
        // icon: './alert.png',
      });
    }
  }, [map, isLoaded]);

  return (
    <>
      <div style={{ height: "100vh", width: "100%", position: "relative" }}>
        {isLogin ? (
          <Interface openAddDevicePopup={openAddDevicePopup} />
        ) : (
          <Login login={setIsLogin} />
        )}
        {isAddDevice && <AddDevice closeAddDevicePopup={closeAddDevicePopup} />}
        <button
          className=" absolute top-0 left-0 bg-white z-10 mt-2 ml-2 rounded-full p-2 px-3 font-extrabold"
          onClick={() => setIsDashboardOpen((e) => !e)}
        >
          Dashboard Toggle
        </button>
        {isDashboardOpen && <DeviceDashboard />}
        {isLoaded && (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            {/* Child components, such as markers, info windows, etc. */}
            <></>
          </GoogleMap>
        )}

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
