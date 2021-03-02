import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Icon, ThemeProvider } from 'react-native-elements';

const buttonTheme = {
    Button: {
        raised: true,
        type: "outline",
        color: "#c54145"
    }
};

const YesNoButtons = ({ }) => {
    return (
        <ThemeProvider theme={buttonTheme}>
        <View style={styles.viewButtonStyle}>
            <Button
                onPress={setYesQuestions}
                icon={
                    <Icon
                        type="material-community"
                        name="check-box-outline"
                        color="#0d1347"
                        size={30}
                    />
                }
                iconRight={true}
            />
            <Button
                onPress={setNoQuestions}
                icon={
                    <Icon
                        type="material-community"
                        name="close-box-outline"
                        color="#0d1347"
                        size={30}
                    />
                }
                iconRight={true}
            />
        </View>
        </ThemeProvider>
    );
};

const styles = StyleSheet.create({
    viewButtonStyle: {
        justifyContent: 'space-around',
        backgroundColor: '#d08078',
        borderRadius: 20,
        padding: 5,
        flexDirection: 'row',
        height: 100,
        color: '#0d1347',
        width: 200
    }
});

export default YesNoButtons;
