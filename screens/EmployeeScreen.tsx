import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Employee } from '../components/Employee';
import { EmployeeScreenProps } from '../types/screens';

export function EmployeeScreen({ route }: EmployeeScreenProps) {
    return (
        <View style={styles.container}>
            <Employee name={''} image={''} email={''} phoneNumber={''} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F8FC',
        padding: 20,
    },
});
