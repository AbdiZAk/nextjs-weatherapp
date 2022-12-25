import styles from './Input.module.scss';


const Input = ({type, placeHolder, handleChange}) => {

  return (
    <input
        type={type}
        placeholder={placeHolder}
        className={styles.input_field} 
        onChange={handleChange}
     />
      
    
  )
}

export default Input
