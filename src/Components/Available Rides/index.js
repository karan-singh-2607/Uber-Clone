import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import NumberFormat from 'react-number-format'
import themeColors from '../../Assets/Colors/theme.colors'

const AvailableRides = (props) => {
    const VehicleAvailable = props.vehicle
    console.log(VehicleAvailable);
    const VehicleImage = () => {
        if (VehicleAvailable.type == 'UberGo') {
            return require('../../Assets/Images/UberGo.png')
        }
        if (VehicleAvailable.type == 'Sedan Rentals') {
            return require('../../Assets/Images/SedanRentals.png')
        }
        if (VehicleAvailable.type == 'Premier') {
            return require('../../Assets/Images/UberGo.png')
        }
        if (VehicleAvailable.type == 'Moto') {
            return require('../../Assets/Images/Moto.png')
        }
        if (VehicleAvailable.type == 'UberAuto') {
            return require('../../Assets/Images/UberAuto.png')
        }
    }
    return (
        <View >
            <View style={styles.AvailableRideOptions}>
                <Image style={styles.RideVechile} source={VehicleImage()} />
                <View style={styles.RideContainer}>
                    <View style={styles.RideDetails}>
                        <Text style={styles.RideType}>{VehicleAvailable?.type}</Text>
                        <Text style={styles.RideTime}>9:31pm - 4 min away</Text>
                    </View>
                    <View style={styles.RideCoast}>
                        <NumberFormat
                            value={VehicleAvailable.price}
                            prefix="₹"
                            decimalSeparator="."
                            fixedDecimalScale={true}
                            decimalScale={2}
                            displayType="text"
                            type="Text"
                            thousandSeparator={true}
                            renderText={formattedValue => <Text style={styles.RideCoast}
                            >{formattedValue}</Text>}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default AvailableRides

const styles = StyleSheet.create({

    AvailableRideOptions: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    RideVechile: {
        width: 85,
        height: 85,
        resizeMode: 'contain'
    },
    RideContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        alignItems: 'center',
        marginLeft: 10,
    },
    RideType: {
        fontSize: 18,
        fontWeight: 'bold',
        color: themeColors.Black,
        marginBottom: 3
    },
    RideTime: {
        fontSize: 14,
        fontWeight: '400',
        color: themeColors.Saftey_Blue
    },
    RideCoast: {
        fontSize: 18,
        fontWeight: 'bold',
        color: themeColors.Black
    }
})
