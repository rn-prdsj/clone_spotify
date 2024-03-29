import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlayerActions } from 'store/ducks/player';

import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

const SongItem = ({ song, player, setSongRequest }) => (
    <TouchableOpacity onPress={() => { setSongRequest(song); }} style={styles.container}>
        <View style={styles.info}>
            <Text
                style={[
                    styles.title,
                    (player.currentSong.id === song.id) ? styles.active : {},
                ]}
            >
                {song.title}
            </Text>
            <Text style={styles.author}>{song.author}</Text>
        </View>
        {(player.loadingId === song.id)
            ? <ActivityIndicator size="small" color="#999" style={styles.loading} />
            : <Icon name="play-circle-outline" size={24} style={styles.play} />
        }
    </TouchableOpacity>
);

SongItem.propTYpes = {
    song: PropTypes.shape({
        title: PropTypes.string,
        author: PropTypes.string,
    }).isRequired,
    player: PropTypes.shape({
        loadingId: PropTypes.bool,
    }).isRequired,
    setSongRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    player: state.player,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(PlayerActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(SongItem);