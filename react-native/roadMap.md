# React Native Learning-by-Building Roadmap (Production-Oriented PRD)

## Objective

The objective of this project is to **learn React Native by building and shipping a production-ready mobile application** for both Android and iOS.

This roadmap prioritizes:
- Real-world app structure
- Backend-friendly architecture
- Failure handling
- Production readiness
- Shipping over tutorials

React Web is included as an **optional final phase**.

---

## Target Developer Profile

- Backend-focused engineer
- Comfortable with JavaScript and APIs
- Familiar with authentication, databases, error handling
- Wants production discipline, not toy apps

---

## Non-Goals

- Becoming a UI/UX designer
- Learning animations or heavy UI polish early
- Using Expo to abstract native details
- Over-optimizing architecture before shipping

---

## Tech Stack (Mandatory)

- React Native CLI
- JavaScript (no TypeScript initially)
- React Hooks
- React Navigation
- Axios
- AsyncStorage
- Android Studio + Xcode

---

## Core Learning Principle

> Every phase must result in a **working, runnable app on a real device or emulator**.

If it does not run → the phase is incomplete.

---

## Phase 0: Environment & Tooling Setup

### Goal
Prepare a stable development environment with minimal friction.

### Requirements
- Node.js LTS
- Android emulator running
- iOS simulator running
- React Native CLI project created
- App runs on at least one platform

### Definition of Done
- `npx react-native run-android` works
- App opens successfully without runtime errors

---

## Phase 1: React Fundamentals (Platform-Agnostic)

### Goal
Understand React’s core mental model independent of web or mobile.

### Concepts
- Functional components
- JSX
- Props vs State
- useState
- useEffect
- Conditional rendering
- List rendering

### Mini Project
**Single-Screen Todo App**

#### Features
- Add todo
- Toggle completed state
- Delete todo
- In-memory state only

### Definition of Done
- Clear understanding of re-renders
- No confusion between props and state
- No DOM or HTML assumptions

---

## Phase 2: React Native UI & Layout

### Goal
Learn native UI building blocks and layout system.

### Concepts
- Core components (View, Text, TextInput, Pressable, FlatList)
- Flexbox (React Native flavor)
- StyleSheet usage
- Platform differences (Android vs iOS)

### Project
**Offline Notes App**

#### Features
- Create note
- Edit note
- Delete note
- List notes

### Constraints
- No backend
- No navigation
- Single app flow

### Definition of Done
- Clean component separation
- FlatList used correctly
- Layout works on both platforms

---

## Phase 3: Navigation & App Structure

### Goal
Introduce multi-screen app flow and structure.

### Concepts
- Stack navigation
- Screen separation
- Passing parameters
- Auth vs non-auth flows

### Project
**Authentication Skeleton App**

#### Screens
- Splash
- Login
- Home
- Profile

#### Backend
- Mock or hardcoded login

### Definition of Done
- Clear navigation structure
- No prop drilling across screens
- Folder structure is scalable

---

## Phase 4: API Integration

### Goal
Connect real backend APIs with clean abstractions.

### Concepts
- Axios configuration
- Central API layer
- Loading and error states
- Auth token handling
- Retry and failure handling

### Project
**Service Feedback App (Core Version)**

#### Features
- Login via API
- Submit text feedback
- Fetch feedback history
- Handle API failures gracefully

### Definition of Done
- No API calls inside UI components
- Global error handling strategy
- Clear separation of concerns

---

## Phase 5: Local Storage, Media & Permissions

### Goal
Handle real mobile-specific problems.

### Concepts
- AsyncStorage
- Persist authentication
- Media uploads (audio/photo)
- Permission handling
- Offline-safe workflows

### Project Extension
**Service Feedback App (Extended)**

#### Additional Features
- Audio feedback upload
- Photo upload
- Offline submission queue
- Retry failed submissions on app reopen

### Definition of Done
- App works offline → online
- Permission denial handled gracefully
- No data loss scenarios

---

## Phase 6: Production Readiness

### Goal
Prepare the app for real-world usage and release.

### Concepts
- Error boundaries
- Logging (dev vs prod)
- Performance basics
- Environment configs
- Debug vs release builds

### Tasks
- Android release build (APK/AAB)
- iOS release build
- App versioning
- Crash reproduction and debugging

### Definition of Done
- Release build runs successfully
- Signing and certificates understood
- App behavior consistent across builds

---

## Phase 7: Shipping

### Goal
Exit tutorial mode by shipping the app.

### Tasks (At Least One)
- Play Store internal testing
- TestFlight upload
- Distribute APK to real users

### Definition of Done
- App installed by someone else
- Bugs reported and fixed
- Confidence in shipping process

---

## Optional Phase 8: React Web (Optional)

### Goal
Extend React knowledge to web development.

### When to Do This
- Need admin dashboards
- Need SEO
- Need browser-based UI

### Concepts to Learn
- DOM
- HTML/CSS
- Browser events
- Client-side routing

### Mini Project
**Admin Panel for Mobile App**

### Definition of Done
- Can reuse React logic across platforms
- Clear understanding of web vs native differences

---

## Final Outcome

By completing this roadmap, the developer should be able to:
- Build Android and iOS apps using React Native
- Design backend-friendly frontend architecture
- Handle real production issues
- Confidently ship and maintain mobile applications
- Transition to React Web if needed

---

## Guiding Principle

> Ship early. Fix often. Learn by breaking real things.

