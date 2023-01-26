import './interest.css';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Box } from '@material-ui/core';

export default function Interest() {
  return (
    <Container>
      <Box paddingTop={'25px'}>
        <Typography variant="h3" gutterBottom>
          Some of my favorite books
        </Typography>
      </Box>
      <div className="wrap">
        <div className="tile">
          <img src='https://images.unsplash.com/photo-1464054313797-e27fb58e90a9?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=996&q=80' />
          <div className="text">
            <h1>Thinking in Bets</h1>
            <p className="animate-text">Thinking in Bets is probably the best book for decision making that I have read. Poker champion turned decision strategist and speaker Anne Duke draws on examples from business, sports, politics, and (of course) poker to share tools anyone can use to embrace uncertainty and make better decisions.</p>
            <p className="animate-text">By shifting your thinking from a need for certainty to a goal of accurately assessing what you know and what you don&apos;t, you&apos;ll be less vulnerable to reactive emotions, knee-jerk biases, and destructive habits in your decision making. You&apos;ll become more confident, calm, compassionate and successful in the long run.</p>
            <span className="more-text">Tap to read more</span>
            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <div className="tile">
          <img src='https://images.unsplash.com/photo-1458668383970-8ddd3927deed?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1004&q=80' />
          <div className="text">
            <h1>Atomic Habits</h1>
            <p className="animate-text">Atomic Habits is a book written by James Clear. It is a self-help book that takes a scientific and logical approach to understand how small habits impact our lives and how developing a few great habits and working on them daily for a long time will lead to higher productivity.</p>
            <p className="animate-text">“Every action you take is a vote for the type of person you wish to become. No single instance will transform your beliefs, but as the votes build up, so does the evidence of your new identity.”</p>
            <span className="more-text">Tap to read more</span>
            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <div className="tile">
          <img src='https://images.unsplash.com/photo-1422393462206-207b0fbd8d6b?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80' />
          <div className="text">
            <h1>Lorem ipsum.</h1>
            <p className="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
            <span className="more-text">Tap to read more</span>
            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
