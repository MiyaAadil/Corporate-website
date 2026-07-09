import AppRoutes from './routes/AppRoutes'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <>
    <Toaster position="bottom-center" toastOptions={{
    success: {
      style: {
        background: 'green',
        color: '#ffffff',
      },
    },
    error: {
      style: {
        background: 'red',
        color: '#ffffff',
      },
    },
  }} />
    <AppRoutes />
    </>
      
  )
}

export default App
