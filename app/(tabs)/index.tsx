import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { evaluate } from 'mathjs';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === '=') {
      try {
        setResult(evaluate(input));
      } catch (error) {
        setResult('Error');
      }
    } else if (value === '<') {
      setInput(input.slice(0, -1));
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    ['C', '/', '*', '<'],
    ['7', '8', '9', '-'],
    ['4', '5', '6', '+'],
    ['1', '2', '3', '='],
    ['0', '.', ' '],
  ];

  return (
    <View style={styles.calculatorContainer}>
      <View style={styles.display}>
        <Text style={styles.input}>{input}</Text>
        <Text style={styles.result}>{result}</Text>
      </View>
      <View style={styles.buttons}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.buttonRow}>
            {row.map((button) => (
              <TouchableOpacity
                key={button}
                style={[styles.button, button === '=' && styles.equalsButton]}
                onPress={() => handlePress(button)}
              >
                <Text style={styles.buttonText}>{button}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
        <Text style={styles.name}>Calc by Pavan Kumar</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  calculatorContainer: {
    width: '100%',
    padding: 20,
  },
  name: {
    textAlign: 'center',
    marginTop: 20,
    color: '#ffffff',
    fontSize: 16,
  },
  display: {
    backgroundColor: '#222',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  input: {
    color: '#aaa',
    fontSize: 24,
  },
  result: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
  },
  buttons: {
    flexDirection: 'column',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    width: 70,
    height: 70,
    backgroundColor: '#444',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  equalsButton: {
    backgroundColor: 'green',
  },
});

export default Calculator;
