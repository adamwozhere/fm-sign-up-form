interface ButtonProps {
  label: string;
  id?: string;
  type?: 'button' | 'submit';
}

export default function Button(props: ButtonProps) {
  return (
    <button id={props.id} type={props.type ?? 'button'}>
      {props.label}
    </button>
  );
}

