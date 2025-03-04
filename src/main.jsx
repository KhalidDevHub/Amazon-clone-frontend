import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DateProvider } from './Components/DateProvider/DateProvider.jsx'
import { reducer, initialState } from './utility/reducer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DateProvider
      reducer={reducer}
      initialState={initialState}
    >
    <App />
    </DateProvider>
  </StrictMode>,
)
