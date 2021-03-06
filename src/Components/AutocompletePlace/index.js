import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Keys from '../../Assets/Data/Keys/Google_API'
import themeColors from '../../Assets/Colors/theme.colors'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import PlaceResult from './PlaceResult';
const GOOGLE_API_KEY = Keys.GOOGLE_API_KEY

const AutocompletePlace = () => {
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
            <View style={styles.OriginStop} />
            <GooglePlacesAutocomplete
                placeholder='Where to?'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    setSourceAddress({ data, details })
                    // console.log(data, details);
                }}
                fetchDetails
                enablePoweredByContainer={false}
                styles={{
                    textInput: styles.InputContainer,
                    container: {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                    },
                    listView: {
                        position: 'absolute',
                        top: 110,
                        zIndex: 1
                    },

                }}
                textInputProps={{ placeholderTextColor: themeColors.Black }}
                onFail={(error) => console.error(error)}
                query={{
                    key: GOOGLE_API_KEY,
                    language: 'en',
                }}
                renderRow={(data) => <PlaceResult data={data} />}
            />
            <View style={styles.MatchLine} />
            <View style={styles.DestinationStop} />
            <GooglePlacesAutocomplete
                placeholder='Where to?'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    setDestinationAddress({ data, details })
                    // console.log(data, details);
                }}
                fetchDetails
                enablePoweredByContainer={false}
                styles={{
                    textInput: styles.InputContainer,
                    container: {
                        position: 'absolute',
                        top: 55,
                        left: 0,
                        right: 0,
                        alignSelf: 'center'
                    },
                    listView: {
                        position: 'absolute',
                        top: 55,
                        zIndex: 1
                    }
                }}
                textInputProps={{
                    placeholderTextColor: themeColors.Black,

                }}
                onFail={(error) => console.error(error)}
                query={{
                    key: GOOGLE_API_KEY,
                    language: 'en',
                }}
                renderRow={(data) => <PlaceResult data={data} />}
            />
            <MaterialCommunityIcons name='plus-thick' size={30} color={'rgba(0,0,0,0.5)'} style={styles.AddStop} />
        </View>
    )
}

export default AutocompletePlace

const styles = StyleSheet.create({
    SearchContainer: {
        width: '100%',
    },
    OriginStop: {
        backgroundColor: themeColors.Black,
        width: 8,
        height: 8,
        borderRadius: 4,
        position: 'absolute',
        top: 18,
        marginLeft: 14
    },
    InputContainer: {
        backgroundColor: themeColors.Gray,
        marginBottom: 10,
        borderRadius: 0,
        color: themeColors.Black,
        fontWeight: '600',
        marginHorizontal: 40
    },
    MatchLine: {
        borderLeftWidth: 1,
        height: 51,
        position: 'absolute',
        marginLeft: 18,
        top: 24
    },
    DestinationStop: {
        backgroundColor: themeColors.Black,
        width: 8,
        height: 8,
        position: 'absolute',
        top: 72,
        marginLeft: 14
    },
    AddStop: {
        position: 'absolute',
        right: 0,
        top: 65,
        paddingRight: 5
    }
})
