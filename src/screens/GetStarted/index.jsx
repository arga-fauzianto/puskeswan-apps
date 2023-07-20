import React from "react";
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { ILGetStarted } from "../../assets";
import { fonts } from "../../utils";

const GetStarted = () => {
    return (
        <SafeAreaView style = {styles.Container}>
            <View style = {styles.Content}>
                <ILGetStarted />
                <Text style = {styles.textHeader}>
                    Rawat Hewan Kalian
                </Text>
                <Text style = {styles.descText}>
                    Mari sayangi dan jaga kesehatan
                </Text>
                <Text style = {styles.descText}>
                 mereka bersama kami
                </Text>
            </View>    
            <TouchableOpacity style = {styles.btn} activeOpacity={0.6}>
                <Text style = {styles.textBtn}>
                    Get Started
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default GetStarted;

const styles = StyleSheet.create({
    Container: {
        backgroundColor: "#FAC213",
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between"
    },

    Content: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 96,
    
    },

    textHeader: {
        fontSize: 14,
        fontFamily: fonts.primary[300],
        color: "#0A0A0A",
        marginTop: 12
    },

    descText: {
        fontFamily: fonts.primary[200],
        color: "#6C757D",
        fontSize: 12,
    },

    btn: {
        backgroundColor: "#F8F9FA",
        borderRadius: 8,
        width: 280,
        padding: 12,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30
    },

    textBtn: {
        fontFamily: fonts.primary[400],
        color: "#0A0A0A",
        fontSize: 17,
    }
})