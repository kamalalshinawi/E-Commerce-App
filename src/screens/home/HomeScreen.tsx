import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeHeader from '../../components/headers/HomeHeader'
import AppSafeView from '../../components/views/AppSafeView'
import ProductCard from '../../components/cards/ProductCard'
const HomeScreen = () => {
  return (
    <AppSafeView>
      <HomeHeader />
      <ProductCard />
      

    </AppSafeView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})