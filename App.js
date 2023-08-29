import { StatusBar } from 'expo-status-bar';
import { Fragment, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [items, setItems] =  useState([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = (newItem) => {
    if(newItem !== ""){
      let copyItems = items;
      copyItems.push(newItem);
      setItems(copyItems)
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
        <TextInput style={styles.textInput} placeholder='Item de la lista' value={inputValue} onChange={(e)=> setInputValue(e)}/>
        <Button
           title="Add item"
            onPress={() => addItem(inputValue)} 
          />
      </View>

      <View>
        {items.map((item, i) => 
          <View key={i}>
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
    padding: 120
  },
  textInput: {
    width: '100%',
    fontSize: 20,
    fontWeight: '200'
  }
});
