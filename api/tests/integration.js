import customer from '../src/customer';
import distance from '../src/distance';


describe('integration tests between customer.js and distance.js', () => {
  it('should return all customer names and ids, sorted by id asc, within the given distance', done => {
    let intercomOffice = {
      latitude: 53.339428,
      longitude: -6.257664
    },
      limitDistance = 100; //100km

      customer.getAll()
        .then(data => {
          let customersWithinDistance = distance.filterTargetsWithinDistance(intercomOffice, data.split("\n").map(JSON.parse), limitDistance)
                .map(customer => ({id: customer.user_id, name: customer.name}))
                .sort((c1, c2) => c1.id - c2.id);
          
          //Since data is fixed, we can test it
          expect(customersWithinDistance).toEqual([
            { id: 4, name: 'Ian Kehoe' },
            { id: 5, name: 'Nora Dempsey' },
            { id: 6, name: 'Theresa Enright' },
            { id: 8, name: 'Eoin Ahearn' },
            { id: 11, name: 'Richard Finnegan' },
            { id: 12, name: 'Christina McArdle' },
            { id: 13, name: 'Olive Ahearn' },
            { id: 15, name: 'Michael Ahearn' },
            { id: 17, name: 'Patricia Cahill' },
            { id: 23, name: 'Eoin Gallagher' },
            { id: 24, name: 'Rose Enright' },
            { id: 26, name: 'Stephen McArdle' },
            { id: 29, name: 'Oliver Ahearn' },
            { id: 30, name: 'Nick Enright' },
            { id: 31, name: 'Alan Behan' },
            { id: 39, name: 'Lisa Ahearn' },
          ]);
          done();
        });
  });
});