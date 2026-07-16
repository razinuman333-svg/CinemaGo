import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { ClerkProvider } from "@clerk/clerk-react";
import './index.css'
import App from './App.jsx'
import { AppProvider } from './context/appContext.js';


const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!clerkPubKey) {
   throw new Error('Missing Publisheble Key')
}

createRoot(document.getElementById('root')).render(
   <ClerkProvider publishableKey={clerkPubKey}>
      <BrowserRouter>
      <AppProvider>
     <App />
      </AppProvider>
      </BrowserRouter>
   </ClerkProvider>

)
