import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import theme from '../styles/theme';

export default function DoctorList() {
    return (
        <View style={styles.card}>
            <Image
                source={require('../assets/images/doctor1.png')}
                style={styles.image}
            />
            <Text style={styles.name}>Dr. João Silva</Text>
            <Text style={styles.specialty}>Cardiologista</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: theme.colors.background,
        borderRadius: 12,
        padding: 12,
        alignItems: 'center',
        marginBottom: 10,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: theme.colors.text as string,
    },
    specialty: {
        fontSize: 14,
        color: theme.colors.secondary as string,
    },
});
