import {Button, Form, Row, Col, Spinner, Alert} from 'react-bootstrap';
import Input from '@/commponents/forms/input/input';
import UseLogin from '@/hooks/UseLogin';

const Login = () => {
  const {searchParams, handleSubmit,onSubmit, register,errors,handleChange, status} = UseLogin();
  return (<>
<Row className='global pt-5'>
  <Col md={{span:6 , offset:3}}>
  {searchParams.get('message') === 'created_account' &&<Alert variant="success">
    Your account has been successfully created, please login.</Alert>}
  {searchParams.get('message') === 'login_required' &&<Alert variant="success">
    You have logged out successfully. Please log in again to continue.</Alert>}
  <Form onSubmit={handleSubmit(onSubmit)}>
  <Input label='Email address' type='email'
    name='email' register={register}
    error={status === "notAvailable" && !errors.email?.message ?
    'The email is invalid!' : errors.email?.message}
    placeholder="Enter email" />
    <Input label='Password' type='password'
    name='password' register={register}
    placeholder="Password"
    error={ errors.password?.message ? errors.password?.message: status === 'errorPassword' ? 
      "The password you entered is incorrect. Please try again.":''}
      onChange={handleChange}/>
    <Button variant="primary" type="submit"
    disabled={status === 'checking'}>
      {status === 'checking' ? (<><Spinner animation='border' size='sm'></Spinner> Loading...</>) 
              : ('Submit')}
    </Button>
    {status === 'failed' && <Alert className='mt-2' variant="danger">
      Unexpected Error, please try again.</Alert>}
  </Form>
  </Col>
</Row>
</>
  )
}

export default Login;

