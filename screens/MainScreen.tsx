import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import {Div, Text} from 'react-native-magnus';
import InputForm from '../components/InputForm';
import TodoItem from '../components/TodoItem';

const MainScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Div borderWidth={1}>
          <Text textAlign="center" fontSize={30} fontWeight="bold">
            TODO APP
          </Text>
        </Div>

        <Div flex={2}>
          <Text py={30} fontSize={30}>
            할일
          </Text>
          <TodoItem />
        </Div>
        <Div flex={2}>
          <Text py={30} fontSize={30}>
            완료된 일
          </Text>
        </Div>

        <Div flex={1}>
          <InputForm />
        </Div>
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
