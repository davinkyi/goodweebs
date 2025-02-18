import { ExpoConfig, ConfigContext } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "Goodweebs",
  slug: "goodweebs",
  platforms: ["ios", "android", "web"],
  version: "0.0.13",
  orientation: "portrait",
  icon: "./assets/launch/icon.png",
  scheme: "goodweebs",
  privacy: "unlisted",
  backgroundColor: "#010209",
  splash: {
    image: "./assets/launch/splash.png",
    resizeMode: "cover",
    backgroundColor: "#010209",
  },
  owner: "fiberjw",
  updates: {
    fallbackToCacheTimeout: 30000,
    url: "https://u.expo.dev/21cb2a71-d249-4289-abb6-3b9b39e3b0a3",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    buildNumber: "0.0.13",
    bundleIdentifier: "com.fiberjw.goodweebs",
    config: {
      usesNonExemptEncryption: false,
    },
    requireFullScreen: false,
  },
  android: {
    package: "com.fiberjw.goodweebs",
    versionCode: 13,
    permissions: [],
    adaptiveIcon: {
      backgroundColor: "#651FFF",
      backgroundImage: "./assets/launch/android-background.png",
      foregroundImage: "./assets/launch/android-foreground.png",
    },
  },
  web: {
    favicon: "./assets/favicon.png",
  },
  plugins: ["sentry-expo"],
  runtimeVersion: {
    policy: "sdkVersion",
  },
  extra: {
    eas: {
      projectId: process.env.EXPO_STAGING
        ? "4678c342-b7f2-4911-ae87-0c5c0de6c188"
        : "21cb2a71-d249-4289-abb6-3b9b39e3b0a3",
    },
  },
});
