import {
    StyleSheet,
    TextInput,
    Image,
    View,
    ScrollView,
    Text,
    TouchableOpacity,
    ScrollViewComponent
} from 'react-native';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
    const [searchText, setSearchText] = useState('What can we help you find?');

    return (
        <View style={styles.container}>
            <ScrollView>
                <Header/>
                <View style={styles.searchRow}>
                    <TextInput
                        style={styles.searchInput}
                        onChangeText={text => setSearchText(text)}
                        value={searchText}
                    />
                </View>
                <View>
                    <Image
                        style={adImage1}
                        source={require('../assets/shutterstock_116403520.jpg')}
                    />
                    <View style={styles.ad1}> 
                        <Text style={styles.adTitle1}>GET A GRIP</Text>
                        <Text style={styles.adText1}>20% OFF</Text>
                        <Text style={styles.adContent1}>THROUGHOUT THE SEASON</Text>
                    </View>
                </View>
                <View style={styles.adImage2Row}>
                    <Image
                        style={styles.adImage2}
                        source={require('../assets/shutterstock_66.jpg')}
                    />
                    <Image
                        style={styles.adImage2}
                        source={require('../assets/shutterstock_66.jpg')}
                    />
                </View>
                <View>
                    <Text style={styles.adTitle2}>COUPLES RETREAT</Text>
                    <Text style={styles.adText2}>SAVE AN EXTRA 20%</Text>
                    <Text style={styles.adContent2}>WHEN YOU BUY TW0 PAIRS OF BOOTS</Text>
                </View>
                <View style={styles.trailReview}>
                    <Text style={styles.trailReviewTitle}>TRAIL REVIEW</Text>
                    <Image
                        style={styles.trailImage}
                        source={require('../assets/shutterstock_40.jpg')}
                    />
                    <Text style={styles.trailReviewPark1}>ASPHALT</Text>
                    <Text style={styles.trailReviewPark2}>NATIONAL PARK</Text>
                    <TouchableOpacity style={styles.tralButton}>
                        <Text style={styles.trailButtonText}>SEE REVIEW</Text>
                    </TouchableOpacity>
                </View>
                <Footer/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchRow: {
        backgroundColor: '#686868',
        height: 60,
    },
    searchInput: {
        alignSelf: 'center',
        borderWidth: 1,
        width: 350,
        heigth: 40,
        textAlign: 'center',
        marginTop: 10,
        backgroundColor: '#FFFFFF',
        fontFamily: 'OpenSans-LightItalic'
    },
    adImage1: {
        width: 180,
        height: 450
    },
    ad1: {
        backgroundColor: '#FC8A49'
    },
    adTitle1: {
        fontFamily: 'OpenSans-ExtraBold',
        fonSize: 30
    },
    adText1: {
        textAlign: 'center',
        fontFamily: 'OpenSans-ExtraBold',
        fontSize: 30,
        color: '#FFFFFF'
    },
    adContent1: {
        textAlign: 'center',
        fontFamily: 'OpenSans-Regular',
        fontSize: 15,
        color: '#FFFFFF',
        paddingBottom: 20
    },
    adImage2Row: {
        flexDirection: 'row'
    },
    adImage2: {
        width: '50%',
        height: 180,
        resizeMode: 'contain'
    },
    adTitle2: {
        textAlign: 'center',
        fontFamily: 'OpenSans-Bold',
        fontSize: 15,
        color: '#8B8B8B'
    },
    adText2: {
        textAlign: 'center',
        fontFamily: 'OpenSans-ExtraBold',
        fontSize: 15,
        color: '#FC8A49'
    },
    adContent2: {
        textAlign: 'center',
        fontFamily: 'OpenSans-Regular',
        fontSize: 10,
        color: '#000000',
        paddingBottom: 20
    },
    trailReview: {
        backgroundColor: '#000000',
        alignItems: 'center',
        paddingBottom: 30
    },
    trailReviewTitle: {
        fontFamily: 'OpenSans-LightItalic',
        fontSize: 30,
        color: '#FFFFFF',
    },
    trailImage: {
        width: '100%',
        height: 220,
    },
    trailReviewPark1: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 45,
        color: '#FFFFFF',
    },
    trailReviewPark1: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 20,
        color: '#FFFFFF',
        paddingBottom: 10
    },
    trailButton: {
        width: '50%',
        backgroundColor: '#FC8A49',
        alignItems: 'center',
        borderRadius: 5
    },
    trailButtonText: {
        fontSize: 25,
        color: '#FFFFFF'
    }
});

export default Home;