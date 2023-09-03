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
        style={styles.list}
            data={itemsList}
            renderItem={renderListItem}
            keyExtractor={item => item.id}
          />
      </View>
    );
}

const styles = StyleSheet.create({
    itemListContainer:{
        borderTopColor: '#2f2f2f',
        marginTop: 20,
        borderTopWidth: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'flex-start',
        width:'100%',
        height: '100%'
    },
    list:{
        width: '100%'
    }
})

export default List;
