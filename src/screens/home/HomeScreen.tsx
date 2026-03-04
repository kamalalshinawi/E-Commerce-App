import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeHeader from '../../components/headers/HomeHeader'
import AppSafeView from '../../components/views/AppSafeView'
import App from '../../../App'
import AppText from '../../components/texts/AppText'
const HomeScreen = () => {
  return (
    <AppSafeView>
      <HomeHeader />
      <AppText variant='bold' style={{fontSize:29}}>kamal</AppText>
      

    </AppSafeView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})