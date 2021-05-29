const Results = (props) => {
  return (
    <div className="flex flex-row justify-around w-full max-w-6xl px-8 py-4 mx-auto bg-white border-b border-l border-r md:py-8 md:px-12 md:w-3/4">
      <div className="flex flex-col text-center">
        <p className="mb-2 font-bold text-gray-700">Alignment score: </p>
        <p className="text-gray-700 ">{props.score}</p>
      </div>
      <div className="flex flex-col text-center">
        <p className="mb-2 font-bold text-gray-700">Optimal alignment</p>
        <p className="text-gray-700 ">{props.seq1}</p>
        <p className="text-gray-700 ">{props.seq2}</p>
      </div>
    </div>
  );
};

export default Results;
