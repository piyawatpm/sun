import React, { useState, useCallback, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import {
  GoogleMap,
  useJsApiLoader,
  Autocomplete,
  Polygon,
} from "@react-google-maps/api";

import Interface from "../components/Interface";
import Time from "../components/Time";

import AddDevice from "../components/AddDevice";
import Login from "../components/Login";
import { GetServerSidePropsContext } from "next";
import { getCookieFromServer } from "../utils/cookie";
import ManageDevices from "../components/ManageDevices";
import { api } from "../lib/axios";
import useSWR from "swr";
type HomeProps = {
  isLoggedin: boolean;
};

export const mockArea = [
  {
    a: "area1",
    type: "FeatureCollection",
    style: {
      "stroke-width": "3",
      "fill-opacity": 0.6,
    },
    crs: { type: "name", properties: { name: "EPSG:4326" } },
    features: [
      {
        type: "Feature",
        properties: {
          a: "area1",
          id_0: 79,
          iso: "FRA",
          name_0: "France",
          id_1: 4,
          name_1: "Île-de-France",
          id_2: 14,
          name_2: "Paris",
          id_3: 60,
          name_3: "Paris, 17e arrondissement",
          id_4: 534,
          name_4: "Paris, 17e arrondissement",
          id_5: 4750,
          name_5: "Paris, 17e arrondissement",
          type_5: "Chef-lieu canton",
          engtype_5: "Commune",
          pk: "4750",
        },
        geometry: {
          type: "MultiPolygon",
          coordinates: [
            [
              [
                [2.28445816040039, 48.8856391906739],
                [2.3037772178651, 48.8941535949707],
                [2.31988453865051, 48.9004592895509],
                [2.32998323440552, 48.9011650085449],
                [2.32711529731756, 48.8834838867189],
                [2.30181336402893, 48.8788681030274],
                [2.29514527320862, 48.8738670349122],
                [2.27994656562811, 48.8785781860352],
                [2.28445816040039, 48.8856391906739],
              ],
            ],
          ],
        },
      },
    ],
  },
  {
    a: "area2",
    type: "FeatureCollection",
    style: {
      "stroke-width": "3",
      "fill-opacity": 0.6,
    },
    crs: { type: "name", properties: { name: "EPSG:4326" } },
    features: [
      {
        type: "Feature",
        properties: {
          a: "area2",
          id_0: 79,
          iso: "FRA",
          name_0: "France",
          id_1: 4,
          name_1: "Île-de-France",
          id_2: 14,
          name_2: "Paris",
          id_3: 61,
          name_3: "Paris, 18e arrondissement",
          id_4: 535,
          name_4: "Paris, 18e arrondissement",
          id_5: 4751,
          name_5: "Paris, 18e arrondissement",
          type_5: "Chef-lieu canton",
          engtype_5: "Commune",
          pk: "4751",
        },
        geometry: {
          type: "MultiPolygon",
          coordinates: [
            [
              [
                [2.34954524040228, 48.8836250305176],
                [2.32711529731756, 48.8834838867189],
                [2.32998323440552, 48.9011650085449],
                [2.35187244415289, 48.9015274047852],
                [2.36585354804987, 48.9016113281251],
                [2.37028646469111, 48.901653289795],
                [2.37127304077148, 48.8956298828126],
                [2.36467361450207, 48.8842926025391],
                [2.34954524040228, 48.8836250305176],
              ],
            ],
          ],
        },
      },
    ],
  },
  {
    a: "area3",
    type: "FeatureCollection",
    style: {
      "stroke-width": "3",
      "fill-opacity": 0.6,
    },
    crs: { type: "name", properties: { name: "EPSG:4326" } },
    features: [
      {
        type: "Feature",
        properties: {
          a: "area3",
          id_0: 79,
          iso: "FRA",
          name_0: "France",
          id_1: 4,
          name_1: "Île-de-France",
          id_2: 14,
          name_2: "Paris",
          id_3: 62,
          name_3: "Paris, 19e arrondissement",
          id_4: 536,
          name_4: "Paris, 19e arrondissement",
          id_5: 4752,
          name_5: "Paris, 19e arrondissement",
          type_5: "Chef-lieu canton",
          engtype_5: "Commune",
          pk: "4752",
        },
        geometry: {
          type: "MultiPolygon",
          coordinates: [
            [
              [
                [2.39865112304693, 48.8894157409669],
                [2.40033936500561, 48.8837471008302],
                [2.41069436073315, 48.878475189209],
                [2.37701272964483, 48.8719177246094],
                [2.36929440498352, 48.8833274841309],
                [2.36467361450207, 48.8842926025391],
                [2.37127304077148, 48.8956298828126],
                [2.37028646469111, 48.901653289795],
                [2.3894443511964, 48.9011573791503],
                [2.39649963378906, 48.8961944580079],
                [2.39865112304693, 48.8894157409669],
              ],
            ],
          ],
        },
      },
    ],
  },
];
export const mockDevices = [
  {
    group: "g1",
    deviceId: 1,
    status: "online",
    cellHours: 1075,
    oxyHours: 2012,
    district: "area1",
    client: "client1",
    isWarning: true,
    isMaintencence: false,
  },
  {
    group: "g1",
    deviceId: 2,
    status: "offline",
    cellHours: 1453,
    oxyHours: 3042,
    district: "area1",
    client: "client1",
    isWarning: false,
    isMaintencence: false,
  },
  {
    group: "g2",
    deviceId: 3,
    status: "online",
    cellHours: 5012,
    oxyHours: 1053,
    district: "area2",
    client: "client2",
    isWarning: false,
    isMaintencence: false,
  },
  {
    group: "g3",
    deviceId: 4,
    status: "offline",
    cellHours: 1661,
    oxyHours: 3212,
    district: "area3",
    client: "client3",
    isWarning: false,
    isMaintencence: true,
  },
  {
    group: "g4",
    deviceId: 5,
    status: "offline",
    cellHours: 60220,
    oxyHours: 2240,
    district: "area3",
    client: "client4",
    isWarning: true,
  },
];
const mockArea2 = [
  {
    id: 1,
    name: "arrondissement",
    geoJson: {
      crs: {
        type: "name",
        properties: {
          name: "EPSG:4326",
        },
      },
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "MultiPolygon",
            coordinates: [
              [
                [
                  [2.39865112304693, 48.8894157409669],
                  [2.40033936500561, 48.8837471008302],
                  [2.41069436073315, 48.878475189209],
                  [2.37701272964483, 48.8719177246094],
                  [2.36929440498352, 48.8833274841309],
                  [2.36467361450207, 48.8842926025391],
                  [2.37127304077148, 48.8956298828126],
                  [2.37028646469111, 48.901653289795],
                  [2.3894443511964, 48.9011573791503],
                  [2.39649963378906, 48.8961944580079],
                  [2.39865112304693, 48.8894157409669],
                ],
              ],
            ],
          },
          properties: {
            pk: "4752",
            iso: "FRA",
            id_0: 79,
            id_1: 4,
            id_2: 14,
            id_3: 62,
            id_4: 536,
            id_5: 4752,
            name_0: "France",
            name_1: "Île-de-France",
            name_2: "Paris",
            name_3: "Paris, 19e arrondissement",
            name_4: "Paris, 19e arrondissement",
            name_5: "Paris, 19e arrondissement",
            type_5: "Chef-lieu canton",
            engtype_5: "Commune",
          },
        },
      ],
    },
  },
  {
    id: 2,
    name: "Cognat-Lyonne",
    geoJson: {
      crs: {
        type: "name",
        properties: {
          name: "EPSG:4326",
        },
      },
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "MultiPolygon",
            coordinates: [
              [
                [
                  [3.25863409042353, 46.1001014709473],
                  [3.25985240936279, 46.103199005127],
                  [3.27181982994085, 46.1174240112306],
                  [3.27976512908941, 46.1214752197267],
                  [3.28750967979431, 46.1240653991699],
                  [3.29444074630743, 46.1197624206544],
                  [3.32123637199408, 46.1136741638184],
                  [3.34011745452887, 46.1141586303712],
                  [3.3400382995606, 46.101390838623],
                  [3.32621073722845, 46.1031875610352],
                  [3.31727409362804, 46.0957374572754],
                  [3.27249145507824, 46.0962409973145],
                  [3.25863409042353, 46.1001014709473],
                ],
              ],
            ],
          },
          properties: {
            pk: "3433",
            iso: "FRA",
            id_0: 79,
            id_1: 3,
            id_2: 8,
            id_3: 35,
            id_4: 325,
            id_5: 3433,
            name_0: "France",
            name_1: "Auvergne",
            name_2: "Allier",
            name_3: "Vichy",
            name_4: "Escurolles",
            name_5: "Cognat-Lyonne",
            type_5: "Commune simple",
            engtype_5: "Commune",
          },
        },
      ],
    },
  },
];
export const mockDistrict = ["area1", "area2", "area3"];
export const filterDistrict = (deviceArr = {}, districtArr = {}) => {
  return {
    area1: {
      g1: [
        {
          group: "g1",
          deviceId: 1,
          status: "online",
          cellHours: 1075,
          oxyHours: 2012,
          district: "area1",
          client: "client1",
          isWarning: true,
          isMaintencence: false,
        },
        {
          group: "g1",
          deviceId: 2,
          status: "offline",
          cellHours: 1453,
          oxyHours: 3042,
          district: "area1",
          client: "client1",
          isWarning: false,
          isMaintencence: false,
        },
      ],
    },

    area2: {
      g2: [
        {
          group: "g2",
          deviceId: 3,
          status: "online",
          cellHours: 5012,
          oxyHours: 1053,
          district: "area2",
          client: "client2",
          isWarning: false,
          isMaintencence: false,
        },
      ],
    },

    area3: {
      g3: [
        {
          group: "g3",
          deviceId: 4,
          status: "offline",
          cellHours: 1661,
          oxyHours: 3212,
          district: "area3",
          client: "client3",
          isWarning: false,
          isMaintencence: true,
        },
      ],
      g4: [
        {
          group: "g4",
          deviceId: 5,
          status: "offline",
          cellHours: 60220,
          oxyHours: 2240,
          district: "area3",
          client: "client4",
          isWarning: true,
        },
      ],
    },
  };
};

