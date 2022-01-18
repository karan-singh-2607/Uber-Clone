import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import themeColors from '../../Assets/Colors/theme.colors'

const RideBookButton = () => {
    const confirmRide = () => {
        console.warn('Chosed');
    }
    return (
        <View style={styles.BtnContainer}>
            <Pressable onPress={confirmRide} style={styles.ConfirmRide}>
                <Text style={styles.RideButton} >Confirm Ride</Text>
            </Pressable>
        </View>
    )
}

export default RideBookButton

const styles = StyleSheet.create({
    BtnContainer: {
        width: '100%',
        flex: 1,
        marginRight: 10
    },
    ConfirmRide: {
        backgroundColor: themeColors.Black,
        padding: 20,
    },
    RideButton: {
        color: themeColors.White,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600'
    }
})
