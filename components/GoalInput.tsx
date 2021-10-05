import React, { useState } from "react";
import { Button, TextInput, StyleSheet, Modal, View } from "react-native";

interface Props {
  addHandler: any;
  isAddMode: boolean;
  onCancel: any;
}

const GoalInput: React.FC<Props> = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const addHandler = () => {
      props.addHandler(enteredGoal)
      setEnteredGoal('')
  }

  const cancelHandler = () => {
    setEnteredGoal('')
    props.onCancel()
  }

  return (
    <Modal visible={props.isAddMode} animationType="slide">
      <View style={styles.inputView}>
        <TextInput
          onChangeText={setEnteredGoal}
          value={enteredGoal}
          placeholder="Course Goal"
          style={styles.input}
        />
        <View style={styles.buttons}>
            <View style={styles.button}><Button title="ADD" onPress={addHandler} /></View>
            <View style={styles.button}><Button color="red" title="CANCEL" onPress={cancelHandler} /></View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 6,
    width: '80%'
  },
  inputView: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginBottom: 10
  },
  buttons: {
      marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%'
  },
  button: {
      width: '40%'
  }
});

export default GoalInput;
