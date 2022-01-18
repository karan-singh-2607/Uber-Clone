import React from 'react'
import {
    Text, View, StyleSheet,
} from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import themeColors from '../../Assets/Colors/theme.colors'
import GOOGLE_MAPS_API_KEY from '../../Assets/Data/Keys/Google_API'

const GOOGLE_MAPS_API = GOOGLE_MAPS_API_KEY.GOOGLE_API_KEY
const RouteMapContainer = () => {
    const origin = {
        latitude: 28.450627,
        longitude: -16.263045,
    }
    const destination = {
        latitude: 28.459627,
        longitude: -16.263145,
    }
    return (
        <MapView
            style={{ width: '100%', height: '100%' }}
            initialRegion={{
                latitude: 28.450627,
                longitude: -16.263045,
                latitudeDelta: 0.0022,
                longitudeDelta: 0.0121,
            }}        >

            <MapViewDirections
                origin={origin}
                destination={destination}
                apikey={GOOGLE_MAPS_API}
                strokeWidth={3}
                strokeColor={themeColors.Black}
            />
            <Marker coordinate={origin} >
                <View style={styles.Marker}>
                    <View style={styles.OriginOuter}>
                        <View style={styles.OriginInsider}></View>
                    </View>
                    <Text style={styles.Text}>Origin</Text>
                </View>
            </Marker>
            <Marker coordinate={destination} >
                <View style={styles.Marker}>
                    <View style={styles.DestinationOuter}>
                        <View style={styles.DestinationInsider}></View>
                    </View>
                    <Text style={styles.Text}>Destination</Text>
                </View>
            </Marker>
        </MapView>

    )
}

export default RouteMapContainer

const styles = StyleSheet.create({
    Marker: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',

    },
    OriginOuter: {
        width: 20,
        height: 20,
        backgroundColor: themeColors.Black,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,

    },
    OriginInsider: {
        width: 5,
        height: 5,
        backgroundColor: themeColors.White,
        borderRadius: 50,
    },
    Text: {
        backgroundColor: themeColors.White,
        paddingHorizontal: 15,
        paddingVertical: 5,
        color: themeColors.Black,
        fontSize: 16,
        fontWeight: '600',
        shadowColor: themeColors.Black,
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    DestinationOuter: {
        width: 20,
        height: 20,
        backgroundColor: themeColors.Black,
        justifyContent: 'center',
        alignItems: 'center',

    },
    DestinationInsider: {
        width: 5,
        height: 5,
        backgroundColor: themeColors.White,
    }
});
