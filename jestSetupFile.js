import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import moment from 'moment-timezone';
import { setI18nConfig } from '~/i18n/i18n';
import { NativeModules } from 'react-native';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock('react-native-screens', () => {
  const RealComponent = jest.requireActual('react-native-screens');
  RealComponent.enableScreens = jest.fn();
  return RealComponent;
});

jest.mock('react-native-localize');
jest.mock('react-native-config');
jest.mock('@react-navigation/native');
jest.mock('~/store/config');
jest.mock('@react-native-firebase/storage', () => {
  const storage = () => ({
    ref: () => ({
      getDownloadURL: async () => '',
    }),
  });

  return storage;
});

setI18nConfig();

jest.doMock('moment', () => {
  moment.tz.setDefault('America/New_York');
  return moment;
});

jest.mock('react-native-device-info', () => {
  return {
    getUniqueID: jest.fn(),
  };
});

jest.mock('react-native-sqlite-storage');

NativeModules.ImagePickerManager = {
  showImagePicker: jest.fn(),
  launchCamera: jest.fn(),
  launchImageLibrary: jest.fn(),
};
