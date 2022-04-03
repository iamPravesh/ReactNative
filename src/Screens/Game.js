import React, { useState } from 'react';
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class Game extends React.Component {

    state = {
        wins: 0,
        userOption: '',
        computerOption: '',
        totalGame: 0,
    }

    increaseScore = () => {
        this.setState({
            score: this.state.score + 1,
        });
    };

    decreaseScore = () => {
        this.setState({
            score: this.state.score - 1,
        });
    };

    userSelected = (value) => {
        const options = ['rock', 'paper', 'scissors'];
        const comp = options[Math.floor(Math.random() * 3)];
        this.setState({
            totalGame: this.state.totalGame + 1,
            userOption: value,
            computerOption: comp,
        });
        switch (value) {
            case 'rock':
                if (comp === 'rock') {
                    console.log('draw');
                }
                else if (comp === 'paper') {
                    console.log('lose');
                }
                else {
                    console.log('win');
                }
                break;
            case 'paper':
                if (comp === 'rock') {
                    console.log('win');
                }
                else if (comp === 'paper') {
                    console.log('draw');
                }
                else {
                    console.log('lose');
                }
                break;
            case 'scissors':
                if (comp === 'rock') {
                    console.log('lose');
                }
                else if (comp === 'paper') {
                    console.log('win');
                }
                else {
                    console.log('draw');
                }
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: "flex-start",
                    backgroundColor: '#000',
                }}>
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        paddingTop: 20,
                        paddingLeft: 20,
                    }}
                >
                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}
                        style={{
                            padding: 10,
                            backgroundColor: '#fff',
                            borderRadius: 10,
                            borderWidth: 1,
                            borderColor: 'gold',
                            width: '20%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 20,
                                color: 'red',
                            }}
                        >Back</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={{ fontSize: 20, color: 'green' }}>Total Games: {this.state.totalGame}</Text>
                </View>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        padding: 10,
                    }}
                >
                    <View>
                        <Text style={{ fontSize: 20, color: 'green' }}>Choose among following options:</Text>
                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                            }}
                        >
                            <TouchableOpacity
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding: 10,
                                    height: 100,
                                    width: 100,
                                    backgroundColor: 'blue',
                                    borderRadius: 10,
                                    margin: 10,
                                }}
                                onPress={() => this.userSelected('rock')}>
                                <Text style={{ fontSize: 20, color: 'white' }}>Rock</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding: 10,
                                    height: 100,
                                    width: 100,
                                    backgroundColor: 'blue',
                                    borderRadius: 10,
                                    margin: 10,

                                }}
                                onPress={() => this.userSelected('paper')}>
                                <Text style={{ fontSize: 20, color: 'white' }}>Paper</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding: 10,
                                    height: 100,
                                    width: 100,
                                    backgroundColor: 'blue',
                                    borderRadius: 10,
                                    margin: 10,

                                }}
                                onPress={() => this.userSelected('scissors')}>
                                <Text style={{ fontSize: 20, color: 'white' }}>Scissors</Text>
                            </TouchableOpacity>

                        </View>
                    </View>

                    {/* <TouchableOpacity
                        onPress={() => { this.props.increaseScore() }}
                        style={{
                            padding: 10,
                            backgroundColor: '#fff',
                            borderRadius: 10,
                            borderWidth: 1,
                            borderColor: 'gold',
                        }}>
                        <Text style={{ fontSize: 20, color: 'gold' }}>Increase</Text>
                    </TouchableOpacity>

                    <Text style={{ fontSize: 20, color: 'white' }}>{this.props.score}</Text>

                    <TouchableOpacity
                        onPress={() => { this.props.decreaseScore() }}
                        style={{
                            padding: 10,
                            backgroundColor: '#fff',
                            borderRadius: 10,
                            borderWidth: 1,
                            borderColor: 'gold',
                        }}>
                        <Text style={{ fontSize: 20, color: 'gold' }}>Decrease</Text>
                    </TouchableOpacity> */}
                    <View>
                        <Text style={{ fontSize: 20, color: 'green' }}>Computer Selected: {this.state.computerOption}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        score: state.score,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        increaseScore: () => dispatch({ type: 'INCREASE_SCORE' }),
        decreaseScore: () => dispatch({ type: 'DECREASE_SCORE' }),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);