import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        padding: 40,
                
        backgroundColor: '#8257e5'
    },

    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        paddingTop: 4,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        color: "#FFF",
        fontSize: 24,
        lineHeight: 32,

        maxWidth: 166,

        marginVertical: 32,
    }
});

export default styles;