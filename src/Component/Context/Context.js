import { createContext, useState } from "react";


export const Theme = createContext(null);


export default function Context({ children }) {
    const [theme, setTheme] = useState('Light');

    return (
        <Theme.Provider value={{ theme, setTheme }}>
            {children}
        </Theme.Provider>
    );
}