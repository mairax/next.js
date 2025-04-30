import { useState } from 'react';
import styles from '../../styles/Products.module.css';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    description: ''
  });

  const handleAddProduct = (e) => {
    e.preventDefault();
    setProducts([...products, newProduct]);
    setNewProduct({ name: '', price: '', description: '' });
  };

  return (
    <div className={styles.productsContainer}>
      <h1>Gestión de Productos</h1>
      
      <div className={styles.productForm}>
        <h2>Agregar Producto</h2>
        <form onSubmit={handleAddProduct}>
          <div className={styles.formGroup}>
            <label>Nombre</label>
            <input
              type="text"
              value={newProduct.name}
              onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Precio</label>
            <input
              type="number"
              value={newProduct.price}
              onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Descripción</label>
            <textarea
              value={newProduct.description}
              onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
              required
            />
          </div>
          <button type="submit" className={styles.addButton}>
            Agregar Producto
          </button>
        </form>
      </div>

      <div className={styles.productsList}>
        <h2>Lista de Productos</h2>
        {products.length > 0 ? (
          <ul>
            {products.map((product, index) => (
              <li key={index} className={styles.productItem}>
                <h3>{product.name}</h3>
                <p>Precio: ${product.price}</p>
                <p>{product.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay productos agregados</p>
        )}
      </div>
    </div>
  );
}