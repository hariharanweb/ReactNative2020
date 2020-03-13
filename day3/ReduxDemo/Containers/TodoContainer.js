import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';

const TodoContainer = ({navigation}) => {
  const [todo, setTodo] = useState('');
  const handleAdd = () => {
    setTodo('');
    navigation.navigate('TodoList');
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="todo"
        onChangeText={text => setTodo(text)}
        value={todo}
        style={styles.input}
      />
      <Button title="Add Todo" color="#841584" onPress={handleAdd} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  input: {
    height: 40,
    marginTop: 10,
    paddingHorizontal: 16,
    alignItems: 'stretch',
  },
});
export default TodoContainer;
