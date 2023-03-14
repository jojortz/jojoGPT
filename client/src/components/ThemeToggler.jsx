import React from 'react';


const ThemeToggler = (props) => {
   const { themeToggler } = props;
   return (
      <button onClick={themeToggler}>Switch Theme ☀️ 🌙</button>
   );
};

export default ThemeToggler;