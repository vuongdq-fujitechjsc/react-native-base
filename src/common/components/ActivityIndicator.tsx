import { ActivityIndicator, StyleSheet, View } from 'react-native';

import React from 'react';

export const ActivityIndicatorView = () => {
    return (
        <View style={styles.wrapper}>
            <ActivityIndicator size="small" color="#000" />
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        opacity: 0.5,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
