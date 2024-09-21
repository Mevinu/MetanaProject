interface Props {
  title: string;
  description: string;
  inputText: string;
}

export function EmailForm({ title, description, inputText }: Props) {
  return (
    <>
      <h2 className="preview-before-h2">{title}</h2>
      <h3>{description}</h3>
      <div className="preview-input">
        <input type="text" placeholder={inputText} readOnly></input>
      </div>
    </>
  );
}
