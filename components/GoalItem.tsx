import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

interface Props {
    itemData: string
    onDelete: any
}

const GoalItem: React.FC<Props> = (props) => (
    <TouchableOpacity onPress={props.onDelete}>
        <View style={styles.listItem}>
            <Text>{props.itemData}</Text>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    listItem: {
      padding: 10,
      backgroundColor: '#ccc',
      borderColor: 'black',
      borderWidth: 1,
      marginVertical: 5,
    }
  });

export default GoalItem