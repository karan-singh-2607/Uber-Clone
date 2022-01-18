import React from 'react'
import { StyleSheet, View } from 'react-native'
import RideConfirmMap from '../../Components/RideConmirmMap'
import RideOptions from '../../Components/RideOptions'

const RideConfirmationScreen = () => {
    return (

        <View>
            <RideConfirmMap />
            <RideOptions />
        </View>
    )
}

export default RideConfirmationScreen

const styles = StyleSheet.create({})
