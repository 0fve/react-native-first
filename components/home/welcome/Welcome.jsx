import React from 'react'
import { View, Text, TextInput, TouchableOpacity, FlatList, Image } from 'react-native'
import { useState } from 'react'
import styles from './welcome.style'
import { useRouter } from 'expo-router'
import { icons, SIZES } from '../../../constants'

const Welcome = () => {
  const router = useRouter();


  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello, Belal</Text>
        <Text style={styles.welcomeMessage}>Find job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput}></TextInput>
        </View>
      </View>
    </View>
  )
}

export default Welcome