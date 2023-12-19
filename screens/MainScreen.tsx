import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {Div, Text} from 'react-native-magnus';
import {useSelector} from 'react-redux';
import TodoItem from '../components/TodoItem';
import InputForm from '../components/InputForm';
import {RootState} from '../redux/store';

const MainScreen = () => {
  const todos = useSelector((state: RootState) => state.todo);

  const renderTodoItem = ({item}: any) => <TodoItem todo={item} />;

  const renderEmptyList = () => (
    <Text textAlign="center" fontSize={20} color="gray">
      할일이 없습니다
    </Text>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <Div flex={1}>
        <Text fontSize="4xl" fontWeight="bold" textAlign="center">
          할일
        </Text>
        <Div flex={2} p="xl">
          <FlatList
            data={todos.filter(todo => !todo.done)}
            renderItem={renderTodoItem}
            keyExtractor={item => item.id.toString()}
            ListEmptyComponent={renderEmptyList}
          />
        </Div>
        <Div flex={2} p="xl" borderTopWidth={1}>
          <Text fontSize="4xl" fontWeight="bold" textAlign="center">
            완료된 일
          </Text>
          <FlatList
            data={todos.filter(todo => todo.done)}
            renderItem={renderTodoItem}
            keyExtractor={item => item.id.toString()}
            ListEmptyComponent={renderEmptyList}
          />
        </Div>
        <Div flex={1} p="xl">
          <InputForm />
        </Div>
      </Div>
    </SafeAreaView>
  );
};

export default MainScreen;
