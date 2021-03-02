import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainHeader from "../components/MainHeader";
import { Icon, Button } from "react-native-elements";

const CertificationScreen = ({ navigation }) => {
    return (
        <SafeAreaProvider>
            <MainHeader navigation={navigation} headerTitle={'Certification'}/>
            <View style={styles.backgroundViewStyle}>
                <View style={styles.descViewStyle}>
                    <Text style={styles.descTextStyle}>
                        There will be a series of 13 questions, and a temperature check
                        using the ThermoSTAT Thermometer. After your responses, you'll either
                        be good to go, or given more info on possible steps to take.
                    </Text>
                </View>
                <View style={{paddingBottom: 135}}/>
                <Button
                    type="outline"
                    raised={true}
                    onPress={() => navigation.navigate('Question')}
                    title="I certify my responses!"
                    icon={
                        <Icon
                            type="font-awesome-5"
                            name="smile-beam"
                            color="#0d1347"
                            size={30}
                        />
                    }
                    iconRight={true}
                    titleStyle={styles.certifiedButtonStyle}
                    containerStyle={styles.certifiedViewStyle}
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
    descViewStyle: {
        backgroundColor: '#eeb9ba',
        borderRadius: 10,
        borderColor: '#c54145',
        padding: 10
    },
    descTextStyle: {
        fontSize: 25,
        textAlign: 'center',
        width: 325
    },
    certifiedButtonStyle: {
        color: '#0d1347',
        width: 200
    },
    certifiedViewStyle: {
        backgroundColor: 'white',
        borderColor: '#c54145'
    },
});

export default CertificationScreen;
