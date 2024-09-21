import { useState } from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

interface ListButtonProps {
  buttons: ButtonProps[];
}

function ListGroup({ buttons }: ListButtonProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (index: number, onClick: () => void) => {
    setSelectedIndex(index);
    onClick();
  };

  return (
    <div className="listGroup">
      <ul>
        {buttons.map((button, index) => (
          <li
            className={
              selectedIndex == index ? "tab-item tab-active" : "tab-item"
            }
            key={index}
            onClick={() => handleClick(index, button.onClick)}
          >
            {button.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
