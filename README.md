# Smart E-Commerce App (React Native + Expo + Firebase + EAS)

A mobile e-commerce application built with React Native and Expo, featuring Firebase Authentication, Firestore-backed product/order data, Redux Toolkit state management, persisted cart state, bilingual localization (English/Arabic), and production-ready EAS Build/EAS Update workflows.

## Overview

This project demonstrates a complete shopping flow:

- User authentication (sign up / sign in / sign out) with Firebase Auth
- Product listing from Firestore
- Cart management with quantity controls
- Checkout flow and order creation
- User order history
- Runtime language switching (EN/AR)

The app is designed with reusable UI components and a modular folder structure to make features easy to scale.

## Tech Stack

- `React Native` + `Expo`
- `TypeScript`
- `Firebase Auth` + `Firestore`
- `Redux Toolkit`
- `redux-persist` + `AsyncStorage`
- `React Navigation` (stack + bottom tabs)
- `react-hook-form` + `yup` (form validation)
- `i18next` + `react-i18next` (internationalization)
- `EAS Build` + `EAS Update` (OTA updates)

## Core Features

- **Authentication**
  - Email/password sign up and sign in
  - Session restoration via Firebase Auth persistence
  - Logout from profile screen
- **Shopping**
  - Product catalog grid
  - Add to cart, increase/decrease quantity, remove item
  - Dynamic pricing summary (item total + taxes + shipping)
- **Checkout & Orders**
  - Validated checkout form
  - Saves order in:
    - `users/{uid}/orders` (per-user history)
    - `orders` (global collection)
- **Localization**
  - English and Arabic translations
  - Selected language persisted in `AsyncStorage`
- **State Persistence**
  - Cart state persisted with `redux-persist`
- **Release Readiness**
  - Android internal/production distribution via EAS Build
  - OTA JS/UI updates via EAS Update channels

## Project Structure

```text
src/
  components/       # Shared UI building blocks (buttons, cards, inputs, etc.)
  config/           # Firebase initialization + data services
  constants/        # App constants and static values
  localization/     # i18n setup + translation files
  navigation/       # Auth stack, app stack, bottom tabs
  screens/          # Feature screens (auth, home, cart, profile)
  store/            # Redux slices, store config, persistence setup
  styles/           # Shared colors, fonts, style helpers
```

## Getting Started

### Prerequisites

- Node.js `>= 20`
- npm
- Expo CLI (optional; `npx expo` works without global install)
- Android Studio emulator or Expo Go on a physical device

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment variables

Create a `.env` file in the project root:

```env
EXPO_PUBLIC_FIREBASE_API_KEY=your_api_key
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
EXPO_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
EXPO_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 3) Configure Firebase

In Firebase Console:

1. Enable **Authentication -> Sign-in method -> Email/Password**
2. Create Firestore database
3. Add a `products` collection with documents containing:
   - `title` (string)
   - `price` (number)
   - `imageURL` (string)
4. Download Android config file and place it at project root:
   - `google-services.json`
   - referenced from `app.json` (`expo.android.googleServicesFile`)

### 4) Run the app

```bash
npm run start
```

Then launch on:

- Android: `npm run android`
- iOS: `npm run ios` (macOS only)
- Web: `npm run web`

## EAS Build & Distribution

This project is configured with EAS build profiles in `eas.json`:

- `development`
- `preview`
- `production`

### Build Android APK (internal distribution)

```bash
npx eas build --platform android --profile preview
```

### Build production Android artifact

```bash
npx eas build --platform android --profile production
```

## EAS Update (OTA)

JavaScript/UI updates can be shipped without creating a new binary when runtime version is compatible.

### Publish OTA update

```bash
npx eas update --channel preview --platform android --message "your update message"
```

### Channel strategy

- `preview` channel -> internal testing builds
- `production` channel -> production builds
- Optional fallback channels: `default`, `development`

## EAS Environment Variables (Important)

Local `.env` values are not automatically available in cloud builds.  
You must define `EXPO_PUBLIC_*` Firebase variables in EAS environments:

- `preview`
- `production`
- `development`

Verify:

```bash
npx eas env:list --environment production
```

If these values are missing, release builds may crash on startup (for example with Firebase `auth/invalid-api-key`).

## Scripts

- `npm run start` - Start Expo Metro bundler
- `npm run android` - Run on Android
- `npm run ios` - Run on iOS
- `npm run web` - Run on web

## Authentication & Persistence Notes

- Firebase Auth is initialized with React Native persistence via `AsyncStorage`.
- Cart data is persisted with `redux-persist`.
- Language preference is persisted through i18n language detector + `AsyncStorage`.
- Route gating is handled by Firebase `onAuthStateChanged` in app navigation.

## Architecture Notes

- `App.tsx` wires:
  - Redux `Provider`
  - `PersistGate`
  - `I18nextProvider`
  - React Navigation container
- `MainAppStack` is responsible for auth-aware routing:
  - unauthenticated -> `AuthStack`
  - authenticated -> `MainAppBottomTab`
- Data reads/writes are centralized in `src/config/dataServices.ts` and checkout flow screens.
- Shared UI primitives live under `src/components` (inputs, buttons, headers, cards, language sheet).

## Troubleshooting

- **App closes immediately in release build**
  - Confirm EAS environment variables exist for the active build environment.
  - Validate Firebase keys are correct.
  - Check device logs:
    - `adb logcat -b crash -d`
- **OTA update not reflected**
  - Ensure installed binary runtime matches current update runtime.
  - Ensure binary is connected to the expected channel.
  - Fully close and reopen app (sometimes update applies on next launch).

## Roadmap Ideas

- Add unit/integration tests (Jest + React Native Testing Library)
- Add typed Firestore models for stricter type safety
- Add loading/empty/error UI states for all remote lists
- Add CI checks (lint/typecheck/tests) for PR quality gates

## Contributing

Contributions are welcome. If you are submitting changes:

1. Create a feature branch
2. Keep commits focused and descriptive
3. Validate app flows on at least one target platform
4. Open a pull request with a short test plan

## License

No license file is currently included. Add a `LICENSE` file if you plan to distribute this project publicly.
