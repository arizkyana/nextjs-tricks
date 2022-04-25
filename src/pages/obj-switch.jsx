import {
  CameraIcon,
  DesktopComputerIcon,
  DocumentIcon,
} from "@heroicons/react/outline";

const ComponentSwitch = ({ type = "camera" }) => {
  const renderComponent = () => {
    /*
    menggunakan if statements
    */
    // if (type === "camera") return <CameraIcon className="h-10 w-10" />;
    // if (type === "desktop")
    //   return <DesktopComputerIcon className="h-10 w-10" />;
    // if (type === "document") return <DocumentIcon className="h-10 w-10" />;
    // return <></>;
    /*
    switch case statements
    */
    // switch (type) {
    //   case "camera":
    //     return <CameraIcon className="h-10 w-10" />;
    //   case "desktop":
    //     return <DesktopComputerIcon className="h-10 w-10" />;
    //   case "document":
    //     return <DocumentIcon className="h-10 w-10" />;
    //   default:
    //     return <></>;
    // }

    const objIconSwitcher = {
      camera: <CameraIcon className="h-10 w-10" />,
      desktop: <DesktopComputerIcon className="h-10 w-10" />,
      document: <DocumentIcon className="h-10 w-10" />,
    };

    return objIconSwitcher[type];
  };
  return renderComponent();
};

const ObjSwitch = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <ComponentSwitch />
    </div>
  );
};

export default ObjSwitch;
