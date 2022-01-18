import React from 'react'
import { FlatList, Image } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import AvailableVehicle from '../../Assets/Data/cars'
const MapContainer = () => {
    const VehicleImage = (type) => {
        if (type == 'UberGo') {
            return require('../../Assets/Images/UberGo_Top.png')
        }
        if (type == 'Sedan Rentals') {
            return require('../../Assets/Images/SedanRentals_Top.png')
        }
        if (type == 'Premier') {
            return require('../../Assets/Images/Premier_Top.png')
        }
        if (type == 'Moto') {
            return require('../../Assets/Images/UberMoto_Top.png')
        }
        if (type == 'UberAuto') {
            return require('../../Assets/Images/UberAuto_Top.png')
        }
    }

    return (
        <MapView
            style={{ width: '100%', height: '100%' }}
            initialRegion={{
                latitude: 28.450627,
                longitude: -16.263045,
                latitudeDelta: 0.0022,
                longitudeDelta: 0.0121,
            }}
        >
            {AvailableVehicle.map((data) => (

                <Marker
                    key={data.id}
                    coordinate={{ latitude: data.latitude, longitude: data.longitude }}
                >
                    <Image style={{
                        width: 60, height: 60, resizeMode: 'contain', transform: [{
                            rotate: `${data.heading}deg`
                        }]
                    }} source={VehicleImage(data.type)} />
                </Marker>
            ))}


        </MapView>

    )
}

export default MapContainer