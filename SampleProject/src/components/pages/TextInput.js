import React from 'react';
import {
    AsyncStorage,
    SafeAreaView,
    Text,
    TextInput,
    StyleSheet,
    View,
} from 'react-native';


const STORE_KEY = 'SAMPLE';

const _setItem = async (key, value, callback) => {
    try {
        console.log('AsyncStorage.setItem()')
        await AsyncStorage.setItem(key, value);
    } catch(e) {
        console.log('faild to AsyncStorage.setItem()');
        console.log(e);
    }
};

const _getItem = async (key) => {
    try {
        const result =  await AsyncStorage.getItem(key);
        console.log('AsyncStorage.getItem()')
        console.log(result);
        return result;
    } catch(e) {
        console.log('faild to AsyncStorage.getItem()');
        console.log(e);
    }
};

const _onEnd = () => {
    console.log("end!1");
};

export default () => {
    _getItem(STORE_KEY);
    return (
        <SafeAreaView style={styles.safeArea}>
            <View>
                <Text>test</Text>
            </View>
            <View>
                <TextInput
                    onCangeText={text => _setItem(text)}
                    onEndEditing={_onEnd()}
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: '#ffffff' }}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#ff00ff',
    },
});
