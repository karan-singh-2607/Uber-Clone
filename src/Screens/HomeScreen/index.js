import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DestinationSearch from '../../Components/DestinationSearch'
import HomeMapScreen from '../../Components/HomeMapScreen'
import Offers from '../../Components/Offers'
import RideType from '../../Components/RideType'
import UserNavigation from '../../Components/UserNavigation'

const HomeScreen = () => {
    return (
        <View style={styles.Container}>
            <UserNavigation />
            <Offers />
            <RideType />
            <DestinationSearch />
            <HomeMapScreen />


        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    Container: {
        padding: 15
    }
})