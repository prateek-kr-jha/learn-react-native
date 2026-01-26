# Todo App – Screen Architecture & Flow

This document explains **how to build the three views (Tasks / Pending / Completed)** shown in the design **without treating them as three separate pages**.

There is **no navigation**, **no routing**, and **no multiple screens**.
Everything is handled with **state and conditional rendering**.

---

## 1. Core Concept (Very Important)

**Tasks / Pending / Completed are NOT three pages.**

They are **three states of the same screen**.

The layout stays the same:

- Header at the top
- Todo list in the middle
- Filter bar at the bottom

Only the **data shown** and **highlighted filter** change.

---

## 2. High-Level Screen Structure

```
TodoScreen
 ├── Header
 ├── TodoList
 └── BottomFilterBar
```

This structure **never changes**.

---

## 3. Components and Their Roles

### 3.1 Screen Container

**Component:** `View`

**Responsibilities:**

- Acts as the page wrapper
- Uses `flex: 1`
- Applies safe-area padding (top & bottom)
- Holds all child sections

---

### 3.2 Header

**Components used:**

- `View`
- `Text`
- `Pressable`

**What it shows:**

- Title (Tasks / Pending / Completed)
- Date
- Action button (Add)

**Behavior:**

- Title changes based on active filter
- Layout stays the same

---

### 3.3 Todo List

**Components used:**

- `FlatList`
- `View`
- `Text`
- `Pressable`

**Why `FlatList`:**

- Efficient rendering
- Scroll support
- Standard for lists

**Behavior:**

- Always renders the same list component
- Receives **filtered data** only

---

### 3.4 Todo Item

**Components used:**

- `Pressable` (checkbox)
- `Text`
- `View`

**Visual rules:**

- Pending item → normal text
- Completed item → grey text + strikethrough

**State-driven styling:**

- UI reacts to `completed: true | false`

---

### 3.5 Bottom Filter Bar

**Components used:**

- `View` (rounded container)
- `Pressable` (for each option)
- `Text`

**Options:**

- All
- Pending
- Completed

**Behavior:**

- Clicking a filter does NOT navigate
- It only updates a filter state
- Active filter is visually highlighted

---

## 4. State Design (Single Source of Truth)

Only **two states** are required:

### 4.1 Todos State

- Contains the full list of todos
- Never destroyed or duplicated

### 4.2 Active Filter State

Possible values:

- `all`
- `pending`
- `completed`

This state controls:

- Header title
- Which todos are shown
- Which filter is highlighted

---

## 5. Data Flow (User Interaction)

### When user taps a filter:

1. User taps Pending / Completed / All
2. Active filter state updates
3. Screen re-renders
4. Todo list receives filtered data
5. Header title updates
6. Bottom bar updates highlight

**Same screen. New state.**

---

## 6. Filtering Logic (Conceptual)

- All → show all todos
- Pending → show `completed === false`
- Completed → show `completed === true`

Filtering happens **before rendering**, not inside list items.

---

## 7. What NOT to Do

❌ Do NOT create three screens
❌ Do NOT use navigation tabs
❌ Do NOT duplicate todo lists
❌ Do NOT copy layouts per filter

These lead to:

- State sync bugs
- Maintenance issues
- Poor scalability

---

## 8. Why This Architecture Is Correct

- One screen
- One list
- One data source
- One filter state

This is how production apps handle filtered views.

---

## 9. Mental Rule to Remember

> If layout is the same and only data changes → use state, not navigation

---

## 10. Summary

- Tasks / Pending / Completed = one screen
- Filters are state-driven
- UI updates are declarative
- Layout never changes
- Clean, scalable, production-ready

---

## This structure is ideal for learning React Native and scales well for real apps.

# TS:

# Todo App – TypeScript Data Modeling Guide (No Code)

This document explains **how to think about TypeScript types** for the Todo App architecture.

There is **no code** in this file.
The goal is to understand:

- What data types you need
- Why you need them
- Where they should live

---

## 1. Why TypeScript Matters Here

