/**
 * Color palette from todoApp.png design.
 * Use these constants so the app matches the reference UI.
 */

export const colors = {
  // Backgrounds
  background: '#F5F5F5',
  surface: '#FFFFFF',

  // Text
  textPrimary: '#282828',
  textSecondary: '#A9A9A9',

  // Buttons & accents
  primary: '#282828',
  primaryText: '#FFFFFF',
  accentComplete: '#20B2AA',
  accentPending: '#FFA500',

  // Filter tabs (inactive)
  filterInactive: '#F5F5F5',
  filterInactiveText: '#282828',

  // Shadows
  shadow: '#000000',

  // Category icons (for Add task screen)
  categoryPersonal: '#87CEEB',
  categoryWork: '#FF6347',
  categoryHealth: '#8A2BE2',
  categoryFamily: '#D2691E',
  categoryLearning: '#FFD700',
} as const;

export type Colors = typeof colors;
