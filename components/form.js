import ReactToggle from "react-toggle";
import "react-toggle/style.css";

const Form = (props) => {
  let title = props.toolType === true ? "Needleman-Wunsch" : "Smith-Waterman";
  return (
    <div>
      <div className="flex-col w-full max-w-6xl px-8 py-4 mx-auto bg-white border-t border-l border-r md:py-8 md:px-12 md:w-3/4">
        <div className="flex flex-col items-center justify-between mb-8 md:flex-row">
          <h1 className="mb-4 text-xl md:text-2xl md:mb-0">{title}</h1>
          <div className="flex flex-col items-center justify-center align-items">
            <ReactToggle className="" onClick={props.handleClick} />
            <label className="mt-2 text-xs font-bold text-center text-gray-700 ">
              Toggle algorithms
            </label>
          </div>
        </div>
        <div className="flex flex-col justify-between ">
          <div className="mb-6">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="username"
            >
              Sequence 1
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
              onChange={props.handleSequence1Input}
              value={props.sequence1}
            />
          </div>
          <div className="mb-8">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="username"
            >
              Sequence 2
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
              onChange={props.handleSequence2Input}
              value={props.sequence2}
            />
          </div>
          <div>
            <div className="flex justify-between w-full mb-8">
              <label className="block mb-2 text-sm font-bold text-gray-700">
                BLOSUM62
                <input
                  type="radio"
                  name="scoretype"
                  className="ml-4 text-red-500 rounded"
                  onClick={() => props.handleScoreType("blosum")}
                  defaultChecked
                />
              </label>
              <label className="block mb-2 text-sm font-bold text-gray-700">
                CUSTOM
                <input
                  type="radio"
                  name="scoretype"
                  className="ml-4 text-pink-500 rounded"
                  onClick={() => props.handleScoreType("custom")}
                />
              </label>
            </div>
          </div>
          <div className="flex justify-between w-full mb-6">
            <div className="flex flex-col">
              {props.scoreType === "custom" && props.toolType && (
                <>
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="username"
                  >
                    Match Score
                  </label>
                  <input
                    type="number"
                    className="w-16 p-1 mx-auto text-pink-500 border rounded"
                    onChange={props.handleMatchScore}
                    value={props.matchScore}
                  />
                </>
              )}
            </div>
            <div className="flex flex-col">
              {props.toolType && (
                <>
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="username"
                  >
                    Gap Score
                  </label>
                  <input
                    type="number"
                    className="w-16 p-1 mx-auto text-pink-500 border rounded"
                    onChange={props.handleGapPenalty}
                    value={props.gapPenalty}
                  />
                </>
              )}
            </div>
            <div className="flex flex-col">
              {props.scoreType === "custom" && props.toolType && (
                <>
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="username"
                  >
                    Miss Score
                  </label>
                  <input
                    type="number"
                    className="w-16 p-1 mx-auto text-pink-500 border rounded"
                    onChange={props.handleMissScore}
                    value={props.missScore}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
