import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { QueryClient, QueryClientProvider } from "react-query";



const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5*60*1000,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <QueryClientProvider client={queryClient}>
       <App />
    </QueryClientProvider>
  </React.StrictMode>
);

