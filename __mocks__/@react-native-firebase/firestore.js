const userMock = () => ({
  doc: (uid) => {
    return {
      delete: () => Promise.reject(),
      get: () =>
        Promise.reject({
          error: 'Sample error',
        }),
      set: () =>
        Promise.reject({
          error: 'Sample error',
        }),
    };
  },
});

const firestore = () => ({
  collection: (collectionUid) => {
    switch (collectionUid) {
      case 'user':
        return userMock();
      default:
        return jest.fn();
    }
  },
});

export default firestore;
