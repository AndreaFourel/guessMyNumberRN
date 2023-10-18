import { View, StyleSheet, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import Title from '../components/game/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/game/ui/PrimaryButton';
import Card from '../components/game/ui/Card';
import InstructionText from '../components/game/ui/InstructionText';
import { Ionicons } from '@expo/vector-icons';


function generateRandomBetween(min, max, exclude) {

  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({userNumber, onGameOver}) {

  const initialGuess = generateRandomBetween(
    1, 
    100, 
    userNumber
    );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  

  useEffect(()=>{
    if (userNumber === currentGuess){
      onGameOver();
    }
  }, [userNumber, currentGuess, onGameOver])

  function nextGuessHandler(direction) { //direction =>'lower ou 'greater'
    if((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)){
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: 'Sorry', style: 'cancel'},
      ]);
      return
    }
    if(direction === 'lower'){
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary, 
      maxBoundary, 
      currentGuess
      );
    setCurrentGuess(newRndNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Card>
          <InstructionText style={styles.instructionText}>Higher or Lower ?</InstructionText>
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer} >
              <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                <Ionicons name='md-remove' size={24} color='white' />
              </PrimaryButton>
            </View>
            <View style={styles.buttonContainer} >
              <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                <Ionicons name='md-add' size={24} color='white' />
              </PrimaryButton>
            </View>
          </View>
        </Card>
      </View>
      <View>{/*LOG ROUNDS*/}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  instructionText:{
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer:{
    flex: 1
  },
})