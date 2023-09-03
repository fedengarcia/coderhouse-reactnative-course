import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const ItemList = ({item}) => {
    return (
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
}

const styles = StyleSheet.create({
    itemList:{
        flexDirection: 'row',
        alignItems:'center',
        // margin: 5
      }
})

export default ItemList;
