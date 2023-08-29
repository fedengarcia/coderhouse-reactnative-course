import { StatusBar } from 'expo-status-bar';
import { Fragment, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [items, setItems] =  useState([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = (newItem) => {
    if(newItem !== ""){
      setItems([...items, newItem])
      setInputValue('')
    }
  }

  const removeItem = (item) => {
    let itemsUpdated = items.filter(element => element !== item);
    setItems(itemsUpdated)
  }

  return (
    <View style={styles.container}>
      <Text>Welcome !!!</Text>
      <View style={styles.formContainer}>
        <TextInput 
          style={styles.textInput} 
          placeholder='Cebolla, pera, banana ...' 
          value={inputValue} 
          onChangeText={(text)=> setInputValue(text)}/>
        <Button
            title="Add item"
            onPress={() => addItem(inputValue)} 
          />
      </View>

      <View style={styles.itemListContainer}>
        {items.map((item, i) => 
          <View key={i} style={styles.itemList}>
            <Text>{item}</Text>
            <Button 
              onPress={()=> removeItem(item)}
              title="Remove item"
            />
          </View>
        )}
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center;'
  },  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 120,
    wdith: '100%'
  },
  textInput: {
    width: '100%',
    fontSize: 20,
    fontWeight: '200'
  },
  itemListContainer:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',
    width:'100%',
    height: 'auto'
  },
  itemList:{
    flexDirection: 'row',
    alignItems:'center',
    margin: 5
  }
});
