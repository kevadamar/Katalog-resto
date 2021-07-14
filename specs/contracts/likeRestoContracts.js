/* eslint-disable max-len */
// eslint-disable-next-line object-curly-newline
// import { ID_1, ID_2, ID_3, ID_4 } from '../helpers/constants';

const favRestoModel = (favoriteResto) => {
  const {
    getAllRestaurants, putRestaurant, deleteRestaurant, getRestaurant,
  } = favoriteResto;

  it('should return the Resto that has been added', async () => {
    putRestaurant({ id: 'rqdv5juczeskfw1e867' });
    putRestaurant({ id: 's1knt6za9kkfw1e867' });

    expect(await getRestaurant('rqdv5juczeskfw1e867')).toEqual({
      id: 'rqdv5juczeskfw1e867',
    });
    expect(await getRestaurant('s1knt6za9kkfw1e867')).toEqual({
      id: 's1knt6za9kkfw1e867',
    });
    expect(await getRestaurant('w9pga3s2tubkfw1e867')).toEqual(undefined);
  });

  it('can return all of the Restos that have been added', async () => {
    putRestaurant({ id: 'rqdv5juczeskfw1e867' });
    putRestaurant({ id: 's1knt6za9kkfw1e867' });

    expect(await getAllRestaurants()).toEqual([
      { id: 'rqdv5juczeskfw1e867' },
      { id: 's1knt6za9kkfw1e867' },
    ]);
  });

  it('should remove favorite Resto', async () => {
    putRestaurant({ id: 'rqdv5juczeskfw1e867' });
    putRestaurant({ id: 's1knt6za9kkfw1e867' });
    putRestaurant({ id: 'w9pga3s2tubkfw1e867' });

    await deleteRestaurant('rqdv5juczeskfw1e867');

    expect(await getAllRestaurants()).toEqual([
      { id: 's1knt6za9kkfw1e867' },
      { id: 'w9pga3s2tubkfw1e867' },
    ]);
  });

  it('should handle request to remove a Resto even though the Resto has not been added', async () => {
    putRestaurant({ id: 'rqdv5juczeskfw1e867' });
    putRestaurant({ id: 's1knt6za9kkfw1e867' });
    putRestaurant({ id: 'w9pga3s2tubkfw1e867' });

    await deleteRestaurant(4);

    expect(await getAllRestaurants()).toEqual([
      { id: 'rqdv5juczeskfw1e867' },
      { id: 's1knt6za9kkfw1e867' },
      { id: 'w9pga3s2tubkfw1e867' },
    ]);
  });

  // it('should return the Resto that has been added', async () => {
  //   putRestaurant({ id: ID_1 });
  //   putRestaurant({ id: ID_2 });
  //   putRestaurant({ id: ID_3 });
  //   putRestaurant({ id: ID_4 });

  //   expect(await getRestaurant(ID_1)).toEqual({
  //     id: ID_1,
  //   });
  //   expect(await getRestaurant(ID_2)).toEqual({
  //     id: ID_2,
  //   });
  //   expect(await getRestaurant(ID_3)).toEqual({
  //     id: ID_3,
  //   });
  //   expect(await getRestaurant(ID_4)).toEqual({
  //     id: ID_4,
  //   });
  //   expect(await getRestaurant('id_undefined')).toEqual(undefined);
  // });

  // it('should refuse a Resto from being added if it does not have the correct property', async () => {
  //   putRestaurant({ aProperty: 'property' });

  //   expect(await getAllRestaurants()).toEqual([]);
  // });

  // it('can return all of the Restos that have been added', async () => {
  //   putRestaurant({ id: ID_1 });
  //   putRestaurant({ id: ID_2 });
  //   putRestaurant({ id: ID_3 });
  //   putRestaurant({ id: ID_4 });

  //   expect(await getAllRestaurants()).toEqual([
  //     { id: ID_1 },
  //     { id: ID_2 },
  //     { id: ID_3 },
  //     { id: ID_4 },
  //   ]);
  // });

  // it('should remove favorite Resto', async () => {
  //   putRestaurant({ id: ID_1 });
  //   putRestaurant({ id: ID_2 });
  //   putRestaurant({ id: ID_3 });
  //   putRestaurant({ id: ID_4 });
  //   putRestaurant({ id: 'id_undefined' });

  //   await deleteRestaurant(ID_1);

  //   expect(await getAllRestaurants()).toEqual([
  //     { id: ID_1 },
  //     { id: 'id_undefined' },
  //   ]);
  // });

  // it('should handle request to remove a Resto even though the Resto has not been added', async () => {
  //   putRestaurant({ id: ID_1 });
  //   putRestaurant({ id: ID_2 });
  //   putRestaurant({ id: ID_3 });
  //   putRestaurant({ id: ID_4 });
  //   putRestaurant({ id: 'id_undefined' });

  //   await deleteRestaurant(ID_4);

  //   expect(await getAllRestaurants()).toEqual([
  //     { id: ID_1 },
  //     { id: ID_2 },
  //     { id: ID_3 },
  //     { id: ID_4 },
  //     { id: 'id_undefined' },
  //   ]);
  // });
};

// eslint-disable-next-line import/prefer-default-export
export { favRestoModel };
