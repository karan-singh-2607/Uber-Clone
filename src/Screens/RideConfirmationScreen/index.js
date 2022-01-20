import React from 'react'
import { StyleSheet, View } from 'react-native'
import RideConfirmNavigation from '../../Components/RideConfirmationNavigation'
import RideOptions from '../../Components/RideOptions'
import RouteMapContainer from '../../Components/RouteMapContainer'
import { useRoute } from '@react-navigation/native'

const RideConfirmationScreen = () => {
    const Route = useRoute()
    console.log('DDD===>', Route.params)
    const { SourceAddress, DestinationAddress } = Route.params
    return (

        <View >
            <RouteMapContainer Source={SourceAddress} Destination={DestinationAddress} />
            <RideOptions />
            <RideConfirmNavigation />
        </View>
    )
}

export default RideConfirmationScreen

const styles = StyleSheet.create({})
