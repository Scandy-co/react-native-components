/* @flow */

import React from 'react'
import { Image, Text, StyleSheet } from 'react-native'
import type { ImageSource } from 'react-native/Libraries/Image/ImageSource'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons'

import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Foundation from 'react-native-vector-icons/Foundation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import Zocial from 'react-native-vector-icons/Zocial'
import icoMoonConfig from '../../assets/fonts/icomoonconfig.json'

const CustomIcon = createIconSetFromIcoMoon(icoMoonConfig)

type IconSets =
  | 'Entypo'
  | 'EvilIcons'
  | 'FontAwesome'
  | 'Foundation'
  | 'Ionicons'
  | 'MaterialIcons'
  | 'MaterialCommunityIcons'
  | 'Octicons'
  | 'Zocial'
  | 'SimpleLineIcons'

type IconSourceBase = IconSets | ImageSource

type IconProps = {
  color: string,
  size: number,
  name: string,
}

export type IconSource =
  | IconSourceBase
  | $ReadOnly<{ source: IconSourceBase }>
  | ((props: IconProps) => React.Node)


type Props = IconProps & {
  source: IconSource,
  iconSet: IconSets,
}

const isImageSource = (source: any) =>
  // source is an object with uri
  (typeof source === 'object' &&
    source !== null &&
    (Object.prototype.hasOwnProperty.call(source, 'uri') &&
      typeof source.uri === 'string')) ||
  // source is a module, e.g.  require('image')
  typeof source === 'number'

const ICON_SETS = {
  Entypo,
  EvilIcons,
  FontAwesome,
  Foundation,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  Octicons,
  Zocial,
  SimpleLineIcons,
}

export const isValidIcon = (source: any) =>
  typeof source === 'string' || isImageSource(source)

class Icon extends React.Component<Props, void> {
  static defaultProps = {
    size: 20,
  }

  render() {
    const { iconSet, source, size, color } = this.props
    const s =
      typeof source === 'object' && source.source ? source.source : source
    if (iconSet) {
      const VectorIcon = ICON_SETS[iconSet]
      return (
        <VectorIcon {...this.props} style={[styles.icon, this.props.style]} />
      )
    }
    if (isImageSource(s)) {
      return (
        <Image
          source={s}
          style={[
            {
              width: size,
              height: size,
              tintColor: color,
              resizeMode: 'contain',
            },
            this.props.style
          ]}
          accessibilityElementsHidden
          importantForAccessibility="no-hide-descendants"
        />
      )
    }
    return <CustomIcon {...this.props} style={[this.props.style]} />
  }
}

export default Icon

const styles = StyleSheet.create({
  icon: {
    backgroundColor: 'transparent',
  },
})
