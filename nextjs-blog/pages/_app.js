import { useRouter } from 'next/router';
import { useEffect } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Redirigir a login si no está autenticado
    const isAuthenticated = false; // Cambiar por lógica real de autenticación
    if (!isAuthenticated && !router.pathname.startsWith('/auth')) {
      router.push('/auth/login');
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;