type Response = {
  id: string;
  name: string;
};

type Props = {
  name: string;
  data?: Response;
};

export const Header = ({ name }: Props) => {
  return (
    <header>
      <h2>Hello {name}!</h2>
    </header>
  );
};
