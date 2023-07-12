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
      {mockData.events.map((mockData1) => (
        <Accordion key={mockData.eventID} body={mockData}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Community Event Forum</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="forumMessageCard">
              <Card>
                <Typography>
                  {mockData.events[0].messages[0].messageBody}
                </Typography>
              </Card>
              {mockData.events[0].messages[0].author} :{" "}
              {mockData.events[0].messages[0].authorScore}
              <div className="likeDislikeButtons">
                Like button{" "}
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
              </div>
              {mockData.events[0].messages[0].messageVotes}
            </div>
          </AccordionDetails>
        </Accordion>
      ))}

      {/* <Accordion key={mockData.eventID} body={mockData}> 
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Community Event Forum</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="forumMessageCard">
            <Card>
              <Typography>
               
                {mockData.events[0].messages[0].messageBody}
              </Typography>
            </Card>
            {mockData.events[0].messages[0].author} : {mockData.events[0].messages[0].authorScore}
            Like button{" "}
            <Button onClick={() => null}>
              {thumbsUpTrue ? <ThumbUpIcon /> : <ThumbUpAltOutlinedIcon />}
            </Button>
            <Button>
              {!thumbsUpTrue ? <ThumbDownAltOutlinedIcon /> : <ThumbDownIcon />}
            </Button>
                {mockData.events[0].messages[0].messageVotes}
          </div>
        </AccordionDetails>
      </Accordion> */}
    </div>
  );
};

export default ForumBase;
