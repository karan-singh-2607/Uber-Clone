import React from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import DestinationSearch from '../../Components/DestinationSearch'
import HomeMapScreen from '../../Components/HomeMapScreen'
import Offers from '../../Components/Offers'
import RideType from '../../Components/RideType'
import UserNavigation from '../../Components/UserNavigation'
import { useNavigation } from '@react-navigation/native'
const HomeScreen = () => {
    const NavigateTo = useNavigation();

    const Navigation = () => {
        NavigateTo.navigate('UserProfile')
    }
    return (
        <View style={styles.Container}>
            <Pressable onPress={Navigation}>
                <UserNavigation iconSize={25} Space={8} />
            </Pressable>
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
        padding: 15,
    }
})
