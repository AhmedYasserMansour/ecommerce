import styles from './Counter.module.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const {container, totalNum, pump, icon, activeIcon } = styles;

interface ICounter {
  totalQuantity: number;
  svgIcon: JSX.Element;
  to: string,
  title : string
  isActive : boolean
}
const Counter = ({totalQuantity,svgIcon,to,title,isActive}: ICounter) => {
  const navigate = useNavigate()
  const [animate,setAnimate] = useState(false);
  const quantityStyle = `${totalNum} ${animate ? pump: ''}`
  const iconStyle = `${icon} ${isActive ? activeIcon : ''}`;
  useEffect(()=>{
    if(!totalQuantity) {
      return;
    }
    setAnimate(true);
    const debounce = setTimeout(()=>{
      setAnimate(false);
    },300);
    return ()=> clearTimeout(debounce); 
  },[totalQuantity]);
  return (
    <div className={container} onClick={()=>navigate(to)}>
     <h3 className={iconStyle}>{title}</h3>
     <div className={iconStyle}>
      {svgIcon}
      {totalQuantity > 0 && <div className={quantityStyle}>{totalQuantity}</div>}
    </div>
     </div>
  )
}

export default Counter;
