// import React, { useState, useContext } from "react";
// import { ThemeContext } from "../context/ThemeContext";
// import "./ThemeSwitcher.css";

// function ThemeSwitcher() {
//   const [isOpen, setIsOpen] = useState(false);
//   const { theme, toggleTheme, setPrimaryColor } = useContext(ThemeContext);

//   const colors = [
//     { name: "Indigo", hex: "#2563eb" },
//     { name: "Emerald", hex: "#16a34a" },
//     { name: "Violet", hex: "#9333ea" },
//     { name: "Amber", hex: "#f97316" },
//   ];

//   const activeColorName =
//     colors.find((c) => c.hex === theme.primaryColor)?.name ||
//     theme.primaryColor.toUpperCase();

//   return (
//     <div>
//       {isOpen && (
//         <div className="theme-panel">
//           <h4>Theme Settings</h4>

//           {/* Dark Mode Switch */}
//           <div className="theme-option">
//             <span>Dark Mode</span>
//             <input
//               type="checkbox"
//               checked={theme.mode === "dark"}
//               onChange={toggleTheme}
//             />
//           </div>

//           {/* Accent Colors */}
//           <div className="theme-option">
//             <span>Accent Color</span>
//             <span className="color-name-display">{activeColorName}</span>
//           </div>
//           <div className="color-palette">
//             {colors.map((color) => (
//               <div
//                 key={color.hex}
//                 className={`color-swatch ${
//                   theme.primaryColor === color.hex ? "active" : ""
//                 }`}
//                 style={{ backgroundColor: color.hex }}
//                 onClick={() => setPrimaryColor(color.hex)}
//               />
//             ))}
//           </div>

//           {/* Custom Color Picker */}
//           <div className="custom-color-picker">
//             <span>Custom</span>
//             <input
//               type="color"
//               value={theme.primaryColor}
//               onChange={(e) => setPrimaryColor(e.target.value)}
//             />
//           </div>
//         </div>
//       )}

//       {/* Floating Button */}
//       <button
//         className="theme-switcher-fab"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         ⚙️
//       </button>
//     </div>
//   );
// }

// export default ThemeSwitcher;

// src/components/ThemeSwitcher.jsx
import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "./ThemeSwitcher.css";

function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme, setPrimaryColor } = useContext(ThemeContext);

  const colors = [
    { name: "Indigo", hex: "#2563eb" },
    { name: "Emerald", hex: "#16a34a" },
    { name: "Violet", hex: "#9333ea" },
    { name: "Amber", hex: "#f97316" },
  ];

  const activeColorName =
    colors.find((c) => c.hex === theme.primaryColor)?.name ||
    theme.primaryColor.toUpperCase();

  return (
    <div>
      {isOpen && (
        <div className="theme-panel">
          <h4>Theme Settings</h4>

          {/* Dark Mode Toggle */}
          <div className="theme-option">
            <span>Dark Mode</span>
            <input
              type="checkbox"
              checked={theme.mode === "dark"}
              onChange={toggleTheme}
            />
          </div>

          {/* Accent Colors */}
          <div className="theme-option">
            <span>Accent Color</span>
            <span className="color-name-display">{activeColorName}</span>
          </div>
          <div className="color-palette">
            {colors.map((color) => (
              <div
                key={color.hex}
                className={`color-swatch ${
                  theme.primaryColor === color.hex ? "active" : ""
                }`}
                style={{ backgroundColor: color.hex }}
                onClick={() => setPrimaryColor(color.hex)}
              />
            ))}
          </div>

          {/* Custom Color Picker */}
          <div className="custom-color-picker">
            <span>Custom</span>
            <input
              type="color"
              value={theme.primaryColor}
              onChange={(e) => setPrimaryColor(e.target.value)}
            />
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        className="theme-switcher-fab"
        onClick={() => setIsOpen(!isOpen)}
      >
        ⚙️
      </button>
    </div>
  );
}

export default ThemeSwitcher;
