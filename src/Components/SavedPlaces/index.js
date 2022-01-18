import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import themeColors from '../../Assets/Colors/theme.colors'
const SavedPlaces = () => {
    return (
        <View style={styles.AddressPick}>
            <View style={styles.LastDestination}>
                <View style={styles.LocationPin}>
                    <Entypo name='star' size={25} color={themeColors.White} />
                </View>
                <View style={styles.LocationContainer}>
                    <View style={styles.LocationDetails}>
                        <Text style={styles.Address}>Chose a saved place</Text>
                    </View>
                    <Entypo name='chevron-right' size={22} color={'rgba(0,0,0,0.4)'} />
                </View>
            </View>
        </View>
    )
}

export default SavedPlaces

const styles = StyleSheet.create({
    AddressPick: {
        marginBottom: 15,
        position: 'absolute',
        zIndex: 10,
        backgroundColor: themeColors.White,
        width: '100%',
        top: 171,
        // borderWidth: 1
    },
    LastDestination: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10
    },
    LocationPin: {
        padding: 10,
        backgroundColor: themeColors.Gray,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    LocationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        marginLeft: 15,
        alignItems: 'center',
    },
    Address: {
        fontSize: 18,
        fontWeight: '400',
        color: themeColors.Black,
        opacity: 0.6
    },
    Locality: {
        fontSize: 16,
        fontWeight: '600',
        color: themeColors.Black,
        opacity: .4,
    }
})
