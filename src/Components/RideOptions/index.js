import React from 'react'
import { Dimensions, ScrollView, StyleSheet, View, Text } from 'react-native'
import BottomDrawer from 'react-native-bottom-drawer-view'
import themeColors from '../../Assets/Colors/theme.colors'
import AvailableRides from '../Available Rides'
import VehicleTypes from '../../Assets/Data/types'
import AvailableVechile from '../../Assets/Data/cars'
const windowHeight = Dimensions.get('window').height
console.log(windowHeight * 0.75)

const Puller = () => {
    return (
        <View style={styles.Puller}></View>
    )
}

const RideOptions = () => {


    return (
        <View style={styles.RideOptionCOntainer}>
            <BottomDrawer
                containerHeight={windowHeight * 0.95}
                offset={0}
                startUp={false}
                downDisplay={windowHeight * 0.40}
                roundedEdges={true}
                shadow={true}
                backgroundColor={themeColors.White}
            >
                {/* <ScrollView horizontal={true} style={{ flex: 1 }}> */}
                <View style={{}}>
                    <Puller />

                    <View style={styles.InfoNote}>
                        <Text style={styles.NoteTxt}>Chose a ride or, swipe up for more</Text>
                    </View>
                    {VehicleTypes.map(vehicle => <AvailableRides vehicle={vehicle} key={vehicle.id} />)}

                </View>
                {/* </ScrollView> */}
            </BottomDrawer>
        </View>
    )
}

export default RideOptions

const styles = StyleSheet.create({
    InfoNote: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginTop: 25,
        marginBottom: 10
    },
    NoteTxt: {
        color: themeColors.Black,
        fontSize: 14,
        fontWeight: '400',
    },
    RideOptionCOntainer: {
        position: 'absolute',
        alignSelf: 'center',
        left: 0
    },
    Puller: {
        width: 50,
        height: 6,
        backgroundColor: themeColors.Gray,
        borderRadius: 3,
        position: 'absolute',
        top: 8,
        alignSelf: 'center'
    }
})
