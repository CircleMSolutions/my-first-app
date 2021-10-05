import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
import Stocks from "./components/Stocks";

export default function App() {
  const [courseGoals, setCourseGoals] = useState<
    { key: string; value: string }[]
  >([]);
  const [isAddMode, setisAddMode] = useState(false);

  const handler = (text: string) => {
    setCourseGoals((prev) => [
      ...prev,
      { key: Math.random().toString(), value: text },
    ]);
    setisAddMode(false)
  };
  const deleteHandler = (key: string) => {
    setCourseGoals((prev) => prev.filter((goal) => goal.key !== key));
  };
  const cancelHandler = () => {
    setisAddMode(false)
  }

  return (
    <View style={styles.root}>
      <Button title="Add New Goal" onPress={() => setisAddMode(true)} />
      <GoalInput onCancel={cancelHandler} addHandler={handler} isAddMode={isAddMode} />
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            onDelete={deleteHandler.bind(null, itemData.item.key)}
            itemData={itemData.item.value}
          />
        )}
      ></FlatList>
      <Stocks />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 50,
  },
});
