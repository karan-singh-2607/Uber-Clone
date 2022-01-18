import React from 'react'
import { Dimensions, ScrollView, StyleSheet, View, Text } from 'react-native'
import BottomDrawer from 'react-native-bottom-drawer-view'
import themeColors from '../../Assets/Colors/theme.colors'
import AvailableRides from '../Available Rides'

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('screen').width
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
                    <AvailableRides />

                </View>
                {/* </ScrollView> */}
            </BottomDrawer>
        </View>
    )
}

export default RideOptions

const styles = StyleSheet.create({
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
