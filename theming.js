/* @flow */
/* eslint-disable no-redeclare */

import {
  createTheming,
  type ThemingType,
} from '@callstack/react-theme-provider';
import ScandyTheme from '../styles/ScandyTheme';
import type { Theme, ThemeShape } from '../types';

export const {
  ThemeProvider,
  withTheme,
}: ThemingType<?Theme, ThemeShape> = createTheming(ScandyTheme);
