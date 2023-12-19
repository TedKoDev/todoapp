import React from 'react';
import {Pressable, View, StyleSheet} from 'react-native';
import {Div, Text} from 'react-native-magnus';
import Checkboxunchecked from '../assets/checkbox-un.svg';
import Checkboxchecked from '../assets/checkbox-ch.svg';
import DeleteIcon from '../assets/delete.svg';
import {useDispatch} from 'react-redux';
import {removeTodo, toggleTodo} from '../redux/slices/todoSlice';

const TodoItem = ({todo}: any) => {
  const dispatch = useDispatch();

  const handleRemoveTodo = () => {
    dispatch(removeTodo(todo.id));
  };

  const handletoggleTodo = () => {
    todo.done = !todo.done;
    dispatch(toggleTodo(todo.id));
  };

  const completedTodoStyle = StyleSheet.create({
    text: {
      textDecorationLine: todo.done ? 'line-through' : 'none',
      opacity: todo.done ? 0.3 : 1,
    },
  });

  return (
    <View>
      <Div row borderWidth={1} alignItems="center" p="sm">
        <Pressable onPress={handletoggleTodo}>
          {todo.done ? (
            <Checkboxchecked width={24} height={24} />
          ) : (
            <Checkboxunchecked width={24} height={24} />
          )}
        </Pressable>

        <Text flex={2} style={completedTodoStyle.text}>
          {todo.text}
        </Text>

        <Pressable hitSlop={10} onPress={handleRemoveTodo}>
          <DeleteIcon width={24} height={24} />
        </Pressable>
      </Div>
    </View>
  );
};

export default TodoItem;
