import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

/**
 * 👉 Remove the mock data here and render out the employee details via the props
 * The listed props are listed below
 */

type EmployeeProps = {
    name: string;
    image: string;
    email: string;
    phoneNumber: string;
};

export function Employee(props: EmployeeProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>Shauna Royal</Text>
            <View style={styles.imageContainer}>{/* <Image style={styles.image} /> */}</View>
            <View style={styles.details}>
                <Text style={styles.phone}>1234-567-890</Text>
                <Text style={styles.email}>great-employee@company.com</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 10,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: 200,
        width: 200,
        borderRadius: 100,
    },
    details: {
        alignItems: 'center',
        margin: 20,
    },
    name: {
        marginBottom: 20,
        fontSize: 22,
        fontWeight: 'bold',
    },
    phone: {
        fontWeight: 'bold',
        margin: 5,
    },
    email: {},
});
