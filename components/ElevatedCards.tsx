import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
    color: 'white',
  },
  card: {
    height: 100,
    width: 100,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    marginBottom: 20,
  },
  cardElevated: {
    backgroundColor: '#ff964f',
    elevation: 10,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: '#000000ff',
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
});
