interface Props {
  title: string;
  description: string;
}

export function EndForm({ title, description }: Props) {
  return (
    <>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </>
  );
}
