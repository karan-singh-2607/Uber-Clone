import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import themeColors from '../../Assets/Colors/theme.colors'
const DestinationSearch = () => {
    return (
        <View style={styles.AddressPick}>
            <View style={styles.InputContainer}>
                <Text style={styles.InputText}>Where to?</Text>
                <View style={styles.TimeInput}>
                    <AntDesign name='clockcircle' size={20} color={themeColors.Black} />
                    <Text style={styles.TimeText}>Now</Text>
                    <Entypo name='chevron-down' size={20} color={themeColors.Black} />
                </View>
            </View>
            <View style={styles.LastDestination}>
                <View style={styles.LocationPin}>
                    <Ionicons name='location-sharp' size={25} color={themeColors.Black} />
                </View>
                <View style={styles.LocationContainer}>
                    <View style={styles.LocationDetails}>
                        <Text style={styles.Address}>Pawanpuri</Text>
                        <Text style={styles.Locality}>Sardar Patel Colony</Text>
                    </View>
                    <Entypo name='chevron-right' size={22} color={'rgba(0,0,0,0.4)'} />
                </View>
            </View>
            <View style={styles.LastDestination}>
                <View style={styles.LocationPin}>
                    <Entypo name='star' size={25} color={themeColors.Black} />
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

export default DestinationSearch

const styles = StyleSheet.create({
    AddressPick: {
        marginBottom: 15
    },
    InputContainer: {
        backgroundColor: themeColors.Gray,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    InputText: {
        fontSize: 20,
        fontWeight: '600',
        color: themeColors.Black,
    },

    TimeInput: {
        flexDirection: 'row',
        backgroundColor: themeColors.White,
        padding: 10,
        borderRadius: 50,
        width: 110,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    TimeText: {
        fontSize: 16,
        fontWeight: '600',
        color: themeColors.Black
    },
    LastDestination: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 20,
    },
    LocationPin: {
        padding: 10,
        backgroundColor: themeColors.Gray,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -20
    },
    LocationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        marginLeft: 15,
        alignItems: 'center',
        borderBottomColor: 'rgba(0,0,0,0.1)',
        borderBottomWidth: 1,
        paddingBottom: 20
    },
    Address: {
        fontSize: 20,
        fontWeight: '800',
        color: themeColors.Black,
        marginBottom: 5
    },
    Locality: {
        fontSize: 16,
        fontWeight: '600',
        color: themeColors.Black,
        opacity: .4,
    }
})
