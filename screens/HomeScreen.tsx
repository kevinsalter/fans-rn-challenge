import React from 'react';
import { Text, View, StyleSheet, TextInput, SafeAreaView, StatusBar } from 'react-native';
import { EmployeeCard } from '../components/EmployeeCard';
import { mockEmployee } from '../mock-data';
import { HomeScreenProps } from '../types/screens';

/** 💡
 * Endpoint provided here as well as the typescript
 * models of both the response and the Employee data
 */
import { FAKER_API_ENDPOINT } from '../api';
import { EmployeeModel, ResponseJson } from '../types/data';

export function HomeScreen(props: HomeScreenProps) {
    // 👉 Fetch some data and store it!

    return (
        <View style={styles.container}>
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar barStyle="light-content" />
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Employee Portal</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput placeholder="Search for an employee..." style={styles.textInput} />
                </View>

                <View style={styles.employeesContainer}>
                    <Text style={styles.containerTitle}>Employees:</Text>
                    {/* 👉 Remove this and render the returned data in a list */}
                    {[...Array(15).keys()].map((_, i) => (
                        <EmployeeCard key={i} employee={mockEmployee} handleRemove={() => {}} />
                    ))}
                </View>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F8FC',
        padding: 20,
    },
    headerContainer: {
        marginVertical: 20,
    },
    headerText: {
        color: '#6658F6',
        fontSize: 24,
        fontWeight: 'bold',
    },
    inputContainer: {
        marginVertical: 10,
    },
    containerTitle: {
        marginBottom: 10,
    },
    textInput: {
        borderRadius: 20,
        padding: 15,
        height: 50,
        backgroundColor: '#ebeef0',
    },
    employeesContainer: {
        flex: 1,
        marginVertical: 10,
    },
});
