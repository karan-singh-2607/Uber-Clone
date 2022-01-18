import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import themeColors from '../../Assets/Colors/theme.colors'
import RideBookButton from '../RideBookButton'
import RideOptionType from '../RideOptionType'
import RideScheduledButton from '../RideScheduledButton'

const RideConfirmNavigation = () => {
    return (
        <View style={styles.NavigationContainer}>
            <RideOptionType />
            <View style={styles.ButtonContainer}>
                <RideBookButton />
                <RideScheduledButton />
            </View>
        </View>
    )
}

export default RideConfirmNavigation

const styles = StyleSheet.create({
    NavigationContainer: {
        position: 'absolute',
        backgroundColor: themeColors.White,
        width: '100%',
        alignSelf: 'center',
        zIndex: 9,
        color: themeColors.Black,
        flexDirection: 'column',
        bottom: 0,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    ButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        alignItems: 'stretch'
    }
})
