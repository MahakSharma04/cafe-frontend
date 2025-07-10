//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById("root")).render(<App/>);

//virtual dom - automatically updates the ui when changes are made unlike the old way of doing it manually updating the ui using dom getelementbyId()
//diffing algorithm - past and updated page it shows
