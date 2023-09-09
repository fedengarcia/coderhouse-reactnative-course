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
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              {/* TITLE */}
              <View style={styles.titleContainer}>
                <Text style={styles.modalTitle}>{title}</Text>
              </View>

              {/* MESSAGE */}
              <View style={styles.messageContainer}>
                <Text style={styles.modalMessage}>{message}</Text>
              </View>

              {/* BUTTONS CONTAINER */}
              <View style={styles.buttonsContainer}>
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
    height:'100%',
    width: '100%',
    backgroundColor:'#2f2f2f',
    flex:1,
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center',
  },
  modalContent: {
    borderRadius: 10,
    height: '20%',
    width: '60%',
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center'
  },
  modalTitle: {
    fontSize: 50,
    marginBottom: 30
  },
  modalMessage: {
    fontSize: 30,
  },
  buttonsContainer: {
    flexDirection:'row',
    width: '90%',
    justifyContent: 'space-around',
    marginTop: 50,
    height:'auto'
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
