import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import themeColors from '../../Assets/Colors/theme.colors'
const GOOGLE_API_KEY = 'AIzaSyDh7W90w22SlO5YlSFtxK7piIbXZAj-Krs'
const WhereToScreen = () => {
    const [SourceAddress, setSourceAddress] = useState(null);
    const [DestinationAddress, setDestinationAddress] = useState(null)

    useEffect(() => {
        console.log('useeffect called');
        if (SourceAddress && DestinationAddress) {
            console.log('redirect')
        }
    }, [SourceAddress, DestinationAddress])
    return (
        <View style={styles.SearchContainer}>
            <GooglePlacesAutocomplete
                placeholder='Where to?'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    setSourceAddress({ data, details })
                    console.log(data, details);
                }}
                fetchDetails
                styles={{ textInput: styles.InputContainer }}
                onFail={(error) => console.error(error)}
                query={{
                    key: GOOGLE_API_KEY,
                    language: 'en',
                }}
            />
            <GooglePlacesAutocomplete
                placeholder='Where to?'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    setDestinationAddress({ data, details })
                    console.log(data, details);
                }}
                fetchDetails
                styles={{ textInput: styles.InputContainer }}
                onFail={(error) => console.error(error)}
                query={{
                    key: GOOGLE_API_KEY,
                    language: 'en',
                }}
            />
        </View>
    )
}

export default WhereToScreen

const styles = StyleSheet.create({
    SearchContainer: {
        padding: 15,
        height: '100%',
    },
    InputContainer: {
        backgroundColor: themeColors.Gray,
        padding: 10,
        marginBottom: 10,
        borderRadius: 0
    }
})
