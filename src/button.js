import React, { Component } from 'react';
import { TouchableNativeFeedback, View, Text, StyleSheet, TouchableWithoutFeedback, Platform } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    container: {
        borderColor: '#B3B3B3',
        borderWidth: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3
    },
    btnTxt: {
        color: 'white',
        padding: 10,
        fontWeight: 'bold'
    }
});

export default class Button extends Component {
    static propTypes = {
        onPress: PropTypes.func.isRequired,
        title: PropTypes.string,
        width: PropTypes.number,
        backgroundColor: PropTypes.string,
        color: PropTypes.string,
        style: PropTypes.objectOf(PropTypes.any)
    }

    static defaultProps = {
        title: null,
        width: 100,
        backgroundColor: null,
        color: null,
        style: {}
    }

    render() {
        const {
            title, width, backgroundColor, color
        } = this.props;
        const Touch = Platform.OS === 'ios' ? TouchableWithoutFeedback : TouchableNativeFeedback;
        return (
            <Touch onPress={this.props.onPress}>
                <View style={[styles.container, { width, backgroundColor }, this.props.style.container]}>
                    <Text style={[styles.btnTxt, { color }]}>
                        {title.toUpperCase()}
                    </Text>
                </View>
            </Touch>
        );
    }
}
