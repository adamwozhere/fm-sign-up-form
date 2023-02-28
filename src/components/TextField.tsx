import { UseFormRegisterReturn } from 'react-hook-form';

interface TextFieldProps {
  id: string;
  label: string;
  error: string;
  placeholder?: string;
  type?: 'text' | 'password' | 'email';
  fieldProps?: UseFormRegisterReturn;
}

export default function TextField(props: TextFieldProps) {
  return (
    <div className="input-field">
      <label htmlFor={props.id} className="visually-hidden">
        First Name
      </label>
      <input
        type={props.type ?? 'text'}
        id={props.id}
        placeholder={props.placeholder}
        aria-invalid={props.error ? 'true' : 'false'}
        {...(props.fieldProps ?? {})}
      />

      {props.error ? (
        <span className="error-text" role="alert">
          {props.error}
        </span>
      ) : null}
    </div>
  );
}

