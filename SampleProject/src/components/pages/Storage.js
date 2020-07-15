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
    console.log('AsyncStorage.setItem()')
    try {
        const result = await AsyncStorage.setItem(key, value);
        console.log(result);
    } catch(e) {
        console.log('faild to AsyncStorage.setItem()');
        console.log(e);
    }
};

const _getItem = async (key) => {
    console.log('AsyncStorage.getItem()')
    try {
        const result =  await AsyncStorage.getItem(key);
        console.log(result);
        return result;
    } catch(e) {
        console.log('faild to AsyncStorage.getItem()');
        console.log(e);
    }
};

export default async () => {
    const  item = await _getItem(STORE_KEY);
    console.log(item);
    return (
        <>
            <SafeAreaView style={styles.safeArea}>
                <View>
                    <Text>{item}</Text>
                </View>
                <View>
                    <TextInput
                        onCangeText={text => _setItem(STORE_KEY, text)}
                    />
                </View>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#ff00ff',
    },
});
