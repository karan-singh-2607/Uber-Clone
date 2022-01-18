import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Toggle from 'react-native-toggle-element';
import themeColors from '../../Assets/Colors/theme.colors';



const RideOptionType = () => {
    const [toggleValue, setToggleValue] = useState(false);
    return (
        <View style={styles.SwitchProfile}>
            <View style={styles.ProfileToggle}>
                <Toggle
                    value={toggleValue}
                    onPress={(newState) => setToggleValue(newState)}

                    leftComponent={
                        <MaterialCommunityIcons name="account" size={20} style={{ color: toggleValue ? themeColors.Black : themeColors.White }} />

                    }
                    rightComponent={
                        <MaterialCommunityIcons name="briefcase" size={20} style={{ color: toggleValue ? themeColors.White : themeColors.Black }} />
                    }
                    trackBar={{
                        width: 75,
                        height: 38,
                        activeBackgroundColor: themeColors.Gray,
                        inActiveBackgroundColor: themeColors.Gray
                    }}
                    thumbButton={{
                        activeBackgroundColor: themeColors.Saftey_Blue,
                        inActiveBackgroundColor: themeColors.Black,
                        width: 40,
                        height: 40
                    }}

                />
                {toggleValue ?
                    <View style={styles.ProfileMode}>
                        <Text style={styles.ProfileType}>Business</Text>
                        <Text style={styles.PaymentMode}>Cash</Text>
                    </View>
                    :
                    <View style={styles.ProfileMode}>
                        <Text style={styles.ProfileType}>Personal</Text>
                        <Text style={styles.PaymentMode}>Cash</Text>
                    </View>
                }
            </View>
            <Entypo name='chevron-right' />
        </View>
    )
}

export default RideOptionType

const styles = StyleSheet.create({
    SwitchProfile: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20
    },
    ProfileToggle: {
        flexDirection: 'row'
    },
    ProfileMode: {
        marginLeft: 10,
    },
    ProfileType: {
        fontSize: 14,
        fontWeight: '600',
        color: themeColors.Black
    },
    PaymentMode: {
        fontSize: 14,
        color: themeColors.Black,
        opacity: .4
    }
})
