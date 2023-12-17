import {Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import {Div, Text} from 'react-native-magnus';
import Checkboxunchecked from '../assets/checkbox-un.svg';
import Checkboxchecked from '../assets/checkbox-ch.svg';
import DeleteIcon from '../assets/delete.svg'; // 이름 수정 및 대문자로 시작

const TodoItem = () => {
  return (
    <View>
      <Div row>
        <Pressable>
          <Checkboxunchecked width={24} height={24} />
          <Checkboxchecked width={24} height={24} />
        </Pressable>

        <Text flex={2}>코딩하기</Text>

        <Pressable hitSlop={10}>
          <DeleteIcon width={24} height={24} />
        </Pressable>
      </Div>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({});
