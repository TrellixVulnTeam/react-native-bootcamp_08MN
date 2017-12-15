import React from 'react';
import { View } from 'react-native';

// CardSection basically just a Presentation Component
// It used just to show some information to user
// It doesn't need to have any lifecycle events or any data fetching
// It doesn't need any access to State
// So the CardSection component doesn't have to be a Class-Based Component
// A Functional Component will do just enough
const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};

export default CardSection;
