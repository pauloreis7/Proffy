import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#e6e6f0',
        borderRadius: 8,
        overflow: 'hidden',

        marginBottom: 16,
    },

    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        
        padding: 24,
    },

    avatar: {
        width: 64,
        height: 64,

        borderRadius: 32,
        backgroundColor: '#eee'
    },

    profileInfo: {
        marginLeft: 16
    },

    name: {
        fontFamily: 'Archivo_700Bold',
        fontSize: 20,
        color: '#32264d'
    },

    subject: {
        fontFamily: 'Poppins_400Regular',
        color: '#6a6180',
        fontSize: 12,

        marginTop: 2
    },

    bio: {
        marginHorizontal: 24,
        
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        lineHeight: 24,
        color: '#6a6180',
    },

    footer: {
        backgroundColor: '#fafafc',

        padding: 24,
        marginTop: 24,

        alignItems: 'center'
    },

    price: {
        fontFamily: 'Poppins_400Regular',
        color: '#6a6180',
        fontSize: 14,
    },

    priceValue: {
        fontFamily: 'Archivo_700Bold',
        color: '#8257e5',
        fontSize: 16,
    },

    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
    },

    favoriteButton: {
        width: 56,
        height: 56,

        backgroundColor: '#8257e5',
        borderRadius: 8,

        justifyContent: 'center',
        alignItems: 'center',

        marginRight: 8
    },

    contactButton: {
        backgroundColor: '#04d361',
        borderRadius: 8,

        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,

        marginRight: 8,
        
        height: 56,
    },

    contactButtonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 16,

        marginLeft: 16
    }
})

export default styles;