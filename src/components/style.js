import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        alignItems: 'center'
    },
    text: {
        fontSize: 14,
        color: '#101010',
    },
    textBold: {
        fontSize: 14,
        color: '#101010',
        fontWeight: '700'
    },
    listItem: {
        marginTop: 10,
        padding: 20,
        backgroundColor: '#fff',
        width: '100%',
    },
    listItemText: {
        fontSize: 18
    },
    title: {
        fontSize: 20,
        color: '#101010',
        marginTop: 20,
        marginBottom: 30,
        textAlign: 'center',
        fontWeight: '700'
    },
    txtCenter: {
        textAlign: 'center'
    },
    buttonIcon: {
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    twoIcons: {
        marginTop: 50,
        flexDirection: 'row', 
        justifyContent: 'space-evenly'
    },
    coverImage: {
        width: 100,
        height: 100,
        borderRadius: 8
      },
    metaInfo: {
        marginLeft: 10,
        textAlign: 'left',
    },
})