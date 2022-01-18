import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import UserNavigation from '../UserNavigation'
import Entypo from 'react-native-vector-icons/Entypo'
import themeColors from '../../Assets/Colors/theme.colors'
const RideBookFor = () => {
    return (
        <View style={styles.BookFor}>
            <UserNavigation iconSize={20} Space={8} />
            <View style={styles.ProfileSelector}>
                <Text style={styles.ProfileText}>For Me</Text>
                <Entypo name='chevron-down' size={20} color={themeColors.Black} />
            </View>
        </View>

    )
}

export default RideBookFor

const styles = StyleSheet.create({
    BookFor: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
    },
    ProfileSelector: {
        flexDirection: 'row',
        marginLeft: 15,
        alignSelf: 'center',
    },
    ProfileText: {
        fontSize: 16,
        fontWeight: '500',
        color: themeColors.Black,
        marginHorizontal: 5
    }
})
