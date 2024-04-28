import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
  FlatList, Button
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoal] = useState([]);
  const [modalVisibility, setModalVisibility] = useState(false);
  
  const deleteHandler = (id) => {
    setCourseGoal((currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id)
    }))
  }
  console.log(courseGoals)

  return (
    <>
      <StatusBar style='light'/>
      <View style={styles.appContainer}>
        <Button title="Add new Goal" color={'#a065ec'} onPress={() => setModalVisibility(!modalVisibility)}/>
        <GoalInput setCourseGoal={setCourseGoal} visible={modalVisibility} setVisible={setModalVisibility}/>
        <View style={styles.goalsContainer}>
          <FlatList 
            data={courseGoals} renderItem={(itemData, i) => <GoalItem itemData={itemData} onPress={deleteHandler}/>}
            keyExtractor={(item, _) => item.id}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    
  },
  goalsContainer: {
    flex: 7,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e08cc',
  },
  goalText: {
    color: 'white',
  },
});
