# React Native Project Context (AI Review & Guidance Document)

## Purpose of This Document

This document defines the **context, goals, constraints, and evaluation criteria** for this React Native project.

It is intended to be used by:
- AI code assistants (Cursor, Copilot, etc.)
- Human reviewers
- The developer (self-review)

The AI should use this document to:
- Review project structure
- Review code quality and architecture
- Suggest improvements aligned with production readiness
- Avoid unnecessary complexity
- Guide learning through building

---

## Developer Profile

- Backend-focused software engineer
- Strong in JavaScript, APIs, databases, system design
- Comfortable with production systems
- New to React Native and frontend UI paradigms
- Prefers **clarity, structure, and correctness** over visual polish

---

## Project Objective

Build a **production-ready React Native mobile application** (Android + iOS) while learning React Native fundamentals through real-world constraints.

This is a **learning-by-building project**, not a demo or toy app.

Primary outcomes:
- Understand React Native architecture
- Build scalable project structure
- Handle real API, storage, and failure cases
- Be able to ship and maintain the app

---

## High-Level App Description

The app is expected to evolve through phases and may include:
- Authentication flow
- API-driven screens
- Offline-safe behavior
- Media uploads (audio/photo)
- Persistent local storage
- Error handling and recovery

The exact feature set may grow, but **architecture quality matters more than feature count**.

---

## Technology Constraints (Strict)

### Mandatory
- React Native CLI (no Expo abstraction)
- JavaScript (not TypeScript)
- Functional components
- React Hooks
- React Navigation
- Axios
- AsyncStorage

### Avoid Unless Justified
- Redux or heavy state libraries
- Premature optimization
- Complex animations
- Platform-specific hacks without explanation

---

## Architectural Principles

AI reviewers should enforce the following:

### 1. Separation of Concerns
- UI components should not contain API logic
- API calls must live in a dedicated layer
- Storage logic must be abstracted
- Navigation logic must be centralized

### 2. Predictable Structure
Expected high-level structure (example, not rigid):

src/
├── api/ # network calls, axios config
├── components/ # reusable UI components
├── screens/ # screen-level components
├── navigation/ # navigators and routes
├── hooks/ # custom hooks
├── storage/ # async storage utilities
├── utils/ # helpers, constants
└── config/ # env, app config



AI should:
- Flag tight coupling
- Flag unclear ownership of logic
- Suggest refactors only when justified

---

## React & React Native Guidelines

### State Management
- Prefer local state first
- Lift state only when needed
- Avoid global state unless complexity demands it

### Hooks
- Hooks must follow rules of hooks
- Side effects must be explicit and predictable
- Cleanup logic must exist where applicable

### Rendering
- Avoid unnecessary re-renders
- Use FlatList for lists
- Avoid inline functions/styles when harmful

---

## Error Handling Expectations

AI should verify:
- API failures are handled gracefully
- Loading states exist
- Empty states exist
- Permission denial is handled
- Offline scenarios are considered

Crashes without explanation are unacceptable.

---

## Production Readiness Criteria

Code should be reviewed against:
- Debug vs release behavior
- Logging discipline
- Environment configuration safety
- No hardcoded secrets
- Reasonable performance defaults

---

## Learning-Focused Review Rules (IMPORTANT)

AI reviewers should:
- Prefer **clear explanations** over complex solutions
- Explain *why* something is better, not just *what*
- Avoid advanced patterns unless necessary
- Call out beginner mistakes explicitly
- Suggest improvements incrementally

AI should NOT:
- Rewrite large portions unnecessarily
- Introduce frameworks without justification
- Assume web-specific React patterns blindly

---

## React Web Context (Optional, Later)

If React Web concepts are referenced:
- Clearly label them as **web-only**
- Do not require DOM knowledge for React Native
- Focus on shared React concepts (hooks, state, components)

---

## Success Criteria

This project is considered successful if:
- The app runs on real devices
- Code structure remains understandable after feature growth
- Bugs can be diagnosed and fixed confidently
- The developer can explain architectural decisions
- The app can realistically be shipped

---

## Guiding Principle

> Prefer boring, readable, production-safe code over clever abstractions.

Learning happens by building, breaking, fixing, and shipping.
