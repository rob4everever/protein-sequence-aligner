import SequenceAligner from "../utils/sequence-alignment";
import ReactTooltip from "react-tooltip";

const Matrix = (props) => {
  function buildGrid() {
    let sequenceAligner = new SequenceAligner(
      props.sequence1,
      props.sequence2,
      props.matchScore,
      props.missScore,
      props.gapPenalty,
      props.toolType,
      props.scoreType
    );

    let scoreMatrix = sequenceAligner.getScoreMatrix();
    let optimalPath = sequenceAligner.getBestPath();
    let table = [];

    for (let i = 0; i < props.sequence1.length + 2; i++) {
      //HTML table row
      let children = [];

      for (let j = 0; j < props.sequence2.length + 2; j++) {
        //Unused cells
        if (
          (i === 0) & (j === 0) ||
          (i === 0) & (j === 1) ||
          (i === 1) & (j === 0)
        ) {
          children.push(
            <td
              className="text-white bg-gray-800 border border-gray-400"
              key={i + j}
            >{` `}</td>
          );
        }

        //Left sequences (sequence 1)
        else if (i > 1 && j === 0) {
          children.push(
            <td
              className="font-bold text-white bg-gray-800 border border-gray-400"
              key={i + j}
            >{`${props.sequence1[i - 2]}`}</td>
          );
        }

        //Top sequence (sequence 2)
        else if (j > 1 && i === 0) {
          children.push(
            <td
              className="font-bold text-white bg-gray-800 border border-gray-400"
              key={i + j}
            >{`${props.sequence2[j - 2]}`}</td>
          );
        }

        //Remaining cells
        else {
          var cell = (
            <td className="border" key={i + j}>{`${
              scoreMatrix[i - 1][j - 1]
            }`}</td>
          );

          if (i === 1 && j === 1) {
            cell = (
              <td className="bg-pink-400" key={i + j}>{`${
                scoreMatrix[i - 1][j - 1]
              }`}</td>
            );
          }

          //Determine if a cell is part of the optimal path
          for (var k = 0; k < optimalPath.length; k++) {
            var x = optimalPath[k][0];
            var y = optimalPath[k][1];

            //If it is then change the cell background colour
            if (x === i && y === j) {
              cell = (
                <td
                  data-tip={sequenceAligner.getcalc()[k]}
                  className="bg-green-300"
                  key={i + j}
                >
                  {`${scoreMatrix[i - 1][j - 1]}`}
                  <ReactTooltip
                    multiline={true}
                    place="top"
                    type="dark"
                    effect="float"
                  />
                </td>
              );
            }
          }
          //Add cell to row
          children.push(cell);
        }
      }
      //Add row to the table
      table.push(<tr key={i}>{children}</tr>);
    }

    return table;
  }

  return (
    <div className="w-full max-w-6xl px-8 py-4 mx-auto bg-white border-l border-r  md:py-8 md:px-12 md:w-3/4">
      <table className="w-full table-auto">
        <tbody className="w-full border">{buildGrid()}</tbody>
      </table>
    </div>
  );
};

export default Matrix;
