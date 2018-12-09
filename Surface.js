/* @flow */

import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import shadow from '../styles/shadow'
import { withTheme } from '../common/theming'
import * as Colors from '../styles/colors'
import type { Theme } from '../types'

type Props = {
  /**
   * Content of the `Surface`.
   */
  children: React.Node,
  style?: any,
  theme: Theme,
}

/**
 * ## Usage
 * const MyComponent = () => (
 *   <Surface style={styles.surface}>
 *      <Text>Surface</Text>
 *   </Surface>
 * );
 *
 * export default MyComponent;
 *
 * const styles = StyleSheet.create({
 *   surface: {
 *     padding: 8,
 *     height: 80,
 *     width: 80,
 *     alignItems: 'center',
 *     justifyContent: 'center',
 *     elevation: 4,
 *   },
 * });
 * ```
 */
class Surface extends React.Component<Props> {
  render() {
    const { style, theme, ...rest } = this.props
    const flattenedStyles = StyleSheet.flatten(style) || {}
    const { elevation } = flattenedStyles

    return (
      <View
        {...rest}
        style={[
          styles.surface,
          { backgroundColor: theme.colors.surface },
          elevation && shadow(elevation),
          style,
        ]}
      />
    )
  }
}

export default withTheme(Surface)

const styles = StyleSheet.create({
  surface: {
    backgroundColor: Colors.white,
  },
})
