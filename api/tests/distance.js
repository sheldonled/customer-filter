import distance from '../src/distance';

describe('Tests for api/src/distance.js', () => {

  describe('distance.getRadiansFromDegrees', () => {
    it('should read the file without errors', () => {
      let providers = [
        52.986375,
        53,
        54.133333,
        55.033,
        -6.043701,
        -10.27699,
        -9.831111,
        -8.522366,
        -7.1048927,
        0,
      ],
        expectations = [
        0.924786702444,
        0.925025,
        0.944804895926,
        0.960507047,
        -0.10548248146,
        -0.17936731269,
        -0.17158525608,
        -0.14874334676,
        -0.124003770616,
        0,
      ];
      providers.forEach((provider, i) => expect(distance.getRadiansFromDegrees(provider))
        .toBeCloseTo(expectations[i], 4));
    });

    it('should return NaN when no argument is given', () => {
      expect(distance.getRadiansFromDegrees()).toBeNaN();
    });
  });

  describe('distance.calc', () => {

    it('should give proper distance calculation', () => {
      let providers = [
        [53.339428, -6.257664, 52.366037, -8.179118],
        [53.339428, -6.257664, 53.038056, -7.653889],
        [53.339428, -6.257664, 54.1225, -8.143333],
        [53.339428, -6.257664, 51.802, -9.442],
        [53.339428, -6.257664, 53, -7],
      ],
      expectations = [
        168.39718,
        98.874599,
        151.54302,
        274.79780,
        62.231702,
      ];
      providers.forEach((provider, i) => expect(distance.calc.apply(null, provider))
        .toBeCloseTo(expectations[i], 4));
    });
    
  });

  describe('distance.getDistanceBetween', () => {
    it('should give proper distance calculation from predefined Object', () => {
      let dublinSpire = {
        latitude: 53.3498,
        longitude: -6.2603,
      };
      let providers = [
        {
          latitude: 52.366037,
          longitude: -8.179118,
        },
        {
          latitude: 53.038056,
          longitude: -7.653889,
        },
        {
          latitude: 54.1225,
          longitude: -8.143333,
        },
        {
          latitude: 51.802,
          longitude: -9.442,
        },
        {
          latitude: 53,
          longitude: -7,
        },
      ],
      expectations = [
        168.99394,
        99.096308,
        150.72840,
        275.35746,
        62.795114,
      ];
      providers.forEach((provider, i) => expect(distance.getDistanceBetween(dublinSpire, provider))
        .toBeCloseTo(expectations[i], 4));
    });
  });


  describe('distance.filterTargetsWithinDistance', () => {
    it('should give proper distance calculation from predefined Object', () => {
      let dublinSpire = {
        latitude: 53.3498,
        longitude: -6.2603,
      };
      let targets = [
        {
          name: 'place1',
          latitude: 52.366037,
          longitude: -8.179118,
        },
        {
          name: 'place2',
          latitude: 53.038056,
          longitude: -7.653889,
        },
        {
          name: 'place3',
          latitude: 54.1225,
          longitude: -8.143333,
        },
        {
          name: 'place4',
          latitude: 51.802,
          longitude: -9.442,
        },
        {
          name: 'place5',
          latitude: 53,
          longitude: -7,
        },
      ],
      expectation = ['place2', 'place5'];
      expect(distance
              .filterTargetsWithinDistance(dublinSpire, targets, 100)
              .map(target => target.name)
            ).toEqual(expectation);
    });
  });

});
