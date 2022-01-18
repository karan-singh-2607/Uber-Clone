import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import themeColors from '../../Assets/Colors/theme.colors'
const PlaceResult = (data) => {

    console.log('Result==>', data)
    return (
        <View style={styles.ResultCOntainer}>
            <View style={styles.IconContainer}>
                <Ionicons name='location-sharp' size={25} color={themeColors.White} />
            </View>
            <View style={styles.AddressContainer}>
                <Text style={styles.Locality}>{data?.data.structured_formatting.main_text}</Text>
                <Text style={styles.StreetAddress}>{data?.data.structured_formatting.secondary_text}</Text>
            </View>
        </View>
    )
}

export default PlaceResult

const styles = StyleSheet.create({
    ResultCOntainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    IconContainer: {
        backgroundColor: themeColors.Gray,
        padding: 10,
        backgroundColor: themeColors.Gray,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    AddressContainer: {
        marginLeft: 10,
    },
    Locality: {
        fontSize: 14,
        color: themeColors.Black,
        opacity: 0.7,
        fontWeight: '600'
    },
    StreetAddress: {
        fontSize: 14,
        color: themeColors.Black,
        opacity: 0.5,
        fontWeight: '400'
    }
})
