import React from 'react';
import TodoContainer from './Containers/TodoContainer';
import TodoListContainer from './Containers/TodoListContainer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Todo" component={TodoContainer} />
        <Stack.Screen name="TodoList" component={TodoListContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
