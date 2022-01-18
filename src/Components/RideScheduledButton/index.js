import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import themeColors from '../../Assets/Colors/theme.colors'

const RideScheduledButton = () => {
    return (
        <Pressable style={styles.ButtonContainer}>
            <Image style={styles.ScheduledButton} source={require('../../Assets/Images/car.png')} />
        </Pressable>
    )
}

export default RideScheduledButton

const styles = StyleSheet.create({
    ButtonContainer: {
        backgroundColor: themeColors.Gray,
        padding: 15
    },
    ScheduledButton: {
        width: 29,
        height: 29,
        resizeMode: 'contain'
    }
})
