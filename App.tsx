import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: 'white', fontFamily: 'bold' }}>
        Welcome to my new project
      </Text>
      <Text style={{ color: 'pink', fontFamily: 'italic' }}>{counter}</Text>
      <Button title="Click Me" onPress={() => setCounter(counter + 1)}></Button>
      <Button title="Reset" onPress={() => setCounter(0)}></Button>
    </View>
  );
};

export default App;
