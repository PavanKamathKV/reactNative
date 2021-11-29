import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        alignItems: 'center', 
        marginTop: 10
    },
    logo: {
        width: 100,
        height: 100,
        marginVertical: 30
    }, 
    headingText: {
        fontSize: 30, 
        marginTop: 30, 
        color: '#000000'
    },
    centerAlign: {
        alignItems: 'center'
    },
    loginbtn: {
        backgroundColor: "#ff6347",
        height: 50, 
        width: "50%",
        marginBottom: 20,
    },
    loginText: {
        fontSize: 30, 
        color: 'white', 
        textAlign: 'center',
        fontWeight: 'bold'
    },
    text: {
        fontSize: 20
    },
    textBoxContainer: {
        position: 'relative',
        justifyContent: 'center'
    },
    textInput: {
        paddingHorizontal: 30,
        fontSize: 20, 
        width: '100%',
        height: 45, 
        borderWidth: 2, 
        borderColor: "#000000",
        borderRadius: 30,
        marginBottom: 10
    },
    resetText: {
        paddingHorizontal: 30,
        fontSize: 20, 
        width: '80%',
        height: 45, 
        borderWidth: 2, 
        borderColor: "#000000",
        borderRadius: 30,
        marginVertical: 30
    },
    textBox: {
        fontSize: 20,
        width: '90%',
        height: 45,
    },
    
    touchableBtn: {
        // position: 'absolute',
        // right: 3,
        height: 40,
        width: 35,
        padding: 2
    },
    flexDirection: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        width: '100%',
        borderWidth: 2,
        marginVertical: 10,
        borderRadius: 30
    },
    passwordTextbox: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        width: '100%',
        borderWidth: 2,
        marginVertical: 10,
        borderRadius: 30,
        alignItems: 'center'
    },
    loginContainer: {
        marginHorizontal: 20,
        marginVertical: 20
    },
    textComponent: {  
        fontSize:30,
        color: '#000000' 
    },
    header: {
        height: 20
    }
})

export default styles
