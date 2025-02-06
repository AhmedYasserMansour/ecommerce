import { Button, Form, Row, Col, Spinner, Container } from 'react-bootstrap';
import Input from '@/commponents/forms/input/input';
import UseRegister from '@/hooks/UseRegister';

const Register = () => {
  const {handleSubmit,onSubmit, emailOnBlurHandler, errors, register, isDisabled, status} = UseRegister()
  return (
    <Container className='p-5'>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <Input
              label="First Name"
              type="text"
              name="firstName"
              register={register}
              error={errors.firstName?.message}
              placeholder="First Name"
            />
            <Input
              label="Last Name"
              type="text"
              name="lastName"
              register={register}
              error={errors.lastName?.message}
              placeholder="Last Name"
            />
            <Input
              label="Email address"
              type="email"
              name="email"
              register={register}
              error={errors.email?.message ? errors.email?.message : status === "notAvailable" ? 
                "The email address is already in use. Please try a different email address."
                :status === 'failed' ? 'Error from the Server.' : ''}
              onBlur={emailOnBlurHandler}
              placeholder="Enter email"
              success={status === "available" ? 
              "The email address is available and can be used.":""}
              formText={status === 'checking' ? "Checking email availability, please wait..." : ''}
              disabled={status === 'checking' || status === 'loading'}/>
            
            <Input
              label="Password"
              type="password"
              name="password"
              register={register}
              error={errors.password?.message}
              placeholder="Password"
            />
            <Input
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              register={register}
              error={errors.confirmPassword?.message}
              placeholder="Confirm Password"
            />
            <Button variant="primary" type="submit"
             disabled={isDisabled}
             >
              {status === 'loading' ? (<><Spinner animation='border' size='sm'></Spinner> Loading...</>) 
              : ('Submit')}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;








