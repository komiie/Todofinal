import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Task from './Task';


const TasksList = ({
                     tasksList,
                     onPressHandler,
                   }) => {
  // function to delete the task from the current tasks list.

  console.log('tasksList', tasksList);
  const removeFromListHandler = (task) => {
    onPressHandler(
      task,
      tasksList.filter((ct) => ct.id !== task.id),
    );
  };

  return (
    <View style={styles.items}>
      {tasksList.map((task) => (
        <TouchableOpacity key={task.id} onPress={() => removeFromListHandler(task)}>
          <Task task={task}/>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
  },
  items: {
    marginTop: 25,
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default TasksList;
