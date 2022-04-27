import { useEffect } from "react";

useEffect(() => {});

useEffect(() => {}, []);

useEffect(() => {
  return () => {};
}, []);

const [counting, setCounting] = useState(0);

useEffect(() => {
  setCounting(counting + 1);
}, [counting]);

return <div>{counting}</div>;
