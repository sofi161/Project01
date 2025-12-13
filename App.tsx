import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import * as Yup from 'yup';

const [password, setPassword] = useState('');
const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);

const [lowerCase, setLowerCase] = useState(true);
const [upperCase, setUpperCase] = useState(false);
const [numbers, setNumbers] = useState(false);
const [symbols, setSymbols] = useState(false);

const passwordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'should be minimum 4 characters')
    .max(16, 'should be maximum of 16 characters')
    .required('length is required'),
});

const generatePasswordString = (passwordLength: number) => {
  let characterList = '';
  const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const digitChars = '0123456789';
  const specialChars = '!@#$%^&*()_+~`';

  if (upperCase) {
    characterList += upperCaseChars;
  }
  if (lowerCase) {
    characterList += lowerCaseChars;
  }
  if (numbers) {
    characterList += digitChars;
  }
  if (symbols) {
    characterList += specialChars;
  }

  const passwordResult = createPassword(characterList, passwordLength);
  setPassword(passwordResult);
  setIsPasswordGenerated(true);
};

const createPassword = (characters: string, passwordLength: number) => {
  let password = '';
  for (let i = 0; i < passwordLength; i++) {
    let characterIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(characterIndex);
  }
  return password;
};

const resetPassword = () => {
  setPassword('');
  setIsPasswordGenerated(false);
  setLowerCase(true);
  setUpperCase(false);
  setNumbers(false);
  setSymbols(false);
};

export default function App() {
  return (
    <View>
      <Text>App</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
