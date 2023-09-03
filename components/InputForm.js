import React from 'react';
import {View, StyleSheet, TextInput, Button, TouchableOpacity, Text} from 'react-native';

const InputForm = ({inputValue,setInputValue, setItemsList, itemsList}) => {

    const addItem = () => {
        if(inputValue !== ""){
          setItemsList([...itemsList, {id: Math.random(), value:inputValue}])
          setInputValue('')
        }
      }

    return (
        <View style={styles.formContainer}>
        <TextInput
          style={styles.textInput} 
          placeholder='Nuevo item'
          placeholderTextColor={"#fe6f27"} 
          value={inputValue} 
          onChangeText={(text)=> setInputValue(text)}
        />
        <TouchableOpacity 
            onPress={() => addItem()} 
            style={styles.appButtonContainer}
        >
            <Text style={styles.appButtonText}>AGREGAR</Text>
        </TouchableOpacity>

      </View>
    );
}

const styles = StyleSheet.create({
    formContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20, 
      },  
      textInput: {
        width: '80%',
        fontSize: 50,
        fontWeight: '200',
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 30
      },
      appButtonContainer: {
        elevation: 8,
        backgroundColor: "#fe6f27",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
      },
      appButtonText: {
        fontSize: 38,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }
})

export default InputForm;
