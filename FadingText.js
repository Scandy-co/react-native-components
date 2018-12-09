import React from 'react'
import { Animated } from 'react-native'
import PropTypes from 'prop-types'

export default class FadingText extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      animVal: new Animated.Value(0),
    }
  }

  componentDidMount() {
    setTimeout(() => {
      Animated.timing(this.state.animVal, {
        toValue: 1,
        useNativeDriver: true,
        duration: this.props.fadeTime,
      }).start()
    }, this.props.fadeDelay)
  }

  render() {
    const { animVal } = this.state
    return (
      <Animated.Text
        style={[
          this.props.style,
          {
            opacity: animVal.interpolate({
              inputRange: [0, 1],
              outputRange: [1.0, 0.0],
            }),
          },
        ]}>
        {this.props.children}
      </Animated.Text>
    )
  }
}

FadingText.propTypes = {
  fadeDelay: PropTypes.number,
  fadeTime: PropTypes.number,
}

FadingText.defaultProps = {
  fadeDelay: 750,
  fadeTime: 1500,
}
