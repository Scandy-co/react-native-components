/* @flow */

import * as React from 'react'
import { TouchableHighlight } from 'react-native'
import color from 'color'
import { withTheme } from '../common/theming'
import type { Theme } from '../types'

type Props = {
  /**
   * whether to render highlight outside of the view
   */
  borderless?: boolean,
  /**
   * whether to block touches
   */
  disabled?: boolean,
  /**
   * what it do, what it do.
   */
  onPress?: ?Function,

  /**
   * content color
   */
  color?: string,
  /**
   * interaction highlight color
   */
  underlayColor?: string,
  /**
   * Content of the touchable item
   */
  children: React.Node,
  style?: any,
  theme: Theme,
}

class Touchable extends React.Component<Props, void> {
  static defaultProps = {
    borderless: false,
  }

  render() {
    const {
      style,
      disabled: disabledProp,
      underlayColor,
      children,
      theme,
      ...rest
    } = this.props

    const { dark, colors } = theme
    const disabled = disabledProp || !this.props.onPress

    const calculatedColor =
      color ||
      color(colors.text)
        .alpha(dark ? 0.32 : 0.2)
        .rgb()
        .string()

    return (
      <TouchableHighlight
        {...rest}
        disabled={disabled}
        style={style}
        underlayColor={
          underlayColor != null
            ? underlayColor
            : color(calculatedColor)
                .fade(0.5)
                .rgb()
                .string()
        }>
        {React.Children.only(children)}
      </TouchableHighlight>
    )
  }
}

export default withTheme(Touchable)
