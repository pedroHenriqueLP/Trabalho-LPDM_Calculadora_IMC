import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const calc_IMC = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState('');

  const calcular = () => {
    const pesoFloat = parseFloat(peso);
    const alturaFloat = parseFloat(altura) / 100;
    const imcCalculado = pesoFloat / (alturaFloat * alturaFloat);

    setImc(imcCalculado.toFixed(3));
  };

  return (
    <View style={estilo.container}>
      
      <Text style={estilo.title}>Calculadora IMC</Text>

        <TextInput style={estilo.formulario}
          keyboardType="numeric"
          value={peso}
          onChangeText={setPeso}
          placeholder="Informe o peso (kg):"
        />

        <TextInput style={estilo.formulario}
          keyboardType="numeric"
          value={altura}
          onChangeText={setAltura}
          placeholder=" Informe a altura (cm):"
        />

        <TouchableOpacity style={estilo.botao} onPress={calcular} >
           <Text style={estilo.text}>Calcular</Text>
        </TouchableOpacity>

        {imc ? (
        <View style={estilo.container}>
          <Text style={estilo.text}>O Índice de Massa Corporal é:</Text>
          <Text style={estilo.text}>{imc}</Text>
        </View>
      ) : null}

      </View>   
  );
};

const estilo = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 0,
  },
  
  title: {
    justifyContent: 'center',
    padding: 20,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },

 formulario:{
    height:50,
    width:300,
    paddingHorizontal:10,
    borderColor:'#00000060',
    marginLeft: 40,
    marginBottom: 20,
    borderRadius:5,
    borderWidth:3,
  },

  botao: {
    backgroundColor: 'ffffff',
    borderRadius:25,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

});

export default calc_IMC;