import React from 'react';
import {View, StyleSheet, Text, Button, TouchableOpacity} from 'react-native';

const ItemList = ({item, setDeleteModal, setItemSelected}) => {
    return (
        <View style={styles.itemList}>
            <Text style={styles.itemName}>{item.value}</Text>
            <TouchableOpacity 
            onPress={()=> {
                setDeleteModal(true);
                setItemSelected(item);
            }} style={styles.appButtonContainer}>
                <Text style={styles.appButtonText}>Remover item</Text>
            </TouchableOpacity>
        </View>
        )
}

const styles = StyleSheet.create({
    itemList:{
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#fe6f27',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection: 'row',
        alignItems:'center',
        margin: 5
    },
    itemName: {
        fontSize: 50,
        margin: 20,
        color: '#fe6f27'
    },
    itemButton:{
        margin: 50,
        width: 500,
        fontSize: 200
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#fe6f27",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
      },
      appButtonText: {
        fontSize: 38,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }
})

export default ItemList;
