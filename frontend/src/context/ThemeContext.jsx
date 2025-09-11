// import React, { createContext, useState, useEffect } from "react";

// export const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const getInitialTheme = () => {
//     const savedTheme = localStorage.getItem("pharmaTheme");
//     return savedTheme
//       ? JSON.parse(savedTheme)
//       : { mode: "light", primaryColor: "#2563eb" };
//   };

//   const [theme, setTheme] = useState(getInitialTheme);

//   // Helper to darken primary color
//   const darkenColor = (hex, percent) => {
//     let r = parseInt(hex.substring(1, 3), 16);
//     let g = parseInt(hex.substring(3, 5), 16);
//     let b = parseInt(hex.substring(5, 7), 16);
//     r = Math.floor((r * (100 - percent)) / 100);
//     g = Math.floor((g * (100 - percent)) / 100);
//     b = Math.floor((b * (100 - percent)) / 100);
//     return `#${((1 << 24) + (r << 16) + (g << 8) + b)
//       .toString(16)
//       .slice(1)}`;
//   };

//   useEffect(() => {
//     const root = document.documentElement;

//     // Light/Dark classes
//     if (theme.mode === "dark") {
//       root.classList.add("theme-dark");
//     } else {
//       root.classList.remove("theme-dark");
//     }

//     // Set CSS variables
//     root.style.setProperty("--primary-color", theme.primaryColor);
//     root.style.setProperty(
//       "--primary-dark-color",
//       darkenColor(theme.primaryColor, 15)
//     );

//     localStorage.setItem("pharmaTheme", JSON.stringify(theme));
//   }, [theme]);

//   const toggleTheme = () =>
//     setTheme((prev) => ({
//       ...prev,
//       mode: prev.mode === "light" ? "dark" : "light",
//     }));

//   const setPrimaryColor = (color) =>
//     setTheme((prev) => ({ ...prev, primaryColor: color }));

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme, setPrimaryColor }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };
// src/context/ThemeContext.jsx
import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("pharmaTheme");
    return savedTheme
      ? JSON.parse(savedTheme)
      : { mode: "light", primaryColor: "#2563eb" }; // default indigo
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // Helper: darken primary color
  const darkenColor = (hex, percent) => {
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);

    r = Math.floor((r * (100 - percent)) / 100);
    g = Math.floor((g * (100 - percent)) / 100);
    b = Math.floor((b * (100 - percent)) / 100);

    return `#${((1 << 24) + (r << 16) + (g << 8) + b)
      .toString(16)
      .slice(1)}`;
  };

  // useEffect(() => {
  //   const root = document.documentElement;

  //   // Dark/Light toggle
  //   if (theme.mode === "dark") {
  //     root.classList.add("theme-dark");
  //   } else {
  //     root.classList.remove("theme-dark");
  //   }

  //   // Apply variables
  //   root.style.setProperty("--primary-color", theme.primaryColor);
  //   root.style.setProperty(
  //     "--primary-dark-color",
  //     darkenColor(theme.primaryColor, 15)
  //   );

  //   localStorage.setItem("pharmaTheme", JSON.stringify(theme));
  // }, [theme]);

  useEffect(() => {
  const root = document.documentElement;

  // Clear both first
  root.classList.remove("theme-dark", "theme-light");
  root.classList.add(theme.mode === "dark" ? "theme-dark" : "theme-light");

  // Apply CSS variables
  root.style.setProperty("--primary-color", theme.primaryColor);
  root.style.setProperty(
    "--primary-dark-color",
    darkenColor(theme.primaryColor, 15)
  );

  localStorage.setItem("pharmaTheme", JSON.stringify(theme));
}, [theme]);


  const toggleTheme = () =>
    setTheme((prev) => ({
      ...prev,
      mode: prev.mode === "light" ? "dark" : "light",
    }));

  const setPrimaryColor = (color) =>
    setTheme((prev) => ({ ...prev, primaryColor: color }));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setPrimaryColor }}>
      {children}
    </ThemeContext.Provider>
  );
};
