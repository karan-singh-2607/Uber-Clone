import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import RadialGradient from 'react-native-radial-gradient';
import themeColors from '../../Assets/Colors/theme.colors';

const UserNavigation = () => {
    return (
        <View style={styles.NavContainer}>
            <View style={styles.UserNavContainer}>
                <FontAwesome5 name='user-alt' size={25} />
            </View>
        </View>
    )
}

export default UserNavigation

const styles = StyleSheet.create({
    NavContainer: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        marginBottom: 10,
    },
    UserNavContainer: {
        padding: 10,
        backgroundColor: themeColors.Gray,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: themeColors.Gray,

    }
})
