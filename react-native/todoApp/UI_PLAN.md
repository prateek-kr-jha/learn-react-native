# todoApp UI Plan

Based on `todoApp.png` design and `RN_PROJECT_CONTEXT.md` constraints.

---

## 1. Screens

| Screen | Title | Subtitle | Main elements |
|--------|-------|----------|---------------|
| **Tasks (All)** | "Tasks" | "October 15" | Add (+) button, task list, filter tabs |
| **Pending** | "Pending" | "October 15" | Add (+) button, pending tasks, filter tabs |
| **Completed** | "Completed" | "October 15" | Add (+) button, completed tasks, filter tabs |
| **Add a task** | "Add a task" | — | Cancel, description input, category picker, Save |

> Filter tabs (All / Pending / Completed) change the list on the same screen; they are not separate routes. The + button navigates to the Add a task screen.

---

## 2. Components

| Component | Purpose |
|-----------|---------|
| **Header** | Title, subtitle (date), Add (+) or Cancel |
| **TodoItem** | Checkbox, description, timestamp |
| **TodoList** | FlatList of TodoItem |
| **Filter** | Segmented control (All / Pending / Completed) |
| **FilterButton** | Single tab with active/inactive styles |
| **TextInput** | Task description field |
| **CategoryPicker** | Dropdown for category (Personal, Work, Health, Family, Learning) |
| **PrimaryButton** | Full-width Save button |

---

## 3. Component Trees

### Task List Screens (Tasks, Pending, Completed)

```
ScreenContainer
├── Header
│   ├── TitleText ("Tasks" | "Pending" | "Completed")
│   ├── SubtitleText ("October 15")
│   └── ActionButton (+ icon → Add screen)
├── TodoList (FlatList)
│   └── TodoItem (repeated)
│       ├── Checkbox
│       ├── DescriptionText
│       └── TimestampText
└── Filter
    ├── FilterButton ("All")
    ├── FilterButton ("Pending")
    └── FilterButton ("Completed")
```

### Add a task Screen

```
ScreenContainer
├── Header
│   ├── CancelButton ("Cancel")
│   └── TitleText ("Add a task")
├── FormContainer
│   ├── TextInput (placeholder: "Submit my essay")
│   └── CategoryPicker
│       ├── Label ("Choose a category")
│       └── DropdownMenu
│           ├── CategoryOption (icon + "Personal")
│           ├── CategoryOption (icon + "Work")
│           ├── CategoryOption (icon + "Health")
│           ├── CategoryOption (icon + "Family")
│           └── CategoryOption (icon + "Learning")
└── PrimaryButton ("Save")
```

---

## 4. Navigation

| From | Action | To |
|------|--------|-----|
| Task list | Tap + | Add a task |
| Task list | Change filter tab | Same screen, filtered list |
| Add a task | Tap Cancel | Previous task list |
| Add a task | Tap Save | Previous task list |

---

## 5. Layout Notes (React Native)

- **Header**: `flexDirection: 'row'`, `justifyContent: 'space-between'`, title left, button right
- **TodoList**: Use `FlatList` with `keyExtractor` and `renderItem`
- **TodoItem**: Row layout – checkbox (~24px) | description (flex) | timestamp
- **Filter**: Pill-style segmented control at bottom (already implemented)
- **CategoryPicker**: TouchableOpacity + Modal or overlay for dropdown
- **PrimaryButton**: Full-width, `alignSelf: 'stretch'` or `width: '100%'`
- **Colors**: Active tab `#111827`, inactive `#E5E7EB`, completed checkbox teal

---

## 6. Assets

| Asset | Location | Use |
|-------|----------|-----|
| add.svg | src/media/icons/ | Add (+) button |
| check.svg | src/media/icons/ | Completed checkbox |
| Person icon | To add | Personal category |
| Briefcase icon | To add | Work category |
| Cross/health icon | To add | Health category |
| House icon | To add | Family category |
| Graduation cap icon | To add | Learning category |
| Chevron icon | To add | Category picker dropdown |

---

## 7. Categories

| Value | Label | Icon |
|-------|-------|------|
| personal | Personal | Person |
| work | Work | Briefcase |
| health | Health | Cross/plus |
| family | Family | House |
| learning | Learning | Graduation cap |
