import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const SentenceInput = (props) => {
  const [text, setText] = useState("");
  return (
    <View>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setText(text)}
          placeholder="Add Todo Here"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.onPress(text)}
        >
          <Text>Add</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default SentenceInput;
const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 40,
    margin: 12,
    borderColor: "3498db",
    borderWidth: 1,
    borderRadius: 10,
  },
  button: {
    margin: 8,
    padding: 8,
    backgroundColor: "c6ffc1",
    justifyContent: "center",
    alignItems: "center",
  },
});
