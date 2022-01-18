import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import themeColors from '../../Assets/Colors/theme.colors'

const AvailableRides = () => {
    return (
        <View >
            <View style={styles.InfoNote}>
                <Text style={styles.NoteTxt}>Chose a ride or, swipe up for more</Text>
            </View>
            <View style={styles.AvailableRideOptions}>

            </View>
        </View>
    )
}

export default AvailableRides

const styles = StyleSheet.create({
    InfoNote: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginTop: 20
    },
    NoteTxt: {
        color: themeColors.Black,
        fontSize: 14,
        fontWeight: '400',
    }
})
