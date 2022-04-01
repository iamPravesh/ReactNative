import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import axios from 'axios';
// import { createStackNavigator } from 'react-navigation';

export default class PersonList extends React.Component {
    state = {
        persons: '',
        errors: 'waiting for persons...',
    }

    componentDidMount() {
        setTimeout(() => {
            axios.get(`https://jsonplaceholder.typicode.com/users`)
                .then(res => {
                    const persons = res.data[Math.floor(Math.random() * res.data.length)].name;
                    console.log(persons);
                    this.setState({ persons });
                }).catch(err => {
                    const error = 'please connect to internet';
                    console.log(err);
                    this.setState({ errors: error });
                })
        }, -1000);
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
                {
                    (this.state.persons == '') ?
                        null :
                        <View>
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    marginTop: 20,
                                    marginBottom: 20,
                                }}
                            > A Random Name: <Text style={{
                                fontSize: 25,
                                fontWeight: 'bold',
                                color: 'gold',
                            }} > {this.state.persons} </Text> </Text>

                            <TouchableOpacity
                                onPress={() => {
                                    axios.get(`https://jsonplaceholder.typicode.com/users`)
                                        .then(res => {
                                            const persons = res.data[Math.floor(Math.random() * res.data.length)].name;
                                            console.log(persons);
                                            this.setState({ persons });
                                        }).catch(err => {
                                            const error = 'please connect to internet';
                                            console.log(err);
                                            this.setState({ errors: error });
                                        })
                                }}
                                style={{
                                    padding: 10,
                                    backgroundColor: 'blue',
                                    borderRadius: 10,
                                    borderWidth: 1,
                                    borderColor: 'gold',
                                    width: '60%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 20,
                                        color: '#fff',
                                    }}
                                >Get another name</Text>
                            </TouchableOpacity>
                        </View>
                }

                {
                    (this.state.errors == '') ?
                        <Text style={{ color: 'blue' }} >
                            waiting for person
                        </Text> : (this.state.persons.length == 0) ?
                            <Text> {this.state.errors} </Text> : null
                }
            </View>
        )
    }
}