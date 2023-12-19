import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// Todo 아이템에 대한 인터페이스 정의
interface Todo {
  id: number;
  text: string;
  done: boolean; // 추가된 부분
}
// 초기 상태 타입 정의
type TodosState = Todo[];

// 초기 상태 선언
const initialState: TodosState = [];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push({...action.payload, done: false}); // Todo 항목을 추가할 때 done 초기값 설정
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const {id, text} = action.payload;
      const todoItem = state.find(todo => todo.id === id);
      if (todoItem) {
        todoItem.text = text;
      }
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todoItem = state.find(todo => todo.id === action.payload);
      if (todoItem) {
        todoItem.done = !todoItem.done;
      }
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      console.log('removeTodo', action.payload);
      return state.filter(todo => todo.id !== action.payload);
    },
  },
});

export const {addTodo, updateTodo, toggleTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;
