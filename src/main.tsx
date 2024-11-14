import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.tsx'
import { KindeProvider } from '@kinde-oss/kinde-auth-react'
createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <KindeProvider
		clientId="9feb6e57d4dc47e5896e64cc971edc61"
		domain="https://mohamedmourrane.kinde.com"
		redirectUri="http://localhost:5174"
		logoutUri="http://localhost:5174"	>

     <App />
     
  </KindeProvider>
   
  </StrictMode>,
)
