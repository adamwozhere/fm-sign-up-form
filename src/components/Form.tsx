import { SubmitHandler, useForm } from 'react-hook-form';
import { User, UserSchema } from '../schemas/User';
import { zodResolver } from '@hookform/resolvers/zod';
import TextField from './TextField';
import Button from './Button';

export default function Form() {
  const {
    register,

    handleSubmit,
    formState: { errors },
  } = useForm<UserSchema>({ resolver: zodResolver(User) });

  const onSubmit: SubmitHandler<UserSchema> = (data) => {
    alert('Successfully submitted! See console log for form object data');
    console.log(data);
  };

  return (
    <form className="card form" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="First Name"
        placeholder="First Name"
        id="input-first-name"
        fieldProps={register('firstName')}
        error={errors.firstName?.message as string}
      />
      <TextField
        label="Last Name"
        placeholder="Last Name"
        id="input-last-name"
        fieldProps={register('lastName')}
        error={errors.lastName?.message as string}
      />
      <TextField
        label="Email Address"
        placeholder="Email Address"
        id="input-email"
        fieldProps={register('email')}
        error={errors.email?.message as string}
      />
      <TextField
        label="Password"
        placeholder="Password"
        id="input-password"
        type="password"
        fieldProps={register('password')}
        error={errors.password?.message as string}
      />
      <Button type="submit" label="Claim your free trial" />
      <small>
        By clicking the button, you are agreeing to our{' '}
        <a href="#">Terms and Services</a>
      </small>
    </form>
  );
}

