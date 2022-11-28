import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <GitHubCalendar
        username="Sanjay-V"
        blockSize={15}
        blockMargin={5}
        color="#E9AD35"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;