import React from 'react';

//default value in createContext must be like the future object
export const ThemeContext = React.createContext({
    theme: '', changeTheme: () => {
        console.log('default');
    }
});
