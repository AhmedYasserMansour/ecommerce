import styles from './styles.module.css';

type TProductInfo = {
    title: string,
    price: number,
    img: string,
    children?: React.ReactNode,
    style? : React.CSSProperties,
    direction?: 'row' | 'column'
    quantity?: number
}
const ProductInfo = ({title, price, img, children, style, direction = 'row', quantity} : TProductInfo) => {
  return (
          <div className={`${styles[`product-${direction}`]}`} style={style}>
            <div className={`${styles[`productImg-${direction}`]}`} style={style}>
              <img src={img} alt={title} />
            </div>
            <div className={`${styles[`productInfo-${direction}`]}`} style={style}>
              <h2 title={title}>{title}</h2>
              <h3>{price.toFixed(2)} EGP</h3>
              {quantity && <p>Total Quantity: {quantity}</p>}
              {quantity && <p>Total Price: {(quantity * price).toFixed(2)}</p>}
          {children}
            </div>
          </div>
  )
}

export default ProductInfo
