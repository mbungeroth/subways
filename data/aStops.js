const aStops = [
  {
    line: 'A',
    stationId: 'A02',
    stopName: 'Inwood - 207 St',
  },
  {
    line: 'A',
    stationId: 'A03',
    stopName: 'Dyckman St',
  },
  {
    line: 'A',
    stationId: 'A05',
    stopName: '190 St',
  },
  {
    line: 'A',
    stationId: 'A06',
    stopName: '181 St',
  },
  {
    line: 'A',
    stationId: 'A07',
    stopName: '175 St',
  },
  {
    line: 'A',
    stationId: 'A09',
    stopName: '168 St',
  },
  {
    line: 'A',
    stationId: 'A10',
    stopName: '163 St - Amsterdam Av',
  },
  {
    line: 'A',
    stationId: 'A11',
    stopName: '155 St',
  },
  {
    line: 'A',
    stationId: 'A12',
    stopName: '145 St',
  },
  {
    line: 'A',
    stationId: 'A14',
    stopName: '135 St',
  },
  {
    line: 'A',
    stationId: 'A15',
    stopName: '125 St',
  },
  {
    line: 'A',
    stationId: 'A16',
    stopName: '116 St',
  },
  {
    line: 'A',
    stationId: 'A17',
    stopName: 'Cathedral Pkwy (110 St)',
  },
  {
    line: 'A',
    stationId: 'A18',
    stopName: '103 St',
  },
  {
    line: 'A',
    stationId: 'A19',
    stopName: '96 St',
  },
  {
    line: 'A',
    stationId: 'A20',
    stopName: '86 St',
  },
  {
    line: 'A',
    stationId: 'A21',
    stopName: '81 St - Museum of Natural History',
  },
  {
    line: 'A',
    stationId: 'A22',
    stopName: '72 St',
  },
  {
    line: 'A',
    stationId: 'A24',
    stopName: '59 St - Columbus Circle',
  },
  {
    line: 'A',
    stationId: 'A25',
    stopName: '50 St',
  },
  {
    line: 'A',
    stationId: 'A27',
    stopName: '42 St - Port Authority Bus Terminal',
  },
  {
    line: 'A',
    stationId: 'A28',
    stopName: '34 St - Penn Station',
  },
  {
    line: 'A',
    stationId: 'A30',
    stopName: '23 St',
  },
  {
    line: 'A',
    stationId: 'A31',
    stopName: '14 St',
  },
  {
    line: 'A',
    stationId: 'A32',
    stopName: 'W 4 St',
  },
  {
    line: 'A',
    stationId: 'A33',
    stopName: 'Spring St',
  },
  {
    line: 'A',
    stationId: 'A34',
    stopName: 'Canal St',
  },
  {
    line: 'A',
    stationId: 'A36',
    stopName: 'Chambers St',
  },
  {
    line: 'A',
    stationId: 'A38',
    stopName: 'Fulton St',
  },
  {
    line: 'A',
    stationId: 'A40',
    stopName: 'High St',
  },
  {
    line: 'A',
    stationId: 'A41',
    stopName: 'Jay St - MetroTech',
  },
  {
    line: 'A',
    stationId: 'A42',
    stopName: 'Hoyt - Schermerhorn Sts',
  },
  {
    line: 'A',
    stationId: 'A43',
    stopName: 'Lafayette Av',
  },
  {
    line: 'A',
    stationId: 'A44',
    stopName: 'Clinton - Washington Avs',
  },
  {
    line: 'A',
    stationId: 'A45',
    stopName: 'Franklin Av',
  },
  {
    line: 'A',
    stationId: 'A46',
    stopName: 'Nostrand Av',
  },
  {
    line: 'A',
    stationId: 'A47',
    stopName: 'Kingston - Throop Avs',
  },
  {
    line: 'A',
    stationId: 'A48',
    stopName: 'Utica Av',
  },
  {
    line: 'A',
    stationId: 'A49',
    stopName: 'Ralph Av',
  },
  {
    line: 'A',
    stationId: 'A50',
    stopName: 'Rockaway Av',
  },
  {
    line: 'A',
    stationId: 'A51',
    stopName: 'Broadway Jct',
  },
  {
    line: 'A',
    stationId: 'A52',
    stopName: 'Liberty Av',
  },
  {
    line: 'A',
    stationId: 'A53',
    stopName: 'Van Siclen Av',
  },
  {
    line: 'A',
    stationId: 'A54',
    stopName: 'Shepherd Av',
  },
  {
    line: 'A',
    stationId: 'A55',
    stopName: 'Euclid Av',
  },
  {
    line: 'A',
    stationId: 'A57',
    stopName: 'Grant Av',
  },
  {
    line: 'A',
    stationId: 'A59',
    stopName: '80 St',
  },
  {
    line: 'A',
    stationId: 'A60',
    stopName: '88 St',
  },
  {
    line: 'A',
    stationId: 'A61',
    stopName: 'Rockaway Blvd',
  },
  {
    line: 'A',
    stationId: 'A63',
    stopName: '104 St',
  },
  {
    line: 'A',
    stationId: 'A64',
    stopName: '111 St',
  },
  {
    line: 'A',
    stationId: 'A65',
    stopName: 'Ozone Park - Lefferts Blvd',
  },
  {
    line: 'A',
    stationId: 'H01',
    stopName: 'Aqueduct Racetrack',
  },
  {
    line: 'A',
    stationId: 'H02',
    stopName: 'Aqueduct - N Conduit Av',
  },
  {
    line: 'A',
    stationId: 'H03',
    stopName: 'Howard Beach - JFK Airport',
  },
  {
    line: 'A',
    stationId: 'H04',
    stopName: 'Broad Channel',
  },
  {
    line: 'A',
    stationId: 'H06',
    stopName: 'Beach 67 St',
  },
  {
    line: 'A',
    stationId: 'H07',
    stopName: 'Beach 60 St',
  },
  {
    line: 'A',
    stationId: 'H08',
    stopName: 'Beach 44 St',
  },
  {
    line: 'A',
    stationId: 'H09',
    stopName: 'Beach 36 St',
  },
  {
    line: 'A',
    stationId: 'H10',
    stopName: 'Beach 25 St',
  },
  {
    line: 'A',
    stationId: 'H11',
    stopName: 'Far Rockaway - Mott Av',
  },
  {
    line: 'A',
    stationId: 'H12',
    stopName: 'Beach 90 St',
  },
  {
    line: 'A',
    stationId: 'H13',
    stopName: 'Beach 98 St',
  },
  {
    line: 'A',
    stationId: 'H14',
    stopName: 'Beach 105 St',
  },
  {
    line: 'A',
    stationId: 'H15',
    stopName: 'Rockaway Park - Beach 116 St',
  },
  {
    line: 'A',
    stationId: 'H19',
    stopName: 'Broad Channel',
  },
];

module.exports = aStops;
