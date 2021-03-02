import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainHeader from "../components/MainHeader";

const CertificationScreen = ({ navigation }) => {
    return (
        <SafeAreaProvider>
            <MainHeader navigation={navigation} headerTitle={'Certification'}/>
            <View>
                <Text style={styles.titleStyle}>I Certify to Answer the Following Questions in Truth</Text>
                <Button
                    onPress={() => navigation.navigate('Question')}
                    title="I certify my answers!"
                />
            </View>
        </SafeAreaProvider>
    )
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 25,
        textAlign: 'center'
    },
});

export default CertificationScreen;
