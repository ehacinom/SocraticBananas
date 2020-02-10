import { StyleSheet } from 'react-native'
import Fonts from '../../../../Themes/Fonts'
import Colors from '../../../../Themes/Colors'

styles = StyleSheet.create({
    outerContainer: {
        // height: 50
        flex: 1,
        // borderRadius: 50,
        marginVertical: 6,
        // backgroundColor: '#7F96FF',
        backgroundColor: Colors.lightPurple,
        opacity: 1,
        borderRadius: 4,
    },
    container: {
    },
    name: {
        ...Fonts.style.h5,
        color: 'white',
        fontSize: 19,
        height: 30,
        fontWeight: '200',
        margin: 5,
        paddingLeft: 5
    }
})

export default styles
