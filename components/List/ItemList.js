import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const ItemList = ({item}) => {
    return (
        <View style={styles.itemList}>
            <Text style={styles.itemName}>{item.value}</Text>
            <Button 
            color="#f194ff"
            onPress={()=> {
                setDeleteModal(true);
                setItemSelected(item);
            }}
            title="Remover item"
            />
        </View>
        )
}

const styles = StyleSheet.create({
    itemList:{
        width: '100%',
        borderBottomWidth: 1,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection: 'row',
        alignItems:'center',
        margin: 5
    },
    itemName: {
        fontSize: 50,
        margin: 20,
    },
    itemButton:{
        margin: 50,
        width: 500,
    }
})

export default ItemList;
