type Props = {
  id: number;
  content: string;
};

export default function Todo({ id, content }: Props) {
  return (
    <>
      <p>{id}</p>
      <p>{content}</p>
    </>
  );
}
