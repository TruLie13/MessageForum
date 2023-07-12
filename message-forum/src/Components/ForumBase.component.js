import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, Card } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import "./ForumBase.scss";
import { useState } from "react";
import { mockUsers } from "../mockData";
import { mockData } from "../mockData";

const ForumBase = () => {
  const [thumbsUpTrue, setThumbsUpTrue] = useState(null);

  const thumbFlip = () => {
    setThumbsUpTrue(!thumbsUpTrue);
  };

  console.log("za mock", mockData);

  return (
    <div className="forumBase">
      {
  mockData.events.map((event) => (
    <Accordion key={event.eventID} body={event}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Community Event Forum</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className="forumMessageCard">
          {event.messages.map((message) => (
            <Card key={message.messageID}>
              <Typography>{message.messageBody}</Typography>
              <div>
                {message.author} | {message.authorScore} win rate
              </div>
              <div className="likeDislikeButtons">
                <Button onClick={thumbFlip}>
                  {thumbsUpTrue === null || thumbsUpTrue === false ? (
                    <ThumbUpAltOutlinedIcon />
                  ) : (
                    <ThumbUpIcon />
                  )}
                </Button>
                <Button>
                  {thumbsUpTrue === null || thumbsUpTrue === true ? (
                    <ThumbDownAltOutlinedIcon />
                  ) : (
                    <ThumbDownIcon />
                  )}
                </Button>
                {message.messageVotes}
              </div>
            </Card>
          ))}
        </div>
      </AccordionDetails>
    </Accordion>
  ))
}

    </div>
  );
};

export default ForumBase;
