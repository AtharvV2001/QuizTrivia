import React from "react";
import PropTypes from "prop-types";
import { Table } from "semantic-ui-react";

const QNA = ({ questionsAndAnswers }) => {
  return (
    <Table celled striped selectable size="large" className="bg-color">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell className="bg-color-light">No.</Table.HeaderCell>
          <Table.HeaderCell className="bg-color-light">
            Questions
          </Table.HeaderCell>
          <Table.HeaderCell className="bg-color-light">
            Your Answers
          </Table.HeaderCell>
          <Table.HeaderCell className="bg-color-light">
            Correct Answers
          </Table.HeaderCell>
          <Table.HeaderCell className="bg-color-light">Points</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {questionsAndAnswers.map((item, i) => (
          <Table.Row key={i + 1} className="row-hover">
            <Table.Cell>{i + 1}</Table.Cell>
            <Table.Cell>{item.question}</Table.Cell>
            <Table.Cell>{item.user_answer}</Table.Cell>
            <Table.Cell>{item.correct_answer}</Table.Cell>
            <Table.Cell>{item.point}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

QNA.propTypes = {
  questionsAndAnswers: PropTypes.array.isRequired,
};

export default QNA;
