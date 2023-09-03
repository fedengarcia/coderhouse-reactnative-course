import React from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';

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
          placeholderTextColor={"#ff0000"} 
          value={inputValue} 
          onChangeText={(text)=> setInputValue(text)}/>
        <Button
            style={styles.buttonInput}
            title="Add item"
            onPress={() => addItem()} 
          />
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
        width: '90%',
        fontSize: 50,
        fontWeight: '200',
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 30
      },
      buttonInput:{
        width: '100%',
        fontSize: 120,
      },
})

export default InputForm;
