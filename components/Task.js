import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, } from 'react-native';

//min task som kommer
const Task = (props) => {
    
    return(
        
        <View style={styles.item}>
            
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square} />
                <Text style={styles.itemText}>{props.task.text}</Text>
            </View>


        </View>
    )


}

 const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        borderRadius: 30,
    borderColor: '#ffa04f',
    borderWidth: 4,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },

    square: {
        width: 24,
        height: 24,
        backgroundColor: '#9275ff',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',

    },
    

 });

export default Task
