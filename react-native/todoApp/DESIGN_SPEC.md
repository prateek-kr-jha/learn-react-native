# todoApp Design Spec

Colors and dimensions from `todoApp.png`. Use this for consistent UI and scalable layout.

---

## 1. Colors

| Role | Hex | Use |
|------|-----|-----|
| **Background** | `#F8F8F8` or `#F5F5F5` | Main screen background |
| **Primary text / dark UI** | `#222222` / `#282828` | Titles, task text, Add (+) button, Save, active "All" tab |
| **Secondary text** | `#777777` / `#A9A9A9` | Date, time, placeholders, "Cancel", inactive tab text |
| **Borders / inactive checkbox** | `#CCCCCC` | Unchecked checkbox, input borders |
| **White** | `#FFFFFF` | Plus icon, checkmarks, text on dark/colored buttons |
| **Pending accent** | `#FFA000` / `#FFC107` | Active "Pending" filter tab |
| **Completed accent** | `#009688` / `#20B2AA` | Active "Completed" tab, checked checkbox |

### Category icons (Add a task)

| Category | Hex |
|----------|-----|
| Personal | `#87CEEB` / `#6A8DFF` |
| Work | `#FF6347` / `#FF7385` |
| Health | `#8A2BE2` / `#778899` |
| Family | `#D2691E` / `#DEB887` |
| Learning | `#FFD700` / `#F7DC6F` |

---

## 2. Dimensions

### General layout & spacing

| Element | Value | Notes |
|---------|-------|--------|
| Horizontal padding | ~5% of screen width | ~16–20 dp or `0.05 * screenWidth` |
| Base unit | 8 dp | Use multiples (8, 16, 24) for margins/padding |
| Vertical spacing | 8, 16, 24 dp | Consistent rhythm |

### Header (Tasks / Pending / Completed)

| Element | Value | Scalable |
|---------|-------|----------|
| Header container | Top of screen | `minHeight` ~56 dp or `0.07 * screenHeight` |
| Title | Font 24–28 dp, bold | e.g. `0.07 * screenHeight` |
| Subtitle ("October 15") | Font 14 dp | e.g. `0.035 * screenHeight` |
| Add button (circle) | Diameter 40–48 dp | e.g. `0.12 * screenWidth` |
| Add button icon | 24×24 dp | e.g. `0.06 * screenWidth` |

### Task row (TodoItem)

| Element | Value | Scalable |
|---------|-------|----------|
| Checkbox | 24×24 dp | Fixed or `0.06 * screenWidth` |
| Gap checkbox ↔ text | 10–12 dp | 1–1.5× base unit |
| Task description | Font 16–18 dp | e.g. `0.045 * screenHeight` |
| Timestamp | Font 12–14 dp | e.g. `0.035 * screenHeight` |
| Row min height | 50–56 dp | e.g. `0.07 * screenHeight` |
| Row padding vertical | ~12 dp | Base unit × 1.5 |

### Filter bar (bottom)

| Element | Value | Scalable |
|---------|-------|----------|
| Container width | ~90% of screen | `screenWidth * 0.9` |
| Bottom offset | ~24 dp | e.g. `0.03 * screenHeight` |
| Pill border radius | 25–30 dp (or 999) | Full pill |
| Button height | 50–56 dp | e.g. `0.07 * screenHeight` |
| Button text | Font 16–18 dp | e.g. `0.045 * screenHeight` |
| Gap between buttons | 4–8 dp | Base unit |

### Add a task screen

| Element | Value | Scalable |
|---------|-------|----------|
| "Cancel" | Font ~16 dp | e.g. `0.04 * screenHeight` |
| Title ("Add a task") | Font 24–28 dp, bold | Same as main header |
| Input field | Height 40–48 dp, radius 8–10 dp | Height e.g. `0.06 * screenHeight` |
| Input padding | ~16 dp horizontal | Base unit × 2 |
| Category dropdown | Same as input | Reuse same tokens |
| Category item height | 48–56 dp | e.g. `0.07 * screenHeight` |
| Category icon | 24×24 dp | e.g. `0.06 * screenWidth` |
| Save button | Full width; height 50–56 dp; radius 8–10 dp | Same height as filter buttons |

---

## 3. Scalability (how to use)

- **Dimensions API**: Use `Dimensions.get('window').width` and `.height`; derive padding, font sizes, heights from these.
- **dp**: In React Native, StyleSheet numbers are in dp (density-independent).
- **Base unit**: Define one (e.g. 8) and use multiples for all spacing.
- **Scale from reference**: Design at 375×812; scale with `screenWidth/375` or `screenHeight/812` for fonts/heights.
- **Flex**: Prefer `flex: 1` and `minHeight` over fixed `height: '75%'` so layout works on different aspect ratios.
- **Single source**: Put layout constants in one module (e.g. `src/utils/layout.ts` and `colors.ts`) and import everywhere.

---

*Reference: `todoApp.png`*
