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
  const [thumbsUpTrue, setThumbsUpTrue] = useState(false);

  // const thumbFlip = () => {
  //   setThumbsUpTrue(!thumbsUpTrue);
  // };

  return (
    <div className="forumBase">
      <Accordion>
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
                {mockData.events[0].messages[0].author} : {mockData.events[0].messages[0].authorScore}
                {mockData.events[0].messages[0].messageBody}
                {mockData.events[0].messages[0].messageVotes}

                {mockData.events[0].messages[1].author} : {mockData.events[0].messages[1].authorScore}
                {mockData.events[0].messages[1].messageBody}
                {mockData.events[0].messages[1].messageVotes}

                {mockData.events[1].messages[0].author} : {mockData.events[1].messages[0].authorScore}
                {mockData.events[1].messages[0].messageBody}
                {mockData.events[1].messages[0].messageVotes}

                {mockData.events[1].messages[1].author} : {mockData.events[1].messages[1].authorScore}
                {mockData.events[1].messages[1].messageBody}
                {mockData.events[1].messages[1].messageVotes}

                {mockData.events[2].messages[0].author} : {mockData.events[2].messages[0].authorScore}
                {mockData.events[2].messages[0].messageBody}
                {mockData.events[2].messages[0].messageVotes}

                {mockData.events[2].messages[1].author} : {mockData.events[2].messages[1].authorScore}
                {mockData.events[2].messages[1].messageBody}
                {mockData.events[2].messages[1].messageVotes}
              </Typography>
            </Card>
            Like button{" "}
            <Button onClick={() => null}>
              {thumbsUpTrue ? <ThumbUpIcon /> : <ThumbUpAltOutlinedIcon />}
            </Button>
            <Button>
              {!thumbsUpTrue ? <ThumbDownAltOutlinedIcon /> : <ThumbDownIcon />}
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ForumBase;
