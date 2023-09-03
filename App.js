import { StatusBar } from 'expo-status-bar';
import { Fragment, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View, Modal } from 'react-native';
import CustomModal from './components/CustomModal';

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
      <Text style={styles.title}>Shopping List !!!</Text>

      <View style={styles.formContainer}>
        <TextInput 
          style={styles.textInput} 
          placeholder='Nuevo item'
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
    width: '100%',
    // flex: 1,
    // paddingBottom: 80,
    padding: 30,
    backgroundColor: '#ffffff'
  },
  title:{
    margin: 50,
    fontSize: 80,
    textAlign: 'center'
  },  
  formContainer: {
    // width:'100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center;',
    // marginBottom: 20, 
  },  
  textInput: {
    width: '100%',
    fontSize: 50,
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
    // margin: 5
  }
});
