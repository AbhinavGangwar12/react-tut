import React from 'react';

function Focus() {
    return (
        <>
            <div className="flex w-full h-[60vh] bg-pink-200 p-1 items-center">
                
                <div
                    id="timer"
                    className="flex flex-col border border-black bg-yellow-100 w-[50%] h-[90%]"
                >
                    <div className="flex w-full bg-amber-300 h-[10%]">
                        <span className="flex-1 text-center font-bold text-2xl border border-black">
                            Today's Focus
                        </span>
                        <div className="bg-white border border-gray-400 w-[20%]"></div>
                    </div>

                    <div className="w-full h-[60%] bg-green-200 flex justify-center items-center">
                        <span className="text-center font-bold text-xl">11:11</span>
                    </div>
                    <div className="flex w-full bg-amber-300 h-[10%]">
                        <button type="button"
                            className="bg-green-500 text-white font-bold h-full rounded hover:bg-green-700 mb-2 w-[50%]"
                        >Start</button>
                        <button type="button"
                            className="bg-red-500 text-white font-bold h-full rounded hover:bg-red-700 mb-2 w-[50%]"
                        >Pause</button>
                    </div>

                </div>

                <div
                    id="tasks"
                    className="flex border border-black bg-yellow-100 w-[50%] h-[90%]"
                >
                </div>

            </div>
        </>
    );
}

export default Focus;
