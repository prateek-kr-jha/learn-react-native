# Error Report: No Safe Area Value Available

## Error Message

```
console.js:662 Error: No safe area value available. Make sure you are rendering <SafeAreaProvider> at the top of your app.
    at App (App.tsx:29:35)
```

## Root Cause

The `useSafeAreaInsets()` hook was being called **before** the `SafeAreaProvider` was rendered in the component tree.

### Code Issue (Line 29)

```typescript
function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const insets = useSafeAreaInsets(); // ❌ Called before SafeAreaProvider

  return (
    <SafeAreaProvider>
      {' '}
      // Provider comes AFTER the hook call
      <View style={{ flex: 1 }}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <TodoScreen />
      </View>
    </SafeAreaProvider>
  );
}
```

## Solution

Remove the `useSafeAreaInsets()` hook call since it's not being used anywhere in the component. The `SafeAreaProvider` wraps the entire app correctly, but the hook doesn't need to be called at the App component level if the insets aren't being applied.

### Fixed Code

```typescript
function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <View style={{ flex: 1 }}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <TodoScreen />
      </View>
    </SafeAreaProvider>
  );
}
```

## Files Modified

- `App.tsx` - Removed unused `useSafeAreaInsets()` hook call

## How to Prevent This

- Always ensure hooks from context providers are called **inside** the provider component
- If you don't need the safe area insets, don't call the hook
- SafeAreaProvider should wrap all components that need access to safe area values

---

# Error Report: Cancel Button Positioning in AddTodoModal

## Error Message

Cancel button is going out of screen in AddTodoModal.

## Root Cause

The cancel button positioning issue occurs because:

1. The `center` view uses `alignItems: 'center'` which centers children horizontally
2. When `width: '100%'` is applied to the cancel button, it takes the full width of the screen but may extend beyond safe area boundaries on devices with notches
3. The button needs to respect iOS safe area insets to avoid overlapping the notch area
4. To position it below the notch and align left, the button must either:
   - Use `paddingLeft` with `alignItems: 'flex-start'` on parent
   - Or use explicit safe area inset values

## Solution (No Code)

To fix the cancel button positioning:

- Change parent container to use `alignItems: 'flex-start'` for left alignment
- Add `paddingTop` to push content below the notch
- Or use `useSafeAreaInsets()` hook to get the top inset value and apply proper spacing
- Remove `width: '100%'` if not needed to prevent overflow
