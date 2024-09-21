interface Props {
  onClick: (clicked: boolean, index: number) => void;
}

export function ContentSetings({ onClick }: Props) {
  return (
    <>
      <div className="side-bar-topic">
        <div className="side-bar-topic-heading">
          <i className="fa-solid fa-layer-group"></i>
          <span>Steps</span>
        </div>
        <p>The steps users will take to complete the form</p>
      </div>
      <div className="step" onClick={() => onClick(true, 0)}>
        Welcome Sreen
      </div>
      <div className="step" onClick={() => onClick(true, 1)}>
        Email
      </div>
      <div className="step" onClick={() => onClick(true, 2)}>
        End Screen
      </div>
    </>
  );
}
