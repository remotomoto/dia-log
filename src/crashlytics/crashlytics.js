import crashlytics from '@react-native-firebase/crashlytics';
import Config from 'react-native-config';

export const recordError = (error, options) => {
  try {
    log(error, options);
    crashlytics().recordError(error);
  } catch (e) {
    console.log('Error using crashlytics', e);
  }
};

export const log = (message, options) => {
  if (Config.CONSOLE_LOG) {
    console.log(message, JSON.stringify(options));
  }
  try {
    crashlytics().log(`${message} :: ${JSON.stringify(options)}`);
  } catch (e) {
    console.log('Error using crashlytics', e);
  }
};
