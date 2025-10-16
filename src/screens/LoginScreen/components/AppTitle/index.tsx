import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { appName, theme } from "../../../../styles/theme";
// @ts-ignore
import Logo from "../../../../assets/logo.png"; // 🔹 Certifique-se de criar esse arquivo

const AppTitle: React.FC = () => {
    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo} />
            <Text style={styles.title}>{appName}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginBottom: 20,
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 10,
    },
    title: {
        fontSize: 28,
        color: theme.colors.primary,
        fontFamily: theme.fonts.bold,
    },
});

export default AppTitle;
