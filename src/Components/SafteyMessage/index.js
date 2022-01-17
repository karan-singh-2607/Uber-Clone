import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import styles from './styles'
const SafteyMessage = () => {
    return (
        <View style={styles.SafteyMessageContainer}>
            <Text style={styles.SafteyTitle}>Avoid unnecessary travel.</Text>
            <Text style={styles.SafteyMessage}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga consectetur deserunt quae cumque adipisci eos nemo quia eius! Amet nobis quasi quod nam nostrum doloribus sequi voluptatum quo eos incidunt.</Text>
            <View style={styles.SaftyButton}>
                <Text style={styles.SaftyButtonText}>Lern More</Text>
            </View>
        </View>

    )

}

export default SafteyMessage
