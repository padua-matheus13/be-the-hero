import React, { useState, useEffect } from 'react';
import { Alert, Modal, Text, TouchableHighlight, View } from 'react-native';

import { styles } from './styles';

type Props = {
    text: string;
    showModal: boolean;
}

export function CustomModal({ showModal, text }: Props) {
    const [modalVisible, setModalVisible] = useState(showModal);

    useEffect(() => {
        setModalVisible(showModal);
    });

    console.log("Aqui do component: ", showModal);

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>{text}</Text>

                        <TouchableHighlight
                            style={styles.closeButton}
                            onPress={() => {
                                setModalVisible(false);
                            }}>
                            <Text style={styles.textStyle}>Fechar</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

