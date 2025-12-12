import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardRed]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardBlue]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardPink]}>
          <Text>Pink</Text>
        </View>
      </View>
    </View>
  );
};

export default FlatCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
    color: 'white',
  },
  container: {
    padding: 10,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    height: 100,
    width: 100,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardRed: {
    backgroundColor: '#ff6961',
  },
  cardBlue: {
    backgroundColor: '#aec6cf',
  },
  cardPink: {
    backgroundColor: 'pink',
  },
});
