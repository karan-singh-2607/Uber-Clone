import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import UserNavigation from '../../Components/UserNavigation'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import themeColors from '../../Assets/Colors/theme.colors'
const UserProfile = () => {
    return (
        <View>
            <View style={styles.ProfileContainer}>
                <View style={styles.UserDetails}>
                    <View style={styles.NameProfile}>
                        <MaterialIcons name='close' size={35} color={themeColors.Black} />
                        <Text style={styles.UserName}>Karan Singh</Text>
                        <View style={styles.Ratings}>
                            <Entypo name='star' size={15} color={themeColors.Black} />
                            <Text style={styles.Number}>4.7</Text>
                        </View>
                    </View>
                    <UserNavigation iconSize={38} Space={15} />
                </View>

                <View style={styles.UtilitiesContainer}>

                    <View style={styles.ToolsContainer}>
                        <MaterialCommunityIcons name="lifebuoy" size={30} color={themeColors.Black} />
                        <Text style={styles.UtilitiesText}>Help</Text>
                    </View>
                    <View style={styles.ToolsContainer}>
                        <MaterialCommunityIcons name='wallet' size={30} color={themeColors.Black} />
                        <Text style={styles.UtilitiesText}>Wallet</Text>
                    </View>
                    <View style={styles.ToolsContainer}>
                        <AntDesign name='clockcircle' size={30} color={themeColors.Black} />
                        <Text style={styles.UtilitiesText}>Trips</Text>
                    </View>

                </View>
                <View style={styles.WalletContainer}>
                    <Text style={styles.WalletTypes}>Uber Cash</Text>
                    <Text style={styles.Amount}>0.00</Text>
                </View>
            </View>
            <View style={styles.ActionCenter}>
                <View style={styles.ActionItem}>
                    <Entypo name='mail' size={18} color={themeColors.Black} />
                    <Text style={styles.ActionName}>Messagages</Text>
                </View>
            </View>
            <View style={styles.AppVersion}>
                <Text style={styles.VersionNumber}>v1.0.0.0</Text>
            </View>
        </View>
    )
}

export default UserProfile

const styles = StyleSheet.create({
    ProfileContainer: {
        backgroundColor: themeColors.White,
        flexDirection: 'column',
        padding: 15
    },
    UserDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    NameProfile: {

    },
    UserName: {
        color: themeColors.Black,
        fontSize: 35,
        fontWeight: '700',
        marginVertical: 15
    },
    Ratings: {
        backgroundColor: themeColors.Gray,
        flexDirection: 'row',
        paddingVertical: 5,
        paddingHorizontal: 8,
        borderRadius: 50,
        width: 70,
        marginTop: 25,
        marginBottom: 5,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    Number: {
        color: themeColors.Black,
        marginRight: 10,
        fontWeight: '500'
    },
    UtilitiesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        alignItems: 'center',

    },
    UtilitiesText: {
        color: themeColors.Black,
        marginTop: 8,
        fontSize: 16,
        fontWeight: '600'
    },
    ToolsContainer: {
        backgroundColor: themeColors.Gray,
        borderRadius: 10,
        paddingVertical: 18,
        display: 'flex',
        alignItems: 'center',
        width: 110
    },
    WalletContainer: {
        backgroundColor: themeColors.Gray,
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    WalletTypes: {
        color: themeColors.Black,
        fontSize: 20,
        fontWeight: '600'
    },
    Amount: {
        color: themeColors.Black,
        fontSize: 18,
        fontWeight: '600',
        opacity: 0.7
    },
    ActionCenter: {
        backgroundColor: themeColors.White,
        height: '100%',
        marginTop: 10
    },
    ActionItem: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    ActionName: {
        color: themeColors.Black,
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 15,
    },
    AppVersion: {
        position: 'absolute',
        top: Dimensions.get('screen').height - 150,
        left: 15,
        zIndex: 16
    },
    VersionNumber: {
        color: themeColors.Black,
        fontWeight: '600',
        fontSize: 16,
        opacity: 0.4
    }
})
