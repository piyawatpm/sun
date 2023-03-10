export const mockArea = [
  {
    a: 'area1',
    type: 'FeatureCollection',
    style: {
      'stroke-width': '3',
      'fill-opacity': 0.6,
    },
    crs: { type: 'name', properties: { name: 'EPSG:4326' } },
    features: [
      {
        type: 'Feature',
        properties: {
          a: 'area1',
          id_0: 79,
          iso: 'FRA',
          name_0: 'France',
          id_1: 4,
          name_1: 'Île-de-France',
          id_2: 14,
          name_2: 'Paris',
          id_3: 60,
          name_3: 'Paris, 17e arrondissement',
          id_4: 534,
          name_4: 'Paris, 17e arrondissement',
          id_5: 4750,
          name_5: 'Paris, 17e arrondissement',
          type_5: 'Chef-lieu canton',
          engtype_5: 'Commune',
          pk: '4750',
        },
        geometry: {
          type: 'MultiPolygon',
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
    a: 'area2',
    type: 'FeatureCollection',
    style: {
      'stroke-width': '3',
      'fill-opacity': 0.6,
    },
    crs: { type: 'name', properties: { name: 'EPSG:4326' } },
    features: [
      {
        type: 'Feature',
        properties: {
          a: 'area2',
          id_0: 79,
          iso: 'FRA',
          name_0: 'France',
          id_1: 4,
          name_1: 'Île-de-France',
          id_2: 14,
          name_2: 'Paris',
          id_3: 61,
          name_3: 'Paris, 18e arrondissement',
          id_4: 535,
          name_4: 'Paris, 18e arrondissement',
          id_5: 4751,
          name_5: 'Paris, 18e arrondissement',
          type_5: 'Chef-lieu canton',
          engtype_5: 'Commune',
          pk: '4751',
        },
        geometry: {
          type: 'MultiPolygon',
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
    a: 'area3',
    type: 'FeatureCollection',
    style: {
      'stroke-width': '3',
      'fill-opacity': 0.6,
    },
    crs: { type: 'name', properties: { name: 'EPSG:4326' } },
    features: [
      {
        type: 'Feature',
        properties: {
          a: 'area3',
          id_0: 79,
          iso: 'FRA',
          name_0: 'France',
          id_1: 4,
          name_1: 'Île-de-France',
          id_2: 14,
          name_2: 'Paris',
          id_3: 62,
          name_3: 'Paris, 19e arrondissement',
          id_4: 536,
          name_4: 'Paris, 19e arrondissement',
          id_5: 4752,
          name_5: 'Paris, 19e arrondissement',
          type_5: 'Chef-lieu canton',
          engtype_5: 'Commune',
          pk: '4752',
        },
        geometry: {
          type: 'MultiPolygon',
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
    group: 'g1',
    deviceId: 1,
    status: 'online',
    cellHours: 1075,
    oxyHours: 2012,
    district: 'area1',
    client: 'client1',
    isWarning: true,
    isMaintencence: false,
  },
  {
    group: 'g1',
    deviceId: 2,
    status: 'offline',
    cellHours: 1453,
    oxyHours: 3042,
    district: 'area1',
    client: 'client1',
    isWarning: false,
    isMaintencence: false,
  },
  {
    group: 'g2',
    deviceId: 3,
    status: 'online',
    cellHours: 5012,
    oxyHours: 1053,
    district: 'area2',
    client: 'client2',
    isWarning: false,
    isMaintencence: false,
  },
  {
    group: 'g3',
    deviceId: 4,
    status: 'offline',
    cellHours: 1661,
    oxyHours: 3212,
    district: 'area3',
    client: 'client3',
    isWarning: false,
    isMaintencence: true,
  },
  {
    group: 'g4',
    deviceId: 5,
    status: 'offline',
    cellHours: 60220,
    oxyHours: 2240,
    district: 'area3',
    client: 'client4',
    isWarning: true,
  },
];
