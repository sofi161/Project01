import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  Linking,
  TouchableOpacity,
} from 'react-native';

export default function FancyCards() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View style={styles.card}>
      <Text style={styles.headingText}> Trending Cards </Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUsbmTZu_uMrmJ0z--CrG-o1UIXytu1OCizQ&s',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Blue Bird</Text>
          <Text style={styles.cardLabel}> • Bird</Text>
          <Text style={styles.cardDescription}>
            A bluebird is a small, vibrant songbird known for the male's
            brilliant blue back and wings, often with rusty orange chests and
            white bellies, though females are duller; they're thrush family
            members, preferring open woodlands, fields with scattered trees, and
            nesting in cavities, feeding on insects and berries, and
            representing joy and spring in North American culture.{' '}
          </Text>
          <TouchableOpacity
            onPress={() => openWebsite('https://reactnative.dev/docs/linking')}
          >
            <Text style={styles.cardFooter}>Learn More</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  cardImage: {
    height: 200,
    width: 'auto',
    borderRadius: 4,
    margin: 4,
  },
  cardElevated: {
    elevation: 10,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: '#000000ff',
    shadowOpacity: 0.8,
    shadowRadius: 10,
    borderRadius: 10,
  },
  cardBody: {
    padding: 16,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 6,
  },
  cardLabel: {
    backgroundColor: '#2361e7ff',
    color: 'white',
    width: '15%',
    padding: 4,
    marginBottom: 6,
    borderRadius: 10,
  },
  cardDescription: {
    color: 'white',
    marginBottom: 10,
  },
  cardFooter: {
    backgroundColor: '#2361e7ff',
    color: 'white',
    textAlign: 'center',
    padding: 4,
    borderRadius: 4,
  },
});
