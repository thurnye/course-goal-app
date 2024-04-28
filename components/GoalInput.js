import { useState } from 'react';
import {
    StyleSheet,
    View,
    Button,
    TextInput,
    Modal,
    Image
} from 'react-native';


const GoalInput = ({setCourseGoal, visible, setVisible}) => {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText);
      };
      const addGoalHandler = () => {
        setCourseGoal((prevGoals) => [{text: enteredGoalText, id: Math.random().toString()}, ...prevGoals]);
        setVisible(!visible)
      };

    return (
        <Modal visible={visible} animationType={'slide'}>
            <View style={styles.inputContainer}>
                <Image source={require('../assets/images/puppy.jpeg')} style={styles.image}/>
                <TextInput
                placeholder='Your course goal!'
                style={styles.textInput}
                onChangeText={goalInputHandler}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={() => setVisible(!visible)}  color='#b180f0'/>
                    </View>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoalHandler}  color='#f31282'/>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default GoalInput;
const styles = StyleSheet.create({
    inputContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      backgroundColor:'#311d6b'
    },
    image: {
        width: 300,
        height: 200,
        margin: 20
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#cececece',
      borderRadius: 6,
      backgroundColor: '#e4d0ff',
      width: '100%',
      padding: 16,
      color: '#120438'
    },
    buttonContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 16
    },
    button: {
        width: 100,
        marginHorizontal: 8
    }
  });