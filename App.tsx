import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import { Formik } from 'formik';
import * as Yup from 'yup';

export default function App() {
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
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>
          <Formik
            initialValues={{ passwordLength: '' }}
            validationSchema={passwordSchema}
            onSubmit={values => {
              console.log(values);
              generatePasswordString(Number(values.passwordLength));
            }}
          >
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              handleReset,
              /* and other goodies */
            }) => (
              <>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}>Password Length</Text>
                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={styles.errorText}>
                        {errors.passwordLength}
                      </Text>
                    )}
                    <TextInput
                      style={styles.inputStyle}
                      value={values.passwordLength}
                      onChangeText={handleChange('passwordLength')}
                      placeholder="Ex. 8"
                      keyboardType="numeric"
                    />
                  </View>
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Lowercase</Text>
                  <BouncyCheckbox
                    disabled={false}
                    isChecked={lowerCase}
                    onPress={() => setLowerCase(!lowerCase)}
                    fillColor="#e70c0cff"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Uppercase</Text>
                  <BouncyCheckbox
                    disabled={false}
                    isChecked={upperCase}
                    onPress={() => setUpperCase(!upperCase)}
                    fillColor="#e70c0cff"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Numbers</Text>
                  <BouncyCheckbox
                    disabled={false}
                    isChecked={numbers}
                    onPress={() => setNumbers(!numbers)}
                    fillColor="#e70c0cff"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include symbols</Text>
                  <BouncyCheckbox
                    disabled={false}
                    isChecked={symbols}
                    onPress={() => setSymbols(!symbols)}
                    fillColor="#e70c0cff"
                  />
                </View>

                <View style={styles.formActions}>
                  <TouchableOpacity disabled={!isValid} onPress={handleSubmit}>
                    <Text style={styles.buttons}>Generate Password</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    disabled={!isValid}
                    onPress={() => {
                      handleReset();
                      resetPassword();
                    }}
                  >
                    <Text style={styles.buttons}>Reset Password</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
          {isPasswordGenerated && (
            <View style={styles.card}>
              <Text style={styles.subTitle}>Result</Text>
              <Text style={styles.description}>Long Press to Copy</Text>
              <Text selectable={true} style={styles.generatedPassword}>
                {password}
              </Text>
            </View>
          )}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '100%',
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#e70c0cff',
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: 'pink',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000ff',
    paddingHorizontal: 4,
  },
  inputColumn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    borderRadius: 5,
    width: '100%',
  },
  inputStyle: {
    borderColor: '#c94343ff',
    borderWidth: 2,
    borderRadius: 5,
    width: '40%',
    marginHorizontal: 2,
  },
  errorText: {
    fontSize: 8,
    color: 'red',
  },
  buttons: {
    backgroundColor: '#e70c0cff',
    padding: 10,
    color: 'white',
    fontWeight: 'bold',
    borderRadius: 5,
    marginBottom: 15,
  },
  card: {
    backgroundColor: 'pink',
    shadowOffset: { width: 1, height: 2 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    elevation: 5,
    borderRadius: 5,
    width: '100%',
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 6,
  },
  description: {
    fontSize: 10,
    paddingHorizontal: 6,
    color: 'gray',
  },
  generatedPassword: {
    fontSize: 26,
    padding: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
