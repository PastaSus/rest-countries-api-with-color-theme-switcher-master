// src/context/ThemeContext.js
import { createContext, useContext } from "react";

// 1. Create the Context object
export const ThemeContext = createContext(null);

// 2. Custom hook for easy consumption
// This is where useContext is actually used!
export const useTheme = () => useContext(ThemeContext);
