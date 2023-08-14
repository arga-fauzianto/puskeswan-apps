import { showMessage } from 'react-native-flash-message'
import { colors } from '../colors'

export const showerror = message => {
    showMessage({
        message: message,
        type: 'default',
        backgroundColor: colors.grow
    })
}