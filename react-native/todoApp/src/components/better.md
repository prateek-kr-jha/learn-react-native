```css
src
├── screens
│   └── TodoScreen.tsx        ← main screen (state + logic)
│
├── components
│   ├── Header
│   │   └── Header.tsx
│   ├── TodoList
│   │   └── TodoList.tsx
│   ├── TodoItem
│   │   └── TodoItem.tsx
│   ├── Filter
│   │   ├── Filter.tsx
│   │   └── FilterButton.tsx
│   └── AddTodoModal
│       └── AddTodoModal.tsx
│
├── data
│   └── initialTodos.ts       ← rename from TodoList.js
│
├── utils
│   ├── colors.ts
│   └── layout.ts
│
├── types
│   └── todo.ts               ← (optional but recommended)
│
└── App.tsx

```