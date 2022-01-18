import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import themeColors from '../../Assets/Colors/theme.colors'
import AutocompletePlace from '../../Components/AutocompletePlace'
import RideBookFor from '../../Components/RideBookFor'
import SavedPlaces from '../../Components/SavedPlaces'

const index = () => {
    return (
        <View style={{ backgroundColor: themeColors.White, height: '100%' }}>
            <View style={styles.MainContainer}>
                <RideBookFor />
                <AutocompletePlace />
            </View>
            <SavedPlaces />
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    MainContainer: {
        backgroundColor: themeColors.White,
        paddingBottom: 110,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
})
