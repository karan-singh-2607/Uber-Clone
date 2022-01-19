import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import RadialGradient from 'react-native-radial-gradient';
import themeColors from '../../Assets/Colors/theme.colors';

const UserNavigation = (props) => {
    const Values = props
    // console.log(Values)
    return (
        <View style={styles(Values).NavContainer}>
            <View style={styles(Values).UserNavContainer}>
                <FontAwesome5 name='user-alt' size={Values.iconSize} color={'rgba(0,0,0,0.3)'} />
            </View>
        </View>
    )
}

export default UserNavigation

export const styles = (Values) => StyleSheet.create({
    NavContainer: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    UserNavContainer: {
        padding: Values.Space,
        backgroundColor: themeColors.Gray,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: themeColors.Gray,

    }
})
