import { StyleSheet } from 'react-native'
import themeColors from '../../Assets/Colors/theme.colors'

const styles = StyleSheet.create({
    SafteyMessageContainer: {
        backgroundColor: themeColors.Saftey_Blue,
        padding: 15,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    SafteyTitle: {
        color: themeColors.White,
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 10
    },
    SafteyMessage: {
        color: themeColors.White,
        fontSize: 16,
        opacity: .7,
        marginBottom: 10
    },
    SaftyButton: {

    },
    SaftyButtonText: {
        color: themeColors.White,
        fontSize: 16,
    }
})

export default styles
