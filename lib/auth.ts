import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

// signIn 함수: 이메일과 비밀번호를 사용하여 사용자 로그인을 수행합니다.
// - params: { email: string, password: string } 타입의 객체
export function signIn({email, password}: {email: string; password: string}) {
  return auth().signInWithEmailAndPassword(email, password);
}

// signUp 함수: 이메일과 비밀번호를 사용하여 새로운 사용자 계정을 생성합니다.
// - params: { email: string, password: string } 타입의 객체
export function signUp({email, password}: {email: string; password: string}) {
  return auth().createUserWithEmailAndPassword(email, password);
}
export function getCurrentUser(): FirebaseAuthTypes.User | null {
  return auth().currentUser;
}

export function subscribeAuth(
  callback: (user: FirebaseAuthTypes.User | null) => void,
) {
  return auth().onAuthStateChanged(callback);
}
export function signOut() {
  return auth().signOut();
}
