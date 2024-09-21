import { useState } from "react";
import ListGroup from "./components/ListGroup";
import { ContentSetings } from "./components/ContentSettings";

import { WelcomeForm } from "./components/Forms/WelcomeForm";
import { EmailForm } from "./components/Forms/EmailForm";
import { EndForm } from "./components/Forms/EndForm";
import { Settings } from "./components/Settings";
import { Options } from "./components/Settings";

function App() {
  const [sideBarIndex, setSideBarIndex] = useState(0);
  const [selectedForm, setSelectedForm] = useState(0);
  const tabList = [
    {
      label: "Content",
      onClick: () => {
        setSideBarIndex(0);
      },
    },
  ];

  const [stepList, setStepList] = useState<
    { type: string; index: number; options: Options }[]
  >([
    {
      type: "welcome",
      index: 0,
      options: {
        title: "Welcome",
        description: "This is the Starting page",
        buttonText: "Start",
        imageSrc: "./src/assets/react.svg",
      },
    },
    {
      type: "email",
      index: 1,
      options: {
        title: "Email",
        description: "Please enter your email",
        inputText: "Enter email 1",
      },
    },
    {
      type: "end",
      index: 2,
      options: {
        title: "Thank You!",
        description: "This is the End of the page",
      },
    },
  ]);
  const [settingsActive, setSettingsActive] = useState(false);

  const handleTextChange = (options: Options) => {
    setStepList((prevSteps) =>
      prevSteps.map((step, index) =>
        index === selectedForm
          ? {
              ...step,
              options: {
                ...step.options,
                title: options.title,
                description: options.description,
                buttonText: options.buttonText,
                inputText: options.inputText,
                imageSrc: options.imageSrc,
              },
            }
          : step
      )
    );
  };

  return (
    <>
      <section>
        <Settings
          options={stepList[selectedForm].options}
          active={settingsActive}
          onClosed={() => setSettingsActive(false)}
          onChange={handleTextChange}
        />
        <div
          className="sidebar"
          style={!settingsActive ? { display: "block" } : { display: "none" }}
        >
          <div className="sidebar-header">
            <nav>
              <ul className="navigation">
                <li>
                  <i className="fa-regular fa-cube"></i>
                </li>
                <li>Dashboard</li>
                <li>&gt;</li>
                <li>Form</li>
              </ul>
              <i className="fa-solid fa-gear"></i>
            </nav>
            <ListGroup buttons={tabList} />
          </div>
          <div className="sidebar-content">
            <ContentSetings
              onClick={(clicked: boolean, index: number) => {
                setSettingsActive(clicked);
                setSelectedForm(index);
              }}
            ></ContentSetings>
          </div>
        </div>
        <div className="preview">
          {stepList.map((step) => (
            <>
              {step.index === selectedForm && (
                <>
                  {step.type == "end" && (
                    <EndForm
                      title={step.options.title}
                      description={step.options.description}
                    ></EndForm>
                  )}
                  {step.type == "email" && (
                    <EmailForm
                      title={step.options.title}
                      description={step.options.description}
                      inputText={
                        step.options.inputText
                          ? step.options.inputText
                          : "Enter Text"
                      }
                    ></EmailForm>
                  )}
                  {step.type == "welcome" && (
                    <WelcomeForm
                      title={step.options.title}
                      description={step.options.description}
                      imageSrc={step.options.imageSrc}
                      buttonText={
                        step.options.buttonText
                          ? step.options.buttonText
                          : "Start"
                      }
                    ></WelcomeForm>
                  )}
                </>
              )}
            </>
          ))}
        </div>
      </section>
    </>
  );
}
export default App;
