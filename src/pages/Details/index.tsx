import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { View, TouchableOpacity, Image, Text } from 'react-native';

import logoImg from './../../assets/logo.png'

import styles from './styles';

import { CustomModal } from '../../components/CustomModal';

export default function Detail() {
  const navigation = useNavigation()
  const [modalVisible, setModalVisible] = useState(false);

  const value = 1120

  function validValue(value) {
    if (value > 100) return "Valor maior que 100"
    else return "Valor menor que 100"
  }

  function handleShowModal() {
    setModalVisible(modalVisible ? false : true);
  }

  function navigateBack() {
    navigation.goBack()
  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />

        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#e82041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG: </Text>
        <Text style={styles.incidentValue}>APAD: </Text>

        <Text style={styles.incidentProperty}>Caso: </Text>
        <Text style={styles.incidentValue}>Cadelinha atropalada</Text>

        <Text style={styles.incidentProperty}>Valor: </Text>
        <Text style={styles.incidentValue}>R$ 120,00 </Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

        <Text style={styles.heroDescription}>Entre em contato:</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={() => { handleShowModal() }}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={() => { }}>
            <Text style={styles.actionText}>Email</Text>
          </TouchableOpacity>
        </View>
      </View>

      <CustomModal showModal={modalVisible} text={validValue(value)} />

    </View>
  )
}