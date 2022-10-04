import React, { useState } from "react";

const Calculator = () => {
  // declare state
  const [num, setNum] = useState("");

  // handle click
  const handleClick = (e) => {
    setNum(num.concat(e.target.value));
  };

  // handle clear(AC)
  const handleClear = () => {
    setNum("");
  };

  // handle slice(C)
  const handleSlice = () => {
    setNum(num.slice(0, -1));
  };

  // handle result(=)
  const handleResult = () => {
    try {
      setNum(eval(num).toString());
    } catch(err) {
      setNum('Error')
    }
  };

  return (
    <React.Fragment>
      <section>
        <div className="bg-gray-900 w-96 h-600 mx-auto rounded-lg overflow-hidden mt-10">
          <div className="text-gray-200 w-full font-bold text-4xl h-16 flex justify-center items-center">
            <p className="pb-1">
              CALCULATOR <span className="text-orange-500">APP</span>
            </p>
          </div>

          {/* screen */}
          <div className="w-full h-[7rem]">
            <input
              type="text"
              value={num}
              placeholder="0"
              className="w-full h-full break-all outline-none bg-black text-6xl text-white text-right pr-4"
            />
          </div>

          {/* keypad */}
          <div className="grid grid-cols-4 gap-3 p-4">
            <button
              onClick={handleClear}
              className="text-white w-20 h-20 bg-orange-500 active:bg-orange-400 text-3xl font-bold rounded-lg flex justify-center items-center shadow"
            >
              AC
            </button>
            <button
              onClick={handleSlice}
              className="text-white w-20 h-20 bg-orange-500 active:bg-orange-400 text-3xl font-bold rounded-lg flex justify-center items-center shadow"
            >
              C
            </button>
            <button
              value="/"
              onClick={handleClick}
              className="text-white w-20 h-20 bg-orange-500 active:bg-orange-400 text-3xl font-bold rounded-lg flex justify-center items-center shadow"
            >
              /
            </button>

            <button
              value='+'
              onClick={handleClick}
              className="text-white w-20 h-50 bg-orange-500 active:bg-orange-400 text-3xl font-bold rounded-lg flex justify-center items-center shadow row-span-2"
            >
              +
            </button>

            <button
              value="7"
              onClick={handleClick}
              className="text-white w-20 h-20 bg-gray-800  active:bg-gray-700 text-3xl font-bold rounded-lg flex justify-center items-center shadow"
            >
              7
            </button>
            <button
              value="8"
              onClick={handleClick}
              className="text-white w-20 h-20 bg-gray-800 active:bg-gray-700 text-3xl font-bold rounded-lg flex justify-center items-center shadow"
            >
              8
            </button>
            <button
              value="9"
              onClick={handleClick}
              className="text-white w-20 h-20 bg-gray-800 active:bg-gray-700 text-3xl font-bold rounded-lg flex justify-center items-center shadow"
            >
              9
            </button>
            <button
              value="4"
              onClick={handleClick}
              className="text-white w-20 h-20 bg-gray-800 active:bg-gray-700 text-3xl font-bold rounded-lg flex justify-center items-center shadow"
            >
              4
            </button>
            <button
              value="5"
              onClick={handleClick}
              className="text-white w-20 h-20 bg-gray-800 active:bg-gray-700 text-3xl font-bold rounded-lg flex justify-center items-center shadow"
            >
              5
            </button>
            <button
              value="6"
              onClick={handleClick}
              className="text-white w-20 h-20 bg-gray-800 active:bg-gray-700 text-3xl font-bold rounded-lg flex justify-center items-center shadow"
            >
              6
            </button>

            <button
              value="-"
              onClick={handleClick}
              className="text-white w-20 h-20 bg-orange-500 active:bg-orange-400 text-3xl font-bold rounded-lg flex justify-center items-center shadow"
            >
              -
            </button>
            <button
              value="1"
              onClick={handleClick}
              className="text-white w-20 h-20 bg-gray-800 active:bg-gray-700 text-3xl font-bold rounded-lg flex justify-center items-center shadow"
            >
              1
            </button>

            <button
              value="2"
              onClick={handleClick}
              className="text-white w-20 h-20 bg-gray-800 active:bg-gray-700 text-3xl font-bold rounded-lg flex justify-center items-center shadow"
            >
              2
            </button>
            <button
              value="3"
              onClick={handleClick}
              className="text-white w-20 h-20 bg-gray-800 active:bg-gray-700 text-3xl font-bold rounded-lg flex justify-center items-center shadow"
            >
              3
            </button>
            <button
              value="*"
              onClick={handleClick}
              className="text-white w-20 h-20 bg-orange-500 active:bg-orange-400 text-3xl font-bold rounded-lg flex justify-center items-center shadow"
            >
              *
            </button>
            <button
              value="."
              onClick={handleClick}
              className="text-white w-20 h-20 bg-gray-800 active:bg-gray-700 text-3xl font-bold rounded-lg flex justify-center items-center shadow "
            >
              .
            </button>

            <button
              value="0"
              onClick={handleClick}
              className="text-white w-20 h-20 bg-gray-800 active:bg-gray-700 text-3xl font-bold rounded-lg flex justify-center items-center shadow"
            >
              0
            </button>
            <button
              value="="
              onClick={handleResult}
              className="text-white w-50 h-20 bg-orange-500 active:bg-orange-400 text-3xl font-bold rounded-lg flex justify-center items-center shadow col-span-2"
            >
              =
            </button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Calculator;
