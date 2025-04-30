import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Auth.module.css';
import { seedUser } from '../../config/seedUser'; // Importar el usuario seed

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Usar el usuario seed para autenticación
    const isAuthenticated = email === seedUser.email && password === seedUser.password;
    if (isAuthenticated) {
      router.push('/products');
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authCard}>
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles.authButton}>
            Iniciar Sesión
          </button>
        </form>
        <p className={styles.authSwitch}>
          ¿No tienes cuenta? <a href="/auth/register">Regístrate</a>
        </p>
      </div>
    </div>
  );
}