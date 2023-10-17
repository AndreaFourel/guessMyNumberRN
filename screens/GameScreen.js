import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import Title from '../components/game/ui/Title';
import NumberContainer from '../components/game/NumberContainer';

export default function GameScreen({userNumber}) {

  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  function generateRandomBetween(min, max, exclude) {

    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher ou lower</Text>
        {/*+ -*/}
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
  
})