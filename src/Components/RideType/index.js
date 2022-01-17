import React from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'
import themeColors from '../../Assets/Colors/theme.colors'

const RideType = () => {
    return (
        <View style={styles.RideOptions}>
            <View style={styles.RideContainer}>
                <Image source={{ uri: 'https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/v1.1/UberX_v1.png' }} style={styles.ImageCongtainer} />
                <Text style={styles.RideTxt}>Ride</Text>
            </View>
            <View style={styles.RideContainer}>
                <Image source={{ uri: 'https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/v1.1/Hire_Go_v1.png' }} style={styles.ImageCongtainer} />
                <Text style={styles.RideTxt}>Rental</Text>
            </View>
            <View style={styles.RideContainer}>
                <Image source={{ uri: 'https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/v1.1/UberXL_v1.png' }} style={styles.ImageCongtainer} />
                <Text style={styles.RideTxt}>Intercity</Text>
            </View>
        </View>
    )
}

export default RideType

const styles = StyleSheet.create({
    RideOptions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    RideContainer: {
        alignItems: 'center',
        backgroundColor: themeColors.Gray,
        borderRadius: 10,
        paddingBottom: 10,
        paddingHorizontal: 13
    },
    ImageCongtainer: {
        width: 85,
        height: 85
    },
    RideTxt: {
        color: themeColors.Black,
        fontSize: 16,
        fontWeight: '600'
    }
})
