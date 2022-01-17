import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import themeColors from '../../Assets/Colors/theme.colors'

const WhereToScreen = () => {
    const [FromAddress, setFromAddress] = useState('');
    const [DestinationAddress, setDestinationAddress] = useState('')
    return (
        <View style={styles.SearchContainer}>
            <TextInput placeholder='From' value={FromAddress} onChangeText={setFromAddress} style={styles.InputContainer} />
            <TextInput placeholder='Where to?' value={DestinationAddress} onChangeText={setDestinationAddress} style={styles.InputContainer} />
        </View>
    )
}

export default WhereToScreen

const styles = StyleSheet.create({
    SearchContainer: {
        padding: 15
    },
    InputContainer: {
        backgroundColor: themeColors.Gray,
        padding: 10,
        marginBottom: 10
    }
})
