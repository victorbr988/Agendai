import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RadioButton = ({ value, onPress, selected }) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.6} style={styles.radioButtonContainer}>
    <View style={styles.radioButton}>
      {selected ? <Ionicons name="checkmark" size={20} color="#7C3AED" /> : null}
    </View>
    <Text style={styles.radioButtonText}>{value}</Text>
  </TouchableOpacity>
);

export const RadioForm = () => {
  const [selectedValue, setSelectedValue] = useState("Empresa")

  return (
    <View style={styles.container}>
      <RadioButton
        value="Empresa"
        selected={selectedValue === 'Empresa'}
        onPress={() => setSelectedValue('Empresa')}
      />
      <Text style={styles.description}>
        Informe seus horários disponíveis para
        seus cliente possam encontrá-lo. Você 
        poderá ver todos os clientes que fizeram
        agendamentos com você.
      </Text>

      <RadioButton
        value="Cliente"
        selected={selectedValue === 'Cliente'}
        onPress={() => setSelectedValue('Cliente')}
      />
      <Text style={styles.description}>
        Visualizar barbearias disponíveis, 
        ver avaliações de outros clientes, 
        agendar horários.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: '10%',
  },
  description: {
    fontSize: 16,
    paddingTop: 10,
    fontFamily: "Rajdhani_500Medium",
    alignItems: "center",
    paddingRight: "10%",
    width: '100%',
    paddingBottom: "5%",
    color: '#111827',
  },
  radioButton: {
    width: 24,
    height: 24,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDD6FE'
  },
  selectedRadioButton: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  radioButtonText: {
    marginLeft: 10,
    fontSize: 24,
    fontFamily: 'Rajdhani_600SemiBold',
    color: '#111827',
  },
});
