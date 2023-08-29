import { StatusBar } from 'expo-status-bar';
import { Fragment, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [itemsList, setItemsList] =  useState([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    if(inputValue !== ""){
      setItemsList([...itemsList, {id: Math.random(), value:inputValue}])
      setInputValue('')
    }
  }

  const removeItem = (item) => {
    let itemsUpdated = itemsList.filter(element => element.id !== item.id);
    setItemsList(itemsUpdated)
  }

  return (
    <View style={styles.container}>
      <Text>Welcome !!!</Text>
      <View style={styles.formContainer}>
        <TextInput 
          style={styles.textInput} 
          placeholder='Producto a comprar'
          placeholderTextColor={"#ff0000"} 
          value={inputValue} 
          onChangeText={(text)=> setInputValue(text)}/>
        <Button
            title="Add item"
            onPress={() => addItem()} 
          />
      </View>

      <View style={styles.itemListContainer}>
      <FlatList
          data={itemsList}
          renderItem={({item}) => (
            <View style={styles.itemList}>
              <Text>{item.value}</Text>
              <Button 
                onPress={()=> removeItem(item)}
                title="Remove item"
              />
            </View>
          )}
          keyExtractor={item => item.id}
        />

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingBottom: 80,
    backgroundColor: '#ffffff'
  },
  formContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center;',
    // marginBottom: 20, 
  },  
  textInput: {
    width: '100%',
    fontSize: 20,
    fontWeight: '200'
  },
  itemListContainer:{
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems:'flex-start',
    width:'100%',
    height: '100%'
  },
  itemList:{
    flexDirection: 'row',
    alignItems:'center',
    margin: 5
  }
});
