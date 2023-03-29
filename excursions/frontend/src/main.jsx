import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { MantineProvider } from '@mantine/core';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider 
      withNormalizeCSS
      theme={{
          headings: {
            h1: { fontSize: '1.5rem' },
            h2: { fontSize: '1.25rem' },
            h3: { fontSize: '1.5rem' },
            h4: { fontSize: '0.875rem' },
            h5: { fontSize: '0.75rem' },
            h6: { fontSize: '0.625rem' },
          }
        }}
      >
        <App />
    </MantineProvider>
  </React.StrictMode>,
)
