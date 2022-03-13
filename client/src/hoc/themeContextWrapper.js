import React, { useState, useEffect } from 'react';
import { ThemeContext, themes } from '../contexts/themeContext';

export default function ThemeContextWrapper(props) {
    const [theme, setTheme] = useState(themes.white);

    function changeTheme(theme) {
        setTheme(theme);
    }

    useEffect(() => {
        switch (theme) {
            case themes.light:
                document.body.classList.add('black-theme');
                break;
            case themes.dark:
            default:
                document.body.classList.remove('black-theme');
                break;
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
}