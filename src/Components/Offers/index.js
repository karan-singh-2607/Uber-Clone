import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import themeColors from '../../Assets/Colors/theme.colors'
import PromotionOffer from '../../Assets/Images/tag.png'
const Offers = () => {
    return (
        <View style={styles.OfferContainer}>
            <View>
                <Text style={styles.OfferTitle}>30% cashback upto 60</Text>
                <View style={styles.OfferButton}>
                    <Text style={styles.buttonText}>Learn More</Text>
                </View>
            </View>
            <Image source={PromotionOffer} style={styles.PromotionImage} />

        </View>
    )
}

export default Offers

const styles = StyleSheet.create({
    OfferContainer: {
        backgroundColor: themeColors.Purple,
        padding: 15,
        marginBottom: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 150
    },
    OfferTitle: {
        color: themeColors.White,
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
    },
    buttonText: {
        color: themeColors.White,
        opacity: .7,
        fontSize: 16,
        fontWeight: '500'
    },
    PromotionImage: {
        width: 120,
        height: 120,
        position: 'absolute',
        right: 0
    }
})
