import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import {Div, Text} from 'react-native-magnus';

const InputForm = () => {
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
          />
          <Pressable style={{flex: 1}}>
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
