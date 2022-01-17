import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import themeColors from '../../Assets/Colors/theme.colors'

const HomeMapScreen = () => {
    return (
        <View style={styles.Container}>
            <Text style={styles.MapText}>Around You</Text>
            <View style={styles.MapContainer}></View>
        </View>
    )
}

export default HomeMapScreen

const styles = StyleSheet.create({
    MapText: {
        fontSize: 20,
        fontWeight: '800',
        color: themeColors.Black,
        marginBottom: 15
    },
    MapContainer: {
        backgroundColor: themeColors.Black,
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        borderRadius: 10,
        marginBottom: 10
    }
})
