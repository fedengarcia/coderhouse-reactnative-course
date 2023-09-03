import { StatusBar } from 'expo-status-bar';
import { Fragment, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View, Modal } from 'react-native';
import CustomModal from './components/CustomModal';
import List from './components/List/List';
import InputForm from './components/InputForm';

export default function App() {
  const [itemsList, setItemsList] =  useState([]);
  const [inputValue, setInputValue] = useState('');
  const [deleteModal, setDeleteModal] = useState(false);
  const [itemSelected, setItemSelected] = useState({});


  const removeItem = () => {
    let itemsUpdated = itemsList.filter(element => element.id !== itemSelected.id);
    setItemsList(itemsUpdated)
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>SHOPPING LIST</Text>

    {/* Input Form to add items to list */}
      <InputForm
        itemsList={itemsList}
        setItemsList={setItemsList}
        setInputValue={setInputValue}
        inputValue={inputValue}
      />
      
{/* List items render */}
      <List
        itemsList={itemsList}
        setDeleteModal={setDeleteModal}
      />

{/* Modal */}
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
});
