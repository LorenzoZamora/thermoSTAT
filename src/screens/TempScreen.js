import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import MainHeader from "../components/MainHeader";
import { SafeAreaProvider } from "react-native-safe-area-context";

const TempScreen = ({ navigation }) => {
    return (
        <SafeAreaProvider>
            <MainHeader navigation={navigation} headerTitle={'Temperature Screening'}/>
            <Text>TEMP SCREEN</Text>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({});

export default TempScreen;
