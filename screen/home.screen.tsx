import {
    Alert,
    Image,

    Pressable,

    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { scale, verticalScale } from "react-native-size-matters";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemedText } from "@/components/ThemedText";
import { router } from "expo-router";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";


export default function HomeScreen() {


    return (
        <ThemedView style={styles.container}>
            <StatusBar style="auto" />
            <ThemedText style={styles.title}>Home</ThemedText>

            {/* // clear async storage to test onboarding functionality*/}
            <TouchableOpacity
                onPress={() => {
                    Alert.alert("Clearing async storage");
                    AsyncStorage.clear();
                    // refresh the app
                    router.push("/");

                }}
            >


                <ThemedText>Clear async storage</ThemedText>

                <Pressable
                    onPress={() => {
                        router.push("/register/index")
                    }}
                >
                    <ThemedText>Register</ThemedText>
                </Pressable>

            </TouchableOpacity>

        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: scale(20),
        fontWeight: "bold",
    },
});