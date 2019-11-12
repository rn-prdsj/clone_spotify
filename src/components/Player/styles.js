import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secundary,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: metrics.basePadding,
    },
    currentSong: {
        flex: 1,
    },
    title: {
        fontSize: 14,
        color: colors.white,
    },
    author: {
        fontSize: 12,
        color: colors.dark,
        marginTop: 3,
    },
    controls: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    controlIcon: {
        color: colors.white,
    },
    play: {
        marginHorizontal: metrics.baseMargin,
    },
});

export default styles;