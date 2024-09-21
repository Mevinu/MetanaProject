import { FileUpload } from "./FileUpload";

export interface Options {
  title: string;
  description: string;
  buttonText?: string | null;
  inputText?: string | null;
  imageSrc?: string | null;
}

interface Props {
  active: boolean;
  onClosed: () => void;
  options: Options;
  onChange: (options: Options) => void;
}

export function Settings({ options, onClosed, active, onChange }: Props) {
  return (
    <>
      <div
        className="sidebar"
        style={active ? { display: "block" } : { display: "none" }}
      >
        <div className="sidebar-header">
          <nav>
            <ul className="navigation">
              <li>
                <i className="fa-solid fa-gear"></i>
              </li>
              <li>Settings</li>
            </ul>
            <i className="fa-solid fa-xmark" onClick={onClosed}></i>
          </nav>
        </div>
        <div className="sidebar-container flex-column flex-10gap">
          <p>
            <span className="text-black p-big">Title</span>
          </p>
          <input
            className="settings-input"
            type="text"
            value={options.title || ""}
            onChange={(event) => {
              onChange({
                ...options,
                title: event.target.value || "",
              });
            }}
          />

          <p>
            <span className="text-black p-big">Description</span>
          </p>
          <input
            className="settings-input"
            type="text"
            value={options.description || ""}
            onChange={(event) => {
              onChange({
                ...options,
                description: event.target.value || "",
              });
            }}
          />

          {options.buttonText !== undefined && (
            <>
              <p>
                <span className="text-black p-big">Button Text</span>
              </p>
              <input
                className="settings-input"
                type="text"
                value={options.buttonText || ""}
                onChange={(event) => {
                  onChange({
                    ...options,
                    buttonText: event.target.value || "",
                  });
                }}
              />
            </>
          )}

          {options.inputText !== undefined && (
            <>
              <p>
                <span className="text-black p-big">Input Text</span>
              </p>
              <input
                className="settings-input"
                type="text"
                value={options.inputText || ""}
                onChange={(event) => {
                  onChange({
                    ...options,
                    inputText: event.target.value || "",
                  });
                }}
              />
            </>
          )}
          {options.imageSrc ? (
            <>
              <FileUpload
                onChange={(event) => {
                  onChange({
                    ...options,
                    imageSrc: event,
                  });
                }}
              ></FileUpload>
              {options.imageSrc != "." ? (
                <>
                  <div
                    className="settings-image"
                    style={{ backgroundImage: `url(${options.imageSrc})` }}
                  />
                  <button
                    className="file-btn"
                    onClick={() => {
                      onChange({
                        ...options,
                        imageSrc: ".",
                      });
                    }}
                  >
                    Remove Image
                  </button>
                </>
              ) : null}
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}
