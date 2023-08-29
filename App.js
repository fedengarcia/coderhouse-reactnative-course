import { StatusBar } from 'expo-status-bar';
import { Fragment, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View, Modal } from 'react-native';

export default function App() {
  const [itemsList, setItemsList] =  useState([]);
  const [inputValue, setInputValue] = useState('');
  const [deleteItemModal, setDeleteModal] = useState(false);
  const [itemSelected, setItemSelected] = useState({});


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

  const renderListItem = ({item}) => (
    <View style={styles.itemList}>
      <Text>{item.value}</Text>
      <Button 
        onPress={()=> {
          setDeleteModal(true);
          setItemSelected(item);
        }}
        title="Remove item"
      />
    </View>
  )

  

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
            renderItem={renderListItem}
            keyExtractor={item => item.id}
          />
      </View>

      {deleteItemModal && 
        <Modal
        >
          <View>
            <Text> Estas seguro que deseas eliminar el {itemSelected.value}</Text>
          </View>
          <View styles={styles.itemListContainer}>
            <Button 
              title='Aceptar'
              onPress={() => {
                removeItem(itemSelected)
                setDeleteModal(false)
              }}  
            />
            <Button 
              title='Cancelar'
              onPress={() => setDeleteModal(false)}  
            />
          </View>
        </Modal>
      }

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
