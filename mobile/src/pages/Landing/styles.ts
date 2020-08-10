import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#8257E5',

        flex: 1,
        justifyContent: "center",

        padding: 40,
    },

    banner: {
        width: "100%",

        resizeMode: "cover"
    },

    title: {
        color: '#FFF',
        fontSize: 20,
        lineHeight: 30,
        fontFamily: 'Poppins_400Regular',

        marginTop: 80,
    },

    titleBold: {
        fontFamily: 'Poppins_600SemiBold',
    },

    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        
        marginTop: 40,
    },

    button: {
        height: 150,
        width: "48%",

        borderRadius: 8,
        padding: 24,

        justifyContent: "space-between",
    },

    buttonPrimary: {
        backgroundColor: '#9871F5',
    },

    buttonSecondary: {
        backgroundColor: '#04d061',
    },

    buttonText: {
        fontFamily: "Archivo_700Bold",
        fontSize: 20,
        color: '#FFF',
    },

    totalConnections: {
        fontFamily: 'Poppins_400Regular',
        color: '#d4c2ff',
        fontSize: 14,
        lineHeight: 20,

        maxWidth: 160,

        marginTop: 40,
    }
});

export default styles;