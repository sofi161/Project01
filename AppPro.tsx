import react, { JSX, useState } from 'react';
import { View, Text, StyleSheet, useColorScheme, Button } from 'react-native';

const AppPro = (): JSX.Element => {
  const [isDark, setIsDark] = useState(true);
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View
      style={isDark ? [styles.container, styles.lightTheme] : styles.container}
    >
      <Text style={isDarkMode ? styles.whiteText : styles.darkText}>Hello</Text>
      <Button title="Change Theme" onPress={() => setIsDark(!isDark)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lightTheme: {
    backgroundColor: 'white',
  },
  whiteText: {
    color: 'white',
  },
  darkText: {
    color: 'black',
  },
});

export default AppPro;
