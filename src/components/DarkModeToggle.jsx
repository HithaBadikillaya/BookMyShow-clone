import React, { useEffect, useState } from "react";

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const handleToggle = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        id="darkModeSwitch"
        checked={isDarkMode}
        onChange={handleToggle}
      />
      <label className="form-check-label" htmlFor="darkModeSwitch">
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </label>
    </div>
  );
}

export default DarkModeToggle;
