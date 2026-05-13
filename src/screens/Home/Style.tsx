import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    appContainer:{
        flex:1,
        backgroundColor:"#eef9ff",
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
    },
    logoContainer:{
        flexDirection:'column',
        gap:8,
        justifyContent:'center',
        alignSelf:'center',
        marginBottom:20,
        paddingTop:20,
        paddingBottom:20,
        color:'white'
    },
    inputContainer:{
        width:'80%',
        flexDirection:'column',
        alignItems:'center',
    }
})

export default styles;