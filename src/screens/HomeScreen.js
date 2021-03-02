import React from 'react';
import { Button } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text, Image, StyleSheet } from 'react-native';
import MainHeader from "../components/MainHeader";

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaProvider>
            <MainHeader navigation={navigation} headerTitle={'Homepage'}/>
            <View style={styles.backgroundViewStyle}>
                <View style={styles.titleViewStyle}>
                    <Text style={styles.titleStyle}>Welcome to ThermoSTAT</Text>
                </View>
                <View style={styles.logoViewStyling}>
                    <Image
                        style={styles.logoStyling}
                        source={require('../../assets/ThermoSTAT-MiniLogo.png')}
                    />
                </View>
                <View style={styles.titleViewStyle}>
                    <Text style={styles.titleStyle}>"Temperature accountability on the go!"</Text>
                </View>
                <Button
                    type="outline"
                    onPress={() => navigation.navigate('Certify')}
                    title="Let's Get Started!"
                />
            </View>
        </SafeAreaProvider>
    )
};

const styles = StyleSheet.create({
    backgroundViewStyle: {
        backgroundColor: '#e8e7ef',
        flex: 1,
        borderColor: '#c54145',
        borderWidth: 3,
        alignItems: 'center'
    },
    titleStyle: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: "bold",

    },
    titleViewStyle: {
      padding: 20,
    },
    logoStyling: {
        justifyContent: 'center',
        width: 100,
        height: 100
    },
    logoViewStyling: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default HomeScreen;
