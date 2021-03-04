import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, Icon, ThemeProvider } from 'react-native-elements';
import Question from "../components/Question";
import MainHeader from "../components/MainHeader";
import { SafeAreaProvider } from "react-native-safe-area-context";

const theme = {
    Button: {
        raised: true,
        type: "outline",
        buttonStyle: {
            color: "white",
            width: 75,
            height: 65
        }
    }
};

const QuestionScreen = ({ navigation }) => {
    const [question, setQuestion] = useState(0);
    const [yes, setYes] = useState(0);
    const [no, setNo] = useState(0);

    const setYesQuestions = () => {
        setQuestion(question+1);
        setYes(yes+1);
    }

    const setNoQuestions = () => {
        setQuestion(question+1);
        setNo(no+1);
    }

    useEffect(() => {
        if ((yes > 0) && (question === 12)) {
            navigation.navigate('Temperature', {status: 0, temperature: 100.5});
        } else if (question === 12) {
            navigation.navigate('Temperature', {status: 1, temperature: 100.5});
        }
    });

    return (
        <SafeAreaProvider>
            <MainHeader navigation={navigation} headerTitle={'Symptom Check'}/>
            <View style={styles.backgroundViewStyle}>
                { question < 10
                    ? <Text style={styles.mainQuestionStyle}>Have you had:</Text>
                    : null
                }

                <ThemeProvider theme={theme}>
                { question === 0
                    ? <Text>
                        <View style={styles.questionViewStyle}>
                            <Question question="a new cough?"/>
                            <View style={{paddingBottom: 65}}/>
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
                        </View>
                    </Text>
                    : null
                }

                { question === 1
                    ? <Text>
                        <View style={styles.questionViewStyle}>
                            <Question question="shortness of breath?"/>
                            <View style={{paddingBottom: 65}}/>
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
                        </View>
                    </Text>
                    : null
                }

                { question === 2
                    ? <Text>
                        <View style={styles.questionViewStyle}>
                            <Question question="loss of taste or smell?"/>
                            <View style={{paddingBottom: 65}}/>
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
                        </View>
                    </Text>
                    : null
                }

                { question === 3
                    ? <Text>
                        <View style={styles.questionViewStyle}>
                            <Question question="a sore throat?"/>
                            <View style={{paddingBottom: 65}}/>
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
                        </View>
                    </Text>
                    : null
                }

                { question === 4
                    ? <Text>
                        <View style={styles.questionViewStyle}>
                            <Question question="non-allergy related congesetion?"/>
                            <View style={{paddingBottom: 65}}/>
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
                        </View>
                    </Text>
                    : null
                }

                { question === 5
                    ? <Text>
                        <View style={styles.questionViewStyle}>
                            <Question question="unexplained fatigue?"/>
                            <View style={{paddingBottom: 65}}/>
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
                        </View>
                    </Text>
                    : null
                }

                { question === 6
                    ? <Text>
                        <View style={styles.questionViewStyle}>
                            <Question question="muscle or body aches?"/>
                            <View style={{paddingBottom: 65}}/>
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
                        </View>
                    </Text>
                    : null
                }

                { question === 7
                    ? <Text>
                        <View style={styles.questionViewStyle}>
                            <Question question="headaches?"/>
                            <View style={{paddingBottom: 65}}/>
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
                        </View>
                    </Text>
                    : null
                }

                { question === 8
                    ? <Text>
                        <View style={styles.questionViewStyle}>
                            <Question question="nausea?"/>
                            <View style={{paddingBottom: 65}}/>
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
                        </View>
                    </Text>
                    : null
                }

                { question === 9
                    ? <Text>
                        <View style={styles.questionViewStyle}>
                            <Question question="diarrhea?"/>
                            <View style={{paddingBottom: 65}}/>
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
                        </View>
                    </Text>
                    : null
                }

                { question === 10
                    ? <Text>
                        <View style={styles.questionViewStyle}>
                            <Question question="Have you been in contact with someone who has tested positive for COVID-19 in the last 2 weeks?"/>
                            <View style={{paddingBottom: 65}}/>
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
                        </View>
                    </Text>
                    : null
                }

                { question === 11
                    ? <Text>
                        <View style={styles.questionViewStyle}>
                            <Question question="Have you traveled outside of the United States in the last 2 weeks?"/>
                            <View style={{paddingBottom: 65}}/>
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
                        </View>
                    </Text>
                    : null
                }
                </ThemeProvider>
            </View>
        </SafeAreaProvider>
    );
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
    iconStyle: {
        fontSize: 35,
        color: 'black',
    },
    questionViewStyle: {
        padding: 20,
        paddingTop: 20,
    },
    mainQuestionStyle: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: "bold",
        paddingTop: 20
    },
    viewButtonStyle: {
        justifyContent: 'space-around',
        backgroundColor: '#c54145',
        borderRadius: 20,
        padding: 15,
        flexDirection: 'row',
        color: '#0d1347',
        width: 200
    }
});

export default QuestionScreen;
