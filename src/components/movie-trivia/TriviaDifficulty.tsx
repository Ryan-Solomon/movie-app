import React, { FC } from 'react';
import './TriviaDifficulty.styles.css';

type Props = {
  setDifficulty: (s: 'easy' | 'medium' | 'hard' | null) => void;
};

const TriviaDifficulty: FC<Props> = ({ setDifficulty }) => {
  return (
    <>
      <div className='main-title' data-testid='diff-card'>
        <h1>Choose Your Difficulty</h1>
      </div>
      <div className='diff-container'>
        <div onClick={() => setDifficulty('easy')} className='diff-card'>
          <h3 className='title'>Easy</h3>
          <div className='bar'>
            <div className='emptybar'></div>
            <div className='filledbar'></div>
          </div>
          <div className='circle'>
            <svg version='1.1' xmlns='http://www.w3.org/2000/svg'>
              <circle className='stroke' cx='60' cy='60' r='50' />
            </svg>
          </div>
        </div>
        <div onClick={() => setDifficulty('medium')} className='diff-card'>
          <h3 className='title'>Medium</h3>
          <div className='bar'>
            <div className='emptybar'></div>
            <div className='filledbar'></div>
          </div>
          <div className='circle'>
            <svg version='1.1' xmlns='http://www.w3.org/2000/svg'>
              <circle className='stroke' cx='60' cy='60' r='50' />
            </svg>
          </div>
        </div>
        <div onClick={() => setDifficulty('hard')} className='diff-card'>
          <h3 className='title'>Hard</h3>
          <div className='bar'>
            <div className='emptybar'></div>
            <div className='filledbar'></div>
          </div>
          <div className='circle'>
            <svg version='1.1' xmlns='http://www.w3.org/2000/svg'>
              <circle className='stroke' cx='60' cy='60' r='50' />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default TriviaDifficulty;
