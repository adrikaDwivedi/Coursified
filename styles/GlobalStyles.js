import { StyleSheet, Dimensions, Platform } from 'react-native';

// Utility to provide consistent sizing across devices (phones/tablets)
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
// Based on ~375 x 812 (iPhone X) design guideline
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const scale = size => (SCREEN_WIDTH / guidelineBaseWidth) * size;
const verticalScale = size => (SCREEN_HEIGHT / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

const Colors = {
  primary: '#4c5dab',
  white: '#ffffff',
  gray: '#7d7d7d',
  card: '#fff',
  text: '#222',
  muted: '#999',
};

const Spacing = {
  tiny: scale(4),
  xs: scale(8),
  sm: scale(12),
  md: scale(16),
  lg: scale(24),
  xl: scale(32),
};

const Typography = {
  h1: moderateScale(28),
  h2: moderateScale(22),
  h3: moderateScale(18),
  body: moderateScale(14),
  small: moderateScale(12),
};

const Layout = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: Colors.card,
    padding: Spacing.md,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spacedRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  card: {
    backgroundColor: Colors.card,
    borderRadius: scale(8),
    padding: Spacing.md,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: Platform.OS === 'ios' ? 0.12 : 0.25,
    shadowRadius: 4,
    elevation: 3,
  },
  avatar: {
    width: scale(56),
    height: scale(56),
    borderRadius: scale(28),
  },
});

const Buttons = StyleSheet.create({
  primary: {
    backgroundColor: Colors.primary,
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(16),
    borderRadius: scale(8),
    alignItems: 'center',
  },
  primaryText: {
    color: Colors.white,
    fontSize: Typography.body,
    fontWeight: '600',
  },
  ghost: {
    backgroundColor: 'transparent',
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(12),
    borderRadius: scale(8),
    alignItems: 'center',
  },
});

export default {
  scale,
  verticalScale,
  moderateScale,
  Colors,
  Spacing,
  Typography,
  Layout,
  Buttons,
};
