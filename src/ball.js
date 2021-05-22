import React, {Component}  from 'react';
import { View, StyleSheet , Animated } from 'react-native';

class Ball extends Component{

    UNSAFE_componentWillMount(){
        this.position = new Animated.ValueXY(0, 0);
        Animated.spring(this.position, {
            toValue: { x: 200, y: 500},
            useNativeDriver: false,
        }).start();
    }

    render(){
        return(
            <Animated.View
                style={this.position.getLayout()}
            >
                <View 
                    style={styles.ball}
                />
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    ball: {
        height: 60,
        width: 60,
        color: 'black',
        borderRadius: 50,
        borderWidth: 50,
        borderColor: 'black'
    }
})

export default Ball;