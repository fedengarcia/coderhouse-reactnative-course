import { StatusBar } from 'expo-status-bar';
import { Fragment, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View, Modal } from 'react-native';
import CustomModal from './components/CustomModal';
import List from './components/List/List';

export default function App() {
  const [itemsList, setItemsList] =  useState([]);
  const [inputValue, setInputValue] = useState('');
  const [deleteModal, setDeleteModal] = useState(false);
  const [itemSelected, setItemSelected] = useState({});


  const addItem = () => {
    if(inputValue !== ""){
      setItemsList([...itemsList, {id: Math.random(), value:inputValue}])
      setInputValue('')
    }
  }

  const removeItem = () => {
    let itemsUpdated = itemsList.filter(element => element.id !== itemSelected.id);
    setItemsList(itemsUpdated)
  }

  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SHOPPING LIST</Text>

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

      <List
        itemsList={itemsList}
        setDeleteModal={setDeleteModal}
      />

      {deleteModal && 
        <CustomModal
          title={`Estas seguro que deseas eliminar el ${itemSelected.value}`}
          setShowModal={setDeleteModal}
          acceptButtonName={'Aceptar'}
          cancelButtonName={'Cancelar'}
          acceptButtonFunction={removeItem}
        />}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 20,
    backgroundColor: '#ffe042'
  },
  title:{
    margin: 50,
    fontSize: 80,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#e71989'
  },  
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
});
