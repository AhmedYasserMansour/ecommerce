import {Path, FieldValues, UseFormRegister} from 'react-hook-form';
import {Form, FormText} from 'react-bootstrap';

type TInput<TFieldValue extends FieldValues> = {
    label : string,
    name: Path<TFieldValue>,
    type?: string,
    register: UseFormRegister<TFieldValue>,
    error?: string,
    placeholder: string
    onBlur? : (e:React.FocusEvent<HTMLInputElement>)=> void,
    onChange? : (e:React.FocusEvent<HTMLInputElement>)=> void,
    success?: string,
    formText? : string,
    disabled? : boolean,
    errorPassword? : string
}

const Input = <TFieldValue extends FieldValues> (
    {label, name, type, register, error,placeholder, onBlur, success, formText,disabled, errorPassword, onChange}
    :TInput<TFieldValue>) => {
      const onBlurHandler = (e:React.FocusEvent<HTMLInputElement>) => {
        if(onBlur) {
          onBlur(e);
          register(name).onBlur(e);
        }else {
          register(name).onBlur(e);
        }
      }
      const OnChangeHandler = (e:React.FocusEvent<HTMLInputElement>) => {
        if(onChange) {
          onChange(e);
          register(name).onChange(e);
        }else {
          register(name).onChange(e);
        }
      }
  return (
    <Form.Group className="mb-3">
    <Form.Label>{label}</Form.Label>
    <Form.Control type={type} placeholder={placeholder} {...register(name)} 
    onBlur={onBlurHandler}
    onChange={OnChangeHandler}
    isInvalid={!!error || !!errorPassword}
    isValid={!!success}
    disabled={disabled}/>
    <Form.Control.Feedback type='invalid'>{error || errorPassword}</Form.Control.Feedback>
    <Form.Control.Feedback type='valid'>{!error && success}</Form.Control.Feedback>
    {formText && <FormText muted>{formText}</FormText>}
    
  </Form.Group>
  )
}

export default Input;
