import React, { useState } from "react";

import Head from "next/head";
import Form from "../components/form";
import Matrix from "../components/matrix";
import Results from "../components/results";
import SequenceAligner from "../utils/sequence-alignment";
import Navbar from "../components/navbar";

export default function Home() {
  const [toolType, setToolType] = useState(true);
  const [sequence1, setSequence1] = useState("AND");
  const [sequence2, setSequence2] = useState("SEND");
  const [scoreType, setScoreType] = useState("blosum");
  const [gapPenalty, setGapPenalty] = useState(-8);
  const [matchScore, setmatchScore] = useState(0);
  const [missScore, setmissScore] = useState(0);

  const toggleToolType = () => {
    setToolType(!toolType);
  };

  const updateSequence1 = (event) => {
    setSequence1(event.target.value.toUpperCase());
  };

  const updateSequence2 = (event) => {
    setSequence2(event.target.value.toUpperCase());
  };

  const toggleScoreType = (s) => {
    setScoreType(s);
  };

  const handleGapPenalty = (e) => {
    setGapPenalty(e.target.value);
  };

  const handleMatchScore = (e) => {
    setmatchScore(e.target.value);
  };

  const handleMissScore = (e) => {
    setmissScore(e.target.value);
  };

  let sequenceAligner = new SequenceAligner(
    sequence1,
    sequence2,
    matchScore,
    missScore,
    gapPenalty,
    toolType,
    scoreType
  );

  var results = sequenceAligner.getResults();

  return (
    <>
      <Head>
        <title>Protein Sequence Aligner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="container py-12 mx-auto">
        <Form
          handleClick={() => toggleToolType()}
          toolType={toolType}
          handleSequence1Input={updateSequence1}
          handleSequence2Input={updateSequence2}
          sequence1={sequence1}
          sequence2={sequence2}
          handleScoreType={toggleScoreType}
          scoreType={scoreType}
          handleGapPenalty={handleGapPenalty}
          gapPenalty={gapPenalty}
          handleMatchScore={handleMatchScore}
          matchScore={matchScore}
          handleMissScore={handleMissScore}
          missScore={missScore}
        />
        <Matrix
          toolType={toolType}
          sequence1={sequence1}
          sequence2={sequence2}
          scoreType={scoreType}
          gapPenalty={gapPenalty}
          matchScore={matchScore}
          missScore={missScore}
        />
        <Results
          score={results.score}
          seq1={results.seq1}
          seq2={results.seq2}
        />
      </div>
    </>
  );
}
