import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import ItemList from './ItemList';




const List = ({itemsList, setDeleteModal, setItemSelected}) => {

    const renderListItem = ({item}) => (
        <ItemList 
        setItemSelected={setItemSelected}
        setDeleteModal={setDeleteModal}
        item={item}/>
      )


    return (
        <View style={styles.itemListContainer}>
        <FlatList
            data={itemsList}
            renderItem={renderListItem}
            keyExtractor={item => item.id}
          />
      </View>
    );
}

const styles = StyleSheet.create({
    itemListContainer:{
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems:'flex-start',
        width:'100%',
        height: '100%'
    },
})

export default List;
