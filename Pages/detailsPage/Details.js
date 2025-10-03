import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function Details({ route, navigation }) {
    const { image, name, description } = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: name || 'Details',
            headerStyle: {
                backgroundColor: '#FFFFFF', 
            },
            headerTintColor: '#6200EE',
            headerTitleStyle: {
                fontWeight: 'bold',
                color: '#6200EE', 
            },
        });
    }, [navigation, name]);

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
            <Image source={{ uri: image }} style={styles.image} />
            <View style={styles.contentContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F2F5', 
    },
    scrollContent: {
        paddingBottom: 40,
    },
    image: {
        width: '100%',
        height: 300,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25, 
        shadowRadius: 5.46,
        elevation: 9, 
    },
    contentContainer: {
        padding: 20,
        backgroundColor: '#FFFFFF', 
        marginTop: -20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    name: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2C3E50', 
        textAlign: 'center',
        marginBottom: 20,
    },
    description: {
        fontSize: 17,
        color: '#34495E', 
        lineHeight: 26,
        textAlign: 'left',
    },
});