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
        }, 2000);
    }

    render() {
        return (
            <View>
                {
                    (this.state.persons.length == 0) ?
                        null :
                        <View>
                            <Text> Below is the list of people called using axios </Text>
                        </View>
                }

                {
                    this.state.persons
                        .map(person =>
                            <View key={person.id}>
                                <Text style={{ color: 'blue', fontSize: 25 }}>
                                    HI, {person.name}
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