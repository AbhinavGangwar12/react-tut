import {useContext, createContext } from 'react';

const TasksContext = createContext(null);
export const TasksProvider = ({children, value}) => {
    return ( 
        <TasksContext.Provider value={value}>
        {children}
        </TasksContext.Provider>
    );
}

export default function useTasks(){
    const ctx = useContext(TasksContext);
    if(!ctx) throw new Error("useTasks must be used inside TasksProvider");
    return ctx;
}