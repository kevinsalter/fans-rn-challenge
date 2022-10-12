import React, { useRef } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { EmployeeModel } from '../types/data';
import { Entypo } from '@expo/vector-icons';

type EmployeeCardProps = {
    employee: EmployeeModel;
    handleRemove: (id: number) => void;
};

export function EmployeeCard(props: EmployeeCardProps) {
    const isOnline = useRef(Math.random() > 0.5 ? true : false);

    /* 👉 Add the full name and image as well as the handleRemove fn from props below */
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <View style={styles.image}>{/* <Image style={styles.image} /> */}</View>
            </View>
            <View style={styles.details}>
                <Text style={styles.name}>Shauna Royal</Text>
                <View style={styles.onlineStatus}>
                    {isOnline.current ? <View style={styles.status} /> : null}
                    <Text style={styles.onlineText}>{isOnline.current ? 'Online' : 'Offline'}</Text>
                </View>
            </View>
            <View style={styles.removeContainer}>
                {/* 👉 Implement handleRemove here */}
                <Pressable onPress={() => {}} style={styles.removeBtn}>
                    <Entypo name="cross" size={24} color="#FFF" />
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 10,
        alignItems: 'center',
        shadowColor: '#949494',
        shadowOpacity: 0.1,
        shadowRadius: 9,
        shadowOffset: { width: 0, height: 1 },
    },
    onlineStatus: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    status: {
        marginRight: 5,
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#46e470',
    },
    profile: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        borderRadius: 35,
        width: 60,
        height: 60,
    },
    details: {
        marginLeft: 15,
        justifyContent: 'center',
        flexGrow: 1,
    },
    name: {
        fontSize: 18,
        marginBottom: 2,
    },
    onlineText: {
        color: '#636263',
    },
    removeContainer: {
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#9674ee',
        shadowColor: '#ae93f1',
        shadowRadius: 10,
        shadowOpacity: 0.7,
        shadowOffset: { width: 0, height: 2 },
    },
    removeBtn: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
