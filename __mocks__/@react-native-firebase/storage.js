export const storage = () => ({
  ref: () => ({
    putFile: Promise.resolve({
      uri: '/test/uri',
    }),
    getDownloadURL: () => Promise.resolve(''),
  }),
});

export default storage;