export default function Home({ isLoggedin }: HomeProps) {
  const address = `http://103.170.142.47:8000/api/v1/location`;
  const fetcher = async (url) => await api.get(url).then((res) => res.data);
  const { data, error } = useSWR(address, fetcher);
  console.log(data);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCTd-4w5z5_-dQtt6U1_dK-lWXRQVSjgGU",
  });
  const [map, setMap] = useState(null);
  const onLoad = useCallback(function callback(map) {
    map.setZoom(12);

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
        console.log(data)
        mockArea.forEach((e) => {
          const feature = map?.data.addGeoJson(e);
          console.log(feature);
          // feature.addProperty("district", e.a);
        });
        map.data.setStyle({
          fillColor: "#FFFFFF",
          strokeWeight: 3,
          strokeColor: "#707070",
        });
      

      // var marker = new google.maps.Marker({
      //   position: {
      //     lng: 2.40033936500561,
      //     lat: 48.8777471008302,
      //   },
      //   map: map,
      //   // icon: './alert.png',
      // });
    }
  }, [map, isLoaded]);

  return (
    <>
      <div style={{ height: "100vh", width: "100%", position: "relative" }}>
        {isLogin ? (
          <Interface map={map} openAddDevicePopup={openAddDevicePopup} />
        ) : (
          <Login login={setIsLogin} />
        )}
        {isAddDevice && <AddDevice closeAddDevicePopup={closeAddDevicePopup} />}
        <button
          onClick={() => {
            setIsDashboardOpen((p) => !p);
          }}
          className=" absolute top-0 left-0 bg-white z-10 mt-2 ml-2 rounded-full p-2 px-3 font-extrabold"
        >
          Dashboard Toggle
        </button>
        {isDashboardOpen && <ManageDevices />}
        {isLoaded && (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            // zoom={10}
            // options={{
            //   styles: [{ stylers: [{ saturation: 50 }, { gamma: 0.5 }] }],
            // }}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            {/* Child components, such as markers, info windows, etc. */}

            {/* <Polygon
              onLoad={onLoad}
              paths={[
                { lat: 25.774, lng: -80.19 },
                { lat: 18.466, lng: -66.118 },
                { lat: 32.321, lng: -64.757 },
                { lat: 25.774, lng: -80.19 },
              ]}
              options={{
                fillColor: "lightblue",
                fillOpacity: 1,
                strokeColor: "red",
                strokeOpacity: 1,
                strokeWeight: 2,
                clickable: false,
                draggable: false,
                editable: false,
                geodesic: false,
                zIndex: 1,
              }}
            /> */}
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
