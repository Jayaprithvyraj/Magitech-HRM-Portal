import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'
//import axios from 'axios'

const index = () => {
  return (
   <Redirect href="/(home)"/>
  )
}

export default index

const styles = StyleSheet.create({})

//axios.defaults.baseURL = "exp://192.168.1.192:8081";