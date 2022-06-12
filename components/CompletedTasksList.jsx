import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Task from "./Task";

const CompletedTask = ({ task, deleteTaskHandler }) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square} onPress={deleteTaskHandler} />
        <Text style={styles.itemText}>{task.text}</Text>
      </View>

      <View style={styles.circular}></View>
    </View>
  );
};

const CompletedTasksList = ({
  completedTasks,
  updateCompletedTasksHandler,
}) => {
  const deleteTaskHandler = (task) => {
    updateCompletedTasksHandler(
      completedTasks.filter((ct) => ct.id !== task.id)
    );
  };

  return (
    <View style={styles.items}>
      {completedTasks.map((task) => (
        <TouchableOpacity key={task.id} onPress={() => deleteTaskHandler(task)}>
          <Task task={task} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },

  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "80%",
  },
  items: {
    marginTop: 25,
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#55BCF6",
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default CompletedTasksList;