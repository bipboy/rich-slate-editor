// ------------------------------------
// Environment vars
// ------------------------------------

export const env = process.env.NODE_ENV || 'development';

export const __DEV__ = env === 'development' || env === 'localhost';
export const __PROD__ = env === 'production';
