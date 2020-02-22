import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,

} from 'react-native';
import Image from '../components/Image';
import Section from '../components/Section';
import TagSection from '../components/TagsSection';
import AddPhotoButton from '../components/AddPhotoButton';

import { ScrollView } from 'react-native-gesture-handler';


class Create extends Component {


    avoidKeyboard = () => {

    }
    render = () => {

        return (
            <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={styles.container}>
                    <Section borderBottom={false} title="Memorys title" text="Title"></Section>
                    <AddPhotoButton ></AddPhotoButton>
                    <Section title="Location" text="Title"></Section>
                    <Section title="Date" text="06.01.2017"></Section>
                    <TagSection></TagSection>
                    <Section borderBottom={false} title="Notes" text="Some notes"></Section>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },


})

export default Create;