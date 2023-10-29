import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button, Popup } from "semantic-ui-react";
import Swal from "sweetalert2";

import { timeConverter } from "../../utils";
import "./style.css";

const Countdown = ({ countdownTime, timeOver, setTimeTaken }) => {
  const totalTime = countdownTime * 1000;
  const [timerTime, setTimerTime] = useState(totalTime);
  const { hours, minutes, seconds } = timeConverter(timerTime);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = timerTime - 1000;

      if (newTime >= 0) {
        setTimerTime(newTime);
      } else {
        clearInterval(timer);

        Swal.fire({
          icon: "info",
          title: `Oops! Time's up.`,
          text: "See how you did!",
          confirmButtonText: "Check Results",
          timer: 5000,
          willClose: () => timeOver(totalTime - timerTime),
        });
      }
    }, 1000);

    return () => {
      clearInterval(timer);
      setTimeTaken(totalTime - timerTime + 1000);
    };

    // eslint-disable-next-line
  }, [timerTime]);

  return (
    <Button.Group size="massive" basic floated="right">
      <Popup
        content="Hours"
        trigger={
          <Button className="countdown-btn" active>
            {hours}
          </Button>
        }
        position="bottom left"
      />
      <Popup
        content="Minutes"
        trigger={
          <Button className="countdown-btn" active>
            {minutes}
          </Button>
        }
        position="bottom left"
        className="countdown-btn"
      />
      <Popup
        content="Seconds"
        trigger={
          <Button className="countdown-btn" active>
            {seconds}
          </Button>
        }
        position="bottom left"
        className="countdown-btn"
      />
    </Button.Group>
  );
};

Countdown.propTypes = {
  countdownTime: PropTypes.number.isRequired,
  timeOver: PropTypes.func.isRequired,
  setTimeTaken: PropTypes.func.isRequired,
};

export default Countdown;