TypeScript helps you answer three questions:

1. What shape does my data have?
2. What values are allowed?
3. What mistakes should be impossible?

In this Todo app, TypeScript protects:

- Todo structure
- Filter values
- Component communication
- State correctness

---

## 2. Core Domain Concepts

Your app has **two core pieces of data**:

1. Todos
2. Active filter

Everything else is derived from these.

---

## 3. Todo Data Type

### What a Todo represents

Each todo must have:

- A unique identifier
- A text title
- A completion status
- (Optional) metadata like date/time

### TypeScript concept to use

Use a **domain type** (interface or type alias).

### Why

- Enforces consistent structure
- Prevents missing fields
- Makes todos reusable across components

### Mental rule

> Every todo in the app must follow the same contract

---

## 4. Todos State Type

### What the state stores

- A list of todos
- Never a single todo
- Never mixed values

### TypeScript concept

An **array of Todo items**.

### Why

- Prevents accidental insertion of invalid data
- Ensures list operations are safe

### Mental rule

> Todos state is always a list of valid Todo objects

---

## 5. Filter State Type (Very Important)

### Allowed values

Only three values are valid:

- All
- Pending
- Completed

### TypeScript concept to use

A **union of string literals**.

### Why

- Prevents invalid filters
- Enables autocomplete
- Makes logic exhaustive and safe

### Mental rule

> A filter can only be one of the allowed options — nothing else

---

## 6. Derived Data (No State Needed)

### What is derived

- Filtered todo list
- Header title text

### Key idea

Derived data should **not** have its own state.

### TypeScript implication

- Derived values keep the same base types
- No new type definitions required

### Mental rule

> If it can be calculated, don’t store it

---

## 7. Header Title Mapping

### What changes

The header title depends on the active filter.

### TypeScript concept

A **mapping between filter type and title string**.

### Why

- Guarantees all filter cases are handled
- Avoids conditional logic chains

### Mental rule

> Every filter must map to a visible title

---

## 8. Component Props Typing

When components are split (Header, TodoList, BottomFilterBar):

Each component should receive **only what it needs**.

### Examples of responsibility

- Header: current filter, date
- TodoList: array of todos
- BottomFilterBar: current filter, filter change handler

### TypeScript concept

**Props interfaces** per component.

### Why

- Prevents wrong prop usage
- Makes component contracts explicit

### Mental rule

> Props describe a component’s contract with the rest of the app

---

## 9. Event Handler Types

### Common actions

- Add todo
- Toggle completion
- Change filter

### TypeScript idea

- Clearly defined function inputs
- No ambiguous parameters

### Mental rule

> Every action has a clear input and no surprises

---

## 10. useState Typing Rules

### Rule 1: Empty initial state

When state starts empty, TypeScript cannot infer the type.

→ Explicit typing is required.

### Rule 2: Non-empty initial state

Inference usually works correctly.

### Mental rule

> Empty state means you must declare the type

---

## 11. What NOT to Do

❌ Do not use `any`
❌ Do not use vague types like `object`
❌ Do not duplicate type definitions
❌ Do not define types inside JSX

These remove TypeScript’s benefits.

---

## 12. Where Types Should Live

Think in layers:

- Domain types (Todo, Filter) → shared
- Component prop types → local
- UI logic → no types inside JSX

### Mental rule

> Types describe data, not UI

---

## 13. Final Blueprint Summary

| Concept         | TypeScript Strategy  |
| --------------- | -------------------- |
| Todo item       | Domain interface     |
| Todos state     | Array of Todo        |
| Filter state    | Union of literals    |
| Derived data    | No state, same types |
| Component props | Props interfaces     |
| Event handlers  | Typed functions      |

---

## 14. One Rule to Remember Forever

> If data has rules, give it a type

---

This approach keeps your React Native app:

- Predictable
- Scalable
- Beginner-friendly
- Production-ready

---

project layout

screens/
TodoScreen

components/
Header
TodoList
TodoItem
BottomFilterBar
FilterButton
