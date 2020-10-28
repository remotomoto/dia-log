import { emailProfileUser } from '@react-native-firebase/firestore';

const module = () => ({
  createUserWithEmailAndPassword: jest.fn().mockImplementation(() => Promise.resolve(emailProfileUser)),
  signInWithEmailAndPassword: jest.fn().mockImplementation(() => Promise.resolve(emailProfileUser)),
  signInWithCredential: jest.fn().mockImplementation(() => Promise.resolve({})),
  currentUser: { uid: 'test-user-uid-001' },
  signOut: jest.fn(),
});

export default module;
