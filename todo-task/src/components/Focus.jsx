import React, { useEffect, useRef, useState } from "react";
import useTime from "../contexts/Time";

function Focus() {
  const { time, setTime, task = [], setTasks } = useTime(); // fallback [] for safety
  const intervalRef = useRef(null);

  const [showInput, setShowInput] = useState(false);
  const [newTask, setNewTask] = useState("");

  const startFunc = () => {
    if (intervalRef.current || time <= 0) return;

    intervalRef.current = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const stopFunc = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const addTask = () => {
    if (!showInput) {
      setShowInput(true);
      return;
    }

    if (newTask.trim() === "") return;

    const new_Task = {
      task: newTask.trim(),
      completed: false,
      del: false,
    };

    setTasks((prev) => [...prev, new_Task]);
    setNewTask("");
    setShowInput(false);
  };

  const toggleDel = (index) => {
    setTasks((prev) =>
      prev.map((t, i) =>
        i === index ? { ...t, del: !t.del } : t
      )
    );
  };

  const delTask = () => {
    setTasks((prev) => prev.filter((t) => !t.del));
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const formatTime = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const hasSelected = task.some((t) => t.del);

  return (
    <div className="flex w-full h-[60vh] bg-pink-200 p-1 items-center">
      {/* LEFT: TIMER */}
      <div className="flex flex-col border border-black bg-yellow-100 w-[50%] h-[90%]">
        <div className="flex w-full bg-amber-300 h-[10%]">
          <span className="flex-1 text-center font-bold text-2xl border border-black">
            Today's Focus
          </span>
          <div className="bg-white border border-gray-400 w-[20%]" />
        </div>

        <div className="w-full h-[60%] bg-green-200 flex justify-center items-center">
          <span className="font-bold text-7xl border border-black px-6 py-4 bg-white">
            {formatTime(time)}
          </span>
        </div>

        <div className="flex justify-center items-center bg-green-100 h-[10%]">
          <input
            type="number"
            min="0"
            placeholder="Minutes"
            className="w-[40%] text-center font-bold text-xl border border-black"
            onChange={(e) => {
              const mins = Math.max(0, Number(e.target.value));
              setTime(mins * 60);
            }}
          />
        </div>

        <div className="flex w-full bg-amber-300 h-[10%]">
          <button
            className="bg-green-500 text-white font-bold h-full rounded hover:bg-green-700 w-[50%]"
            onClick={startFunc}
          >
            Start
          </button>

          <button
            className="bg-red-500 text-white font-bold h-full rounded hover:bg-red-700 w-[50%]"
            onClick={stopFunc}
          >
            Pause
          </button>
        </div>
      </div>

      {/* RIGHT: TASKS */}
      <div className="flex flex-col border border-black bg-yellow-100 w-[50%] h-[90%] justify-center items-center">
        <div className="border border-black m-2 h-[10%] w-[90%] flex justify-center items-center">
          <span className="text-black font-bold border border-amber-500">
            TASKS
          </span>
        </div>

        <div className="h-full w-[90%] border border-gray-800 m-2 flex flex-col items-center">
          {task.map((t, index) => (
            <div
              key={index}
              className="border border-black m-2 p-2 flex items-center gap-2 w-[90%]"
            >
              <input
                type="checkbox"
                id={`task-${index}`}
                checked={t.del}
                onChange={() => toggleDel(index)}
              />
              <label htmlFor={`task-${index}`}>{t.task}</label>
            </div>
          ))}

          {showInput && (
            <input
              type="text"
              className="border border-black p-2 m-2 w-[90%]"
              placeholder="Enter task..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
          )}

          <button
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 ml-2 mt-2"
            onClick={addTask}
          >
            {showInput ? "SAVE TASK" : "ADD TASK"}
          </button>

          {hasSelected && (
            <button
              className="bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-red-900 m-2"
              onClick={delTask}
            >
              DELETE TASK
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Focus;
