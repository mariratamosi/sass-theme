import './stylesheets/main.scss';
import { useState } from "react"

const themes = ["default", "dark"]

function App() {
    const [theme, setTheme] = useState(1)

    const onThemeChange = () => {
        theme===1?setTheme(0):setTheme(1)
    }

    return (
        <div className={`App theme--${themes[theme]}`}>
            <div className="wrapper">
                <div>Theme {themes[theme]}</div>
                <button onClick={onThemeChange}>Change theme</button>
            </div>
        </div>
      );
}

export default App;
