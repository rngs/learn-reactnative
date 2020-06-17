import React from 'react';
import {
    Alert,
    Button,
    Image,
    Text,
    TextInput,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';

export default () => {
    const [ value, onChangeText ] = React.useState('Useless');
    return (
        <>
            <StatusBar barStyle='dark-content' />
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.sample}>
                    <Text>ビュー①</Text>
                </View>
                <Text style={styles.text}>テスト</Text>
                <View style={styles.sample2}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={text => onChangeText(text)}
                        value={value}
                    />
                </View>
                <Button
                    title='ボタン'
                    onPress={() => Alert.alert('Simple Button pressed')}
                />
                <View style={styles.sample2}>
                    <Image
                        style={{ width: 48, height: 48, backgroundColor: '#ffff00' }}
                        source={require('../../static/img/arrow_left.png')}
                    />
                </View>
                <View style={styles.sample}>
                    <Text>ビュー②</Text>
                </View>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#ff00ff',
    },
    sample: {
        flex: 1,
        backgroundColor: '#00ff00',
    },
    sample2: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    text: {
        flex: 1,
        backgroundColor: '#00ffff',
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    },
});

// export default Top;