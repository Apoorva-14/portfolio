import './interest.css';
import React from 'react';
import { Box, Container } from '@material-ui/core';

import AtomicHabitsImage from '../assets/images/atomic-habits.jpeg';
import HookedImage from '../assets/images/hooked.jpeg';
import ThinkingInBetsImage from '../assets/images/thinking-in-bets.jpeg';

export default function Interest() {
  return (
    <Container>
      <Box paddingTop={'30px'} paddingBottom={'30px'}>
      <div className="interest-title">These are the books which helped me to think outside the box</div>
      <div className="wrap">
        <div className="tile">
          <img src={ThinkingInBetsImage} />
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
          <img src={AtomicHabitsImage} />
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
          <img src={HookedImage} />
          <div className="text">
            <h1>Hooked</h1>
            <p className="animate-text">Hooked is written by Eyal. He summed up his years of research, consulting, and practical experience in this book. This is how-to guide for building better products.</p>
            <p className="animate-text">It is written for product managers, designers, marketers, start-up founders, and anyone who seeks to understand how products influence our behaviour.</p>
            <span className="more-text">Tap to read more</span>
            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      </Box>
    </Container>
  );
}
