import React from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import styles from './style';
interface ModalProps {
  visible: boolean;
  onClose: () => void;
  header: string;
  message: string;
}

const CustomModal: React.FC<ModalProps> = ({ visible, onClose, header, message }) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.headerText}>{header}</Text>
          <Text style={styles.messageText}>{message}</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeArea}>
            <Text style={styles.closeText}>ok</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};



export default CustomModal;
