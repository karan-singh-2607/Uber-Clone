import React from 'react'
import { StyleSheet, View } from 'react-native'
import RideConfirmNavigation from '../../Components/RideConfirmationNavigation'
import RideOptions from '../../Components/RideOptions'
import RouteMapContainer from '../../Components/RouteMapContainer'

const RideConfirmationScreen = () => {
    return (

        <View>
            <RouteMapContainer />
            <RideOptions />
            <RideConfirmNavigation />
        </View>
    )
}

export default RideConfirmationScreen

const styles = StyleSheet.create({})
