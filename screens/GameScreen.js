import { View, Text, StyleSheet } from 'react-native';

export default function GameScreen() {
  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      {/*GUESS*/}
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
  }
})