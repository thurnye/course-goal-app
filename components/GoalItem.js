import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

const GoalItem = ({ itemData, onPress }) => {
  return (
      <View style={styles.goalItem}>
        <Pressable
          onPress={() => onPress(itemData.item.id)}
          android_ripple={{ color: '#210644' }}
          style={({pressed}) => pressed && styles.pressedItem}
        >
          <Text style={styles.goalText}>{itemData.item.text}</Text>
        </Pressable>
      </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e08cc',
  },
  pressedItem: {
    opacity: 0.5
  },
  goalText: {
    padding: 8,
    color: 'white',
  },
});
