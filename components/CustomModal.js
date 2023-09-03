import React from 'react';
import { Button, StyleSheet, Text, View, Modal } from 'react-native';

const CustomModal = ({
    setShowModal, 
    title, 
    acceptButtonName, 
    cancelButtonName, 
    acceptButtonFunction
}) => {
    return (
      <Modal className={styles.modalContainer}>
        <View className={styles.titleModal}>
          <Text>{title}</Text>
        </View>
        <View styles={styles.buttonsContainer}>
          <Button 
            className={styles.buttonModal}
            title={acceptButtonName}
            onPress={() => {
              acceptButtonFunction()
              setShowModal(false)
            }}  
          />
          <Button 
            className={styles.buttonModal}
            title={cancelButtonName}
            onPress={() => setShowModal(false)}  
          />
        </View>
      </Modal>
    );
}

const styles = StyleSheet.create({
  modalContainer: {

  },
  titleModal: {

  },
  buttonsContainer:{

  },
  buttonModal: {

  }

})

export default CustomModal;
