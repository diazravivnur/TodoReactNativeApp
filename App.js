import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import SentenceInput from "./src/components/TextInput";

// Import Components
import Todoitem from "./src/components/Todoitem";

export default function App() {
  const [todoItems, settodoItems] = useState([
    {
      text: "Buy Egg",
      completed: true,
    },
    { text: "Buy Pills", completed: false },
  ]);

  //Add Item Todo
  function addItemTodo(_text) {
    settodoItems([...todoItems, { text: _text, completed: false }]);
  }

  // Delete Item Todo
  function deleteItemTodo(_index) {
    let tempArr = [...todoItems];
    tempArr.splice(_index, 1);
    settodoItems(tempArr);
  }

  // Complete Item Todo
  function completeItemTodo(_index) {
    let tempArr = [...todoItems];
    tempArr[_index].completed = true;
    settodoItems(tempArr);
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.input}>Todo Item</Text>
        <FlatList
          data={todoItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <Todoitem
                item={item}
                deleteFunction={() => deleteItemTodo(index)}
                completeFunction={() => completeItemTodo(index)}
              />
            );
          }}
        ></FlatList>
        <SentenceInput onPress={addItemTodo} />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    marginTop: 10,
    fontSize: 36,
    fontWeight: "bold ",
  },
});
