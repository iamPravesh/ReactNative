import React from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

export default class PersonList extends React.Component {
    state = {
        persons: [],
        errors: 'waiting for persons...',
    }

    componentDidMount() {
        setTimeout(() => {
            axios.get(`https://jsonplaceholder.typicode.com/users`)
                .then(res => {
                    const persons = res.data;
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
            <View>
                {
                    (this.state.persons.length == 0) ?
                        null :
                        <View>
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    marginTop: 20,
                                    marginBottom: 20,
                                }}
                            > Below is the list of people called using axios:</Text>
                        </View>
                }

                {
                    this.state.persons
                        .map(person =>
                            <View
                                style={{
                                    borderWidth: 1,
                                    borderColor: 'black',
                                    margin: 10,
                                    backgroundColor: 'lightblue',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                key={person.id}
                            >
                                <Text style={{ color: 'black', fontSize: 25 }}>
                                    {person.name}
                                </Text>
                            </View>
                        )
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