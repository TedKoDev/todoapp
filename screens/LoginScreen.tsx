import {Alert, SafeAreaView, StyleSheet, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {Svg} from 'react-native-svg';
import {Button, Div, Text, Input} from 'react-native-magnus';
import {signOut, signUp} from '../lib/auth';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState(''); // 비밀번호 확인 필드 상태
  const [showSignUp, setShowSignUp] = useState(false); // 회원가입 필드 표시 여부 상태

  // 회원가입 처리 함수
  const onSignUp = async () => {
    try {
      const {user} = await signUp({email, password});
      console.log(user);
      Alert.alert('회원가입 성공');
    } catch (error) {
      // error를 적절한 타입으로 캐스팅

      Alert.alert('회원가입 실패');
    }
  };
  const onLogin = () => {
    // 로그인 처리
  };

  const onDelete = () => {
    // 회원탈퇴 처리
  };
  return (
    <SafeAreaView style={styles.container}>
      <Div p={16}>
        <Text style={styles.title}>{showSignUp ? '회원가입' : '로그인'}</Text>

        <View style={styles.inputContainer}>
          <Text>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder={'Email'}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text>Password</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder={'Password'}
            // secureTextEntry={true}
          />
        </View>

        {showSignUp && (
          <View style={styles.inputContainer}>
            <Text>Confirm Password</Text>
            <TextInput
              style={styles.input}
              value={confirm} // 비밀번호 확인 필드에 대한 상태를 추가해야 합니다.
              onChangeText={setConfirm} // 이에 대한 새로운 상태 관리 함수가 필요합니다.
              placeholder={'Confirm Password'}
              // secureTextEntry={true}
            />
          </View>
        )}

        <Button mt={30} block onPress={onLogin}>
          <Text color="white" fontWeight="500">
            Login
          </Text>
        </Button>

        <Button mt={30} block onPress={() => setShowSignUp(!showSignUp)}>
          <Text color="white" fontWeight="500">
            회원가입
          </Text>
        </Button>

        {showSignUp && (
          <Button mt={30} block onPress={onSignUp}>
            <Text color="white" fontWeight="500">
              회원가입 완료하기
            </Text>
          </Button>
        )}
      </Div>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
  },
});
