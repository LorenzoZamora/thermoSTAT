import React, { useState } from 'react';
import { Header, Icon, Text, Overlay } from 'react-native-elements';
import {StyleSheet} from "react-native";

const MainHeader = ({ navigation, headerTitle }) => {
    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    return (
        <Header
            shadowColor="transparent"
            backgroundColor="#0d1347"
            leftComponent={
                <Icon
                    type="material-community"
                    name="home-circle"
                    color="#e8e7ef"
                    onPress={() => navigation.navigate('Home')}
                    underlayColor={'#e8e7ef'}
                    size={30}
                />
            }
            centerComponent={{text: <Text style={styles.centerTextStyling}>{headerTitle}</Text>}}
            rightComponent={
                <Icon
                    type="font-awesome"
                    name="bluetooth"
                    color="#e8e7ef"
                    onPress={() => navigation.navigate('Home')}
                    underlayColor={'#e8e7ef'}
                    size={30}
                />
            }
        />
    );
};

const styles = StyleSheet.create({
    centerTextStyling: {
        color: '#e8e7ef',
        fontSize: 25
    }
});

export default MainHeader;
