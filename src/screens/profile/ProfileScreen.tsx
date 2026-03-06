import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppSafeView from '../../components/views/AppSafeView'
import HomeHeader from '../../components/headers/HomeHeader'
import ProfileSectionButton from '../../components/buttons/ProfileSectionButton'

const ProfileScreen = () => {
  return (
    <AppSafeView>
      <HomeHeader />
      <ProfileSectionButton title="My Orders" />
      <ProfileSectionButton title="Language" />
      <ProfileSectionButton title="Logout" />
    </AppSafeView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})