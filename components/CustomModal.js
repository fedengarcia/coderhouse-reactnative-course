import React from 'react';
import { Button, StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';

const CustomModal = ({
    setShowModal, 
    title, 
    message,
    acceptButtonName, 
    cancelButtonName, 
    acceptButtonFunction,
    modalVisible
}) => {
    return (
      <Modal animationType='slide' visible={modalVisible}>
        <View className={styles.modalContainer}>
          <View className={styles.modalContent}>

            {/* TITLE */}
            <View className={styles.modalTitle}>
              <Text>{title}</Text>
            </View>

            {/* MESSAGE */}
            <View className={styles.modalMessage}>
              <Text>{message}</Text>
            </View>

            {/* BUTTONS CONTAINER */}
            <View styles={styles.buttonsContainer}>
              <TouchableOpacity
                onPress={() => {
                  acceptButtonFunction()
                  setShowModal(false)
                }}  
                style={styles.appButtonContainer}
              >
                <Text style={styles.appButtonText}>{acceptButtonName}</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                onPress={() => setShowModal(false)}  
                style={styles.appButtonContainer}
              >
                <Text style={styles.appButtonText}>{cancelButtonName}</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </Modal>
    );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  modalContent: {
    backgroundColor:'#2f2f2f',
    padding: 35,
    justifyContent:'center',
    alignItems:'center'
  },
  modalTitle: {
    fontSize: 0,
  },
  modalMessage: {
    fontSize: 30,
  },
  buttonsContainer: {
    flexDirection:'column',
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

export default CustomModal;
