import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/game/ui/PrimaryButton";
import Colors from '../constants/colors'

export default function StartGameScreen({onPickNumber}) {
  const [enteredNumber, setEnteredNumber] = useState('');

  function numberInputHandler(enteredText){
    setEnteredNumber(enteredText);
  }

  function resetInputHadler(){
    setEnteredNumber('');
  }

  function confirmInputHandler(){
    const chosenNumber = parseInt(enteredNumber);
    if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
      Alert.alert(
        'Invalid number!', 
        'Number must be a number between 1 and 99.',
        [{text: 'Okay', style: 'destructive', onPress: resetInputHadler}]
      );
      return;
    }

    onPickNumber(chosenNumber);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.numberInput} 
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttoncontainer}>
          <PrimaryButton onPress={resetInputHadler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttoncontainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  inputContainer:{
    justifyContent:'center',
    alignItems: 'center',
    padding: 16,
    marginTop:100,
    marginHorizontal: 24,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttoncontainer: {
    flex: 1,
  }
});