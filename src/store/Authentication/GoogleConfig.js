const googleConfig = {
  scopes: [], // what API you want to access on behalf of the user, default is email and profile
  webClientId: '', // client ID of type WEB for your server (needed to verify user ID and offline access)
  offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  // hostedDomain: '', // specifies a hosted domain restriction
  // loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible.
  // forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
  // accountName: 'Dia-Log', // [Android] specifies an account name on the device that should be used
  iosClientId: '',
};

export { googleConfig };
