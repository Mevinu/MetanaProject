interface Props {
  title: string;
  description: string;
  buttonText: string;
  imageSrc?: string | null;
}

export function WelcomeForm({
  title,
  description,
  buttonText,
  imageSrc,
}: Props) {
  return (
    <>
      <div
        className="flex"
        style={{ justifyContent: "space-between", gap: "30px" }}
      >
        <div
          className="flex-column flex-30gap"
          style={{
            justifyContent: "center",
          }}
        >
          <h1>{title}</h1>
          <h2>{description}</h2>
          <button className="btn btn-black btn-after">{buttonText}</button>
        </div>
        {imageSrc != "." && imageSrc ? (
          <img className="welcome-image" src={imageSrc} />
        ) : null}
      </div>
    </>
  );
}
