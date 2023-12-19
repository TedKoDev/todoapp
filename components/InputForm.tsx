import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Div, Text} from 'react-native-magnus';
import {useDispatch} from 'react-redux';
import {addTodo} from '../redux/slices/todoSlice';

const InputForm = () => {
  const [currentValue, setCurrentValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (currentValue.trim() === '') return;

    // Todo 객체 생성
    const newTodo = {
      id: Date.now(), // 임시 ID 생성
      text: currentValue,
      done: false,
    };

    // Todo 객체를 dispatch로 전달
    dispatch(addTodo(newTodo));
    setCurrentValue(''); // 입력 필드 초기화
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <View>
        <Div row>
          <TextInput
            style={{
              height: 40,
              marginLeft: 3,
              borderColor: 'gray',
              borderWidth: 1,
              flex: 4,
            }}
            placeholder="할일을 입력하세요"
            value={currentValue}
            onChangeText={setCurrentValue}
            onSubmitEditing={handleSubmit} // 엔터키를 눌렀을 때
          />
          <Pressable style={{flex: 1}} onPress={handleSubmit}>
            <Text
              rounded={6}
              bg="gray"
              ml={30}
              textAlign="center"
              fontSize={30}
              color="white">
              +
            </Text>
          </Pressable>
        </Div>
      </View>
    </KeyboardAvoidingView>
  );
};

export default InputForm;

const styles = StyleSheet.create({});
