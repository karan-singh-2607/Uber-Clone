import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import themeColors from '../../Assets/Colors/theme.colors'
const PlaceResult = ({ data }) => {
    // console.log('Result==>', data)
    return (
        <View style={styles.ResultCOntainer}>
            <View style={data?.description == 'Home' ? styles.SavedAddress : data?.description == 'Work' ? styles.SavedAddress : styles.IconContainer}>
                {data?.description == 'Home' ? <Entypo name='home' size={25} color={themeColors.White} /> : data?.description == 'Work' ? <MaterialCommunityIcons name='briefcase' size={25} color={themeColors.White} /> : <Ionicons name='location-sharp' size={25} color={themeColors.White} />
                }

            </View>
            <View style={styles.AddressContainer}>
                <Text style={styles.Locality}>{data?.description || data?.name || data?.structured_formatting?.main_text}</Text>
                <Text style={styles.StreetAddress}>{data?.description || data?.vicinity || data?.structured_formatting?.secondary_text}</Text>
            </View>
        </View>
    )
}

export default PlaceResult

const styles = StyleSheet.create({
    ResultCOntainer: {
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 15,
        backgroundColor: themeColors.White,
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderBottomWidth: 1,
        borderBottomColor: themeColors.Gray
    },
    IconContainer: {
        backgroundColor: themeColors.Gray,
        padding: 10,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    SavedAddress: {
        backgroundColor: themeColors.Saftey_Blue,
        padding: 10,
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
