/**
 * Scalable layout from todoApp.png.
 * Uses Dimensions API so the UI scales across screen sizes.
 * Reference width 375, height 812 (typical phone portrait).
 */

import { Dimensions } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

/** Base unit for spacing (multiples of 8 keep rhythm). */
export const BASE_UNIT = 8;

/** Scale a value by screen width (design width 375). */
function scaleByWidth(value: number): number {
  return Math.round((value * screenWidth) / 375);
}

/** Scale a value by screen height (design height 812). */
function scaleByHeight(value: number): number {
  return Math.round((value * screenHeight) / 812);
}

export const layout = {
  screenWidth,
  screenHeight,

  /** Horizontal padding for content (≈5% of width, min 16). */
  horizontalPadding: Math.max(BASE_UNIT * 2, Math.round(screenWidth * 0.05)),

  /** Spacing scale (use multiples of BASE_UNIT). */
  spacing: {
    xs: BASE_UNIT,
    sm: BASE_UNIT * 2,
    md: BASE_UNIT * 3,
    lg: BASE_UNIT * 4,
    xl: BASE_UNIT * 5,
  },

  /** Font sizes scaled by height. */
  fontSizes: {
    title: scaleByHeight(26),
    subtitle: scaleByHeight(14),
    body: scaleByHeight(16),
    secondary: scaleByHeight(12),
    filter: scaleByHeight(16),
    button: scaleByHeight(18),
  },

  /** Icon / control sizes. */
  iconSizes: {
    checkbox: 24,
    addButton: scaleByWidth(48),
    categoryIcon: scaleByWidth(24),
  },

  /** Heights. */
  heights: {
    header: scaleByHeight(56),
    todoItemMin: scaleByHeight(56),
    filterButton: scaleByHeight(50),
    input: scaleByHeight(48),
    saveButton: scaleByHeight(52),
  },

  /** Border radii. */
  radii: {
    pill: 999,
    input: scaleByWidth(10),
    circle: (size: number) => size / 2,
  },

  /** Filter bar at bottom. */
  filterBar: {
    bottom: scaleByHeight(24),
    padding: BASE_UNIT,
    widthPercent: 0.9,
  },
} as const;

export type Layout = typeof layout;
