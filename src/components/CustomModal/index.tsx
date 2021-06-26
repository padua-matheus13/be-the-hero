import React, { useState, useEffect } from 'react';
import { Modal, Text, TouchableHighlight, View } from 'react-native';

import { styles } from './styles';

type Props = {
    text: string;
    showModal: boolean;
}

export function CustomModal({ showModal, text }: Props) {
    const [modalVisible, setModalVisible] = useState(showModal);

    useEffect(() => {
        setModalVisible(showModal)
    }, [showModal]);

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
            >
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