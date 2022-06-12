/*NPM START funkar sedan W för web - To Fix: göra null eller empty row efter man skapat en ny*/

import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Task from "./components/Task";
import CompletedTasksList from "./components/CompletedTasksList";
import TasksList from "./components/TasksList";

export default function App() {
  {
    /*UseState för att sett'a state för senaste task'en*/
  }
  const [task, setTask] = useState();

  // newly added tasks list
  const [todoItems, setTodoItems] = useState([]);
  /*Nya listan och tasksen*/

  // Tasks in progress list
  const [inProgressTasks, setInProgressTasks] = useState([]);

  // final tasks list
  const [finalTasks, setFinalTasks] = useState([]);

  // Funktion för att skapa tasken i ny state
  // Function to add a new task in newly added tasks list
  const handleAddTask = () => {
    const newTask = {
      id: Date.now(),
      text: task,
      status: "pending",
      // pending, completed  === som i consolen, först får den status pending,
    };
    console.log(newTask);
    setTodoItems([...todoItems, newTask]);
    setTask("");
  };

  const shiftTaskToInProgress = (currentTask, newList) => {
    setInProgressTasks([...inProgressTasks, currentTask]);
    setTodoItems(newList);
  };

  const shiftTaskToFinal = (currentTask, newList) => {
    setFinalTasks([...finalTasks, currentTask]);
    setInProgressTasks(newList);
  };

  const deleteTaskFromFinal = (currentTask, newList) => {
    setFinalTasks(newList);
  };

  return (
    <ScrollView
      // style={styles.container}
      contentContainerStyle={{ flex: 1 }}
    >
      <View style={styles.container}>
        {/*Today's tasks*/}
        <View style={styles.tasksWrapper}>
          {/*<Text style={styles.sectionTitle}>What to to list</Text>*/}

          {/*<View style={styles.items}>*/}
          {/*  /!*Här kommer tasksen - inbunden i en TouchableOpacityknapp med en callbackfunction till completeTask vid onPress*!/*/}
          {/*  {todoItems.map((task, id) => {*/}
          {/*    // Callback function till funktionen på rad 44 completeTask, skicka in tasksen hit och itererar över alla sparade tasks*/}
          {/*    return (*/}
          {/*      <TouchableOpacity*/}
          {/*        key={task.id}*/}
          {/*        onPress={() => shiftTaskToInProgress(task.id)}*/}
          {/*      >*/}
          {/*        <Task task={task}/>*/}
          {/*      </TouchableOpacity>*/}
          {/*    );*/}
          {/*  })}*/}
          {/*</View>*/}

          <Text style={styles.sectionTitle}>What to to list</Text>
          <TasksList
            tasksList={todoItems}
            onPressHandler={shiftTaskToInProgress}
          />

          {/* Kolumn 2 med callbackfunction till CompletedTaskList.jsx -> Complet'ar tasken*/}
          <Text style={styles.sectionTitle}>"In progress" Tasks</Text>
          <TasksList
            tasksList={inProgressTasks}
            onPressHandler={shiftTaskToFinal}
          />

          {/* COPY - Column 3 with callbackfunction till CompletedTaskList.jsx -> Completes the tasken*/}
          <Text style={styles.sectionTitle}>"Finalized" Tasks</Text>
          <TasksList
            tasksList={finalTasks}
            onPressHandler={deleteTaskFromFinal}
          />
        </View>
        {/*Write a task*/}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
        >
          <TextInput
            style={styles.input}
            placeholder={"Skriv en task"}
            value={task}
            onChangeText={(text) => setTask(text)}
            onSubmitEditing={handleAddTask}
          />

          {/* Callback-function till Add Task funktionen*/}
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff759b",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 25,
  },

  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    width: 500,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#9c81ff",
    borderWidth: 4,
  },

  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#9c81ff",
    borderWidth: 3,
  },
  addText: {},
});
