import React from 'react';
import {Button, Icon} from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text, Image, StyleSheet } from 'react-native';
import MainHeader from "../components/MainHeader";

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaProvider>
            <MainHeader navigation={navigation} headerTitle={'Homepage'}/>
            <View style={styles.backgroundViewStyle}>
                <View style={styles.titleViewStyle}>
                    <Text style={styles.welcomeMessageStyle}>Welcome to the ThermoSTAT App</Text>
                </View>
                <View style={styles.logoViewStyling}>
                    <Image
                        style={styles.logoStyling}
                        source={require('../../assets/ThermoSTAT-MiniLogo.png')}
                    />
                </View>
                <View style={styles.mottoViewStyle}>
                    <Text style={styles.mottoStyle}>"Temperature accountability on the go!"</Text>
                </View>
                <Button
                    type="outline"
                    raised={true}
                    onPress={() => navigation.navigate('Certify')}
                    title="Let's get Started!  "
                    icon={
                        <Icon
                            type="material-community"
                            name="arrow-right-box"
                            color="#0d1347"
                            size={30}
                        />
                    }
                    iconRight={true}
                    titleStyle={styles.getStartedButtonStyle}
                    containerStyle={styles.getStartedViewStyle}
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
        borderWidth: 5,
        alignItems: 'center',
        borderBottomRightRadius: 47,
        borderBottomLeftRadius: 47,
        paddingVertical: '25%'
    },
    welcomeMessageStyle: {
        fontSize: 23,
        textAlign: 'center',
        fontWeight: "bold",
        width: 400,
        paddingBottom: 20,
        textDecorationLine: 'underline'
    },
    mottoStyle: {
        fontSize: 19,
        textAlign: 'center',
        fontWeight: "bold",
        fontStyle: 'italic',
        width: 400,
        paddingTop: 20
    },
    titleViewStyle: {
        padding: 25,
    },
    mottoViewStyle: {
        padding: 25,
        paddingBottom: 100,
    },
    getStartedButtonStyle: {
        color: '#0d1347',
        width: 200
    },
    getStartedViewStyle: {
        backgroundColor: 'white',
        borderColor: '#c54145'
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
