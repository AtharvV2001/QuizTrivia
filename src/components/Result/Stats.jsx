import React from "react";
import PropTypes from "prop-types";
import { Segment, Header, Button } from "semantic-ui-react";

import { calculateScore, calculateGrade, timeConverter } from "../../utils";

const Stats = ({
  totalQuestions,
  correctAnswers,
  timeTaken,
  replayQuiz,
  resetQuiz,
}) => {
  const score = calculateScore(totalQuestions, correctAnswers);
  const { grade, remarks } = calculateGrade(score);
  const { hours, minutes, seconds } = timeConverter(timeTaken);

  return (
    <Segment className="bg-color-light">
      <Header as="h1" textAlign="center" block className="bg-color">
        {remarks}
      </Header>
      <Header as="h2" textAlign="center" block className="bg-color">
        Grade: {grade}
      </Header>
      <Header as="h3" textAlign="center" block className="bg-color">
        Total Questions: {totalQuestions}
      </Header>
      <Header as="h3" textAlign="center" block className="bg-color">
        Correct Answers: {correctAnswers}
      </Header>
      <Header as="h3" textAlign="center" block className="bg-color">
        Your Score: {score}%
      </Header>
      <Header as="h3" textAlign="center" block className="bg-color">
        Passing Score: 60%
      </Header>
      <Header as="h3" textAlign="center" block className="bg-color">
        Time Taken:{" "}
        {`${Number(hours)}h ${Number(minutes)}m ${Number(seconds)}s`}
      </Header>
      <div style={{ marginTop: 35 }}>
        <Button
          primary
          content="Play Again"
          onClick={replayQuiz}
          size="big"
          icon="redo"
          labelPosition="left"
          style={{ marginRight: 15, marginBottom: 8 }}
        />
        <Button
          color="teal"
          content="Back to Home"
          onClick={resetQuiz}
          size="big"
          icon="home"
          labelPosition="left"
          style={{ marginBottom: 8 }}
        />
      </div>
    </Segment>
  );
};

Stats.propTypes = {
  totalQuestions: PropTypes.number.isRequired,
  correctAnswers: PropTypes.number.isRequired,
  timeTaken: PropTypes.number.isRequired,
  replayQuiz: PropTypes.func.isRequired,
  resetQuiz: PropTypes.func.isRequired,
};

export default Stats;
