import { createContext, useContext, useState } from "react";

const TimeContext = createContext(null);

export const TimeProvider = ({ children }) => {
  const [time, setTime] = useState(0);
  const [task, setTasks] = useState([]);   // 👈 THIS WAS MISSING

  return (
    <TimeContext.Provider value={{ time, setTime, task, setTasks }}>
      {children}
    </TimeContext.Provider>
  );
};

export default function useTime() {
  const ctx = useContext(TimeContext);
  if (!ctx) {
    throw new Error("useTime must be used inside TimeProvider");
  }
  return ctx;
}
