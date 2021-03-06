const fourStops = [
  {
    line: '4',
    stationId: '401',
    stopName: 'Woodlawn',
    night: false,
    id: 0,
  },
  {
    line: '4',
    stationId: '402',
    stopName: 'Mosholu Pkwy',
    night: false,
    id: 1,
  },
  {
    line: '4',
    stationId: '405',
    stopName: 'Bedford Park Blvd - Lehman College',
    night: false,
    id: 2,
  },
  {
    line: '4',
    stationId: '406',
    stopName: 'Kingsbridge Rd',
    night: false,
    id: 3,
  },
  {
    line: '4',
    stationId: '407',
    stopName: 'Fordham Rd',
    night: false,
    id: 4,
  },
  {
    line: '4',
    stationId: '408',
    stopName: '183 St',
    night: false,
    id: 5,
  },
  {
    line: '4',
    stationId: '409',
    stopName: 'Burnside Av',
    night: false,
    id: 6,
  },
  {
    line: '4',
    stationId: '410',
    stopName: '176 St',
    night: false,
    id: 7,
  },
  {
    line: '4',
    stationId: '411',
    stopName: 'Mt Eden Av',
    night: false,
    id: 8,
  },
  {
    line: '4',
    stationId: '412',
    stopName: '170 St',
    night: false,
    id: 9,
  },
  {
    line: '4',
    stationId: '413',
    stopName: '167 St',
    night: false,
    id: 10,
  },
  {
    line: '4',
    stationId: '414',
    stopName: '161 St - Yankee Stadium',
    night: false,
    id: 11,
  },
  {
    line: '4',
    stationId: '415',
    stopName: '149 St - Grand Concourse',
    night: false,
    id: 12,
  },
  {
    line: '4',
    stationId: '416',
    stopName: '138 St - Grand Concourse',
    night: false,
    id: 13,
  },
  {
    line: '4',
    stationId: '621',
    stopName: '125 St',
    night: false,
    id: 14,
  },
  {
    line: '4',
    stationId: '622',
    stopName: '116 St',
    night: true,
    id: 15,
  },
  {
    line: '4',
    stationId: '623',
    stopName: '110 St',
    night: true,
    id: 16,
  },
  {
    line: '4',
    stationId: '624',
    stopName: '103 St',
    night: true,
    id: 17,
  },
  {
    line: '4',
    stationId: '625',
    stopName: '96 St',
    night: true,
    id: 18,
  },
  {
    line: '4',
    stationId: '626',
    stopName: '86 St',
    night: false,
    id: 19,
  },
  {
    line: '4',
    stationId: '627',
    stopName: '77 St',
    night: true,
    id: 20,
  },
  {
    line: '4',
    stationId: '628',
    stopName: '68 St - Hunter College',
    night: true,
    id: 21,
  },
  {
    line: '4',
    stationId: '629',
    stopName: '59 St',
    night: false,
    id: 22,
  },
  {
    line: '4',
    stationId: '630',
    stopName: '51 St',
    night: true,
    id: 23,
  },
  {
    line: '4',
    stationId: '631',
    stopName: 'Grand Central - 42 St',
    night: false,
    id: 24,
  },
  {
    line: '4',
    stationId: '632',
    stopName: '33 St',
    night: true,
    id: 25,
  },
  {
    line: '4',
    stationId: '633',
    stopName: '28 St',
    night: true,
    id: 26,
  },
  {
    line: '4',
    stationId: '634',
    stopName: '23 St',
    night: true,
    id: 27,
  },
  {
    line: '4',
    stationId: '635',
    stopName: '14 St - Union Sq',
    night: false,
    id: 28,
  },
  {
    line: '4',
    stationId: '636',
    stopName: 'Astor Pl',
    night: true,
    id: 29,
  },
  {
    line: '4',
    stationId: '637',
    stopName: 'Bleecker St',
    night: true,
    id: 30,
  },
  {
    line: '4',
    stationId: '638',
    stopName: 'Spring St',
    night: true,
    id: 31,
  },
  {
    line: '4',
    stationId: '639',
    stopName: 'Canal St',
    night: true,
    id: 32,
  },
  {
    line: '4',
    stationId: '640',
    stopName: 'Brooklyn Bridge - City Hall',
    night: false,
    id: 33,
  },
  {
    line: '4',
    stationId: '418',
    stopName: 'Fulton St',
    night: false,
    id: 34,
  },
  {
    line: '4',
    stationId: '419',
    stopName: 'Wall St',
    night: false,
    id: 35,
  },
  {
    line: '4',
    stationId: '420',
    stopName: 'Bowling Green',
    night: false,
    id: 36,
  },
  {
    line: '4',
    stationId: '423',
    stopName: 'Borough Hall',
    night: false,
    id: 37,
  },
  {
    line: '4',
    stationId: '234',
    stopName: 'Nevins St',
    night: false,
    id: 38,
  },
  {
    line: '4',
    stationId: '235',
    stopName: 'Atlantic Av - Barclays Ctr',
    night: false,
    id: 39,
  },
  {
    line: '4',
    stationId: '236',
    stopName: 'Bergen St',
    night: true,
    id: 40,
  },
  {
    line: '4',
    stationId: '237',
    stopName: 'Grand Army Plaza',
    night: true,
    id: 41,
  },
  {
    line: '4',
    stationId: '238',
    stopName: 'Eastern Pkwy - Brooklyn Museum',
    night: true,
    id: 42,
  },
  {
    line: '4',
    stationId: '239',
    stopName: 'Franklin Av',
    night: false,
    id: 43,
  },
  {
    line: '4',
    stationId: '248',
    stopName: 'Nostrand Av',
    night: true,
    id: 44,
  },
  {
    line: '4',
    stationId: '249',
    stopName: 'Kingston Av',
    night: true,
    id: 45,
  },
  {
    line: '4',
    stationId: '250',
    stopName: 'Crown Hts - Utica Av',
    night: false,
    id: 46,
  },
  {
    line: '4',
    stationId: '251',
    stopName: 'Sutter Av - Rutland Rd',
    night: true,
    id: 47,
  },
  {
    line: '4',
    stationId: '252',
    stopName: 'Saratoga Av',
    night: true,
    id: 48,
  },
  {
    line: '4',
    stationId: '253',
    stopName: 'Rockaway Av',
    night: true,
    id: 49,
  },
  {
    line: '4',
    stationId: '254',
    stopName: 'Junius St',
    night: true,
    id: 50,
  },
  {
    line: '4',
    stationId: '255',
    stopName: 'Pennsylvania Av',
    night: true,
    id: 51,
  },
  {
    line: '4',
    stationId: '256',
    stopName: 'Van Siclen Av',
    night: true,
    id: 52,
  },
  {
    line: '4',
    stationId: '257',
    stopName: 'New Lots Av',
    night: true,
    id: 53,
  },
];

module.exports = fourStops;
