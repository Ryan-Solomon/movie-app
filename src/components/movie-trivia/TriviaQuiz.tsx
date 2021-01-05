import React, { FC, useEffect, useState } from 'react';
import './TriviaQuiz.styles.css';
import { useHistory } from 'react-router-dom';
import TriviaQuizAnswer from './TriviaQuizAnswer';
import GameOver from './GameOver';

type Props = {
  difficulty: 'easy' | 'medium' | 'hard' | null;
  setDifficulty: (s: 'easy' | 'medium' | 'hard' | null) => void;
};

type TQuizData = {
  correct_answer: string;
  incorrect_answers: string[];
  question: string;
};

const TriviaQuiz: FC<Props> = ({ difficulty, setDifficulty }) => {
  const [quizData, setQuizData] = useState<TQuizData[]>([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('loading');
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [gotItRight, setGotItRight] = useState<boolean | null>(null);
  const [quizFinished, setQuizFinished] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const fetchMovieQuestions = async () => {
      setStatus('loading');
      try {
        const res = await fetch(
          `https://opentdb.com/api.php?amount=10&category=11&difficulty=${difficulty}&type=multiple&encode=base64`
        );
        if (status === 'idle') return;
        const { results } = await res.json();
        setQuizData(results);
        setStatus('idle');
      } catch (error) {
        setStatus('error');
      }
    };
    fetchMovieQuestions();

    return () => setStatus('idle');
  }, [difficulty]);

  const setNextQuestion = () => {
    setGotItRight(null);
    setQuestionNumber((q) => q + 1);
  };

  const handleAnswer = (answer: string) => {
    if (answer === atob(quizData[questionNumber].correct_answer)) {
      setCorrectAnswers((n) => n + 1);
      setGotItRight(true);
    } else {
      setGotItRight(false);
    }
  };

  if (status === 'loading') return <h1>Loading...</h1>;
  if (status === 'error') {
    history.push('/error');
  }

  const { question, correct_answer, incorrect_answers } = quizData[
    questionNumber
  ];

  // I need to make sure the correct question isn't in the same
  // position each time, hence, shuffle
  const shuffle = (arr: string[]) => {
    arr.sort(() => Math.random() - 0.5);
  };
  const allAnswers = [...incorrect_answers, correct_answer];
  shuffle(allAnswers);

  if (quizFinished) {
    return (
      <GameOver setDifficulty={setDifficulty} correctAnswers={correctAnswers} />
    );
  }

  return (
    <main className='trivia-quiz-container'>
      <div className='question-count'>
        <h3>Question: {questionNumber + 1}/10</h3>
      </div>
      <header className='trivia-question'>
        <h1>{atob(question)}</h1>
      </header>
      <section className='trivia-quiz-options'>
        {gotItRight ? (
          <h1>Correct!</h1>
        ) : gotItRight === false ? (
          <>
            <h1>Shoot, incorrect</h1>
            <h2>The correct answer was {atob(correct_answer)}</h2>
          </>
        ) : (
          allAnswers.map((answer) => {
            return (
              <TriviaQuizAnswer
                handleAnswer={handleAnswer}
                answer={atob(answer)}
                key={answer}
              />
            );
          })
        )}
      </section>
      {questionNumber + 1 === 10 ? (
        <button
          onClick={() => setQuizFinished(true)}
          className='btn trivia-quiz'
        >
          Finish Quiz
        </button>
      ) : (
        <button onClick={setNextQuestion} className='btn trivia-quiz'>
          Next Question
        </button>
      )}
    </main>
  );
};

export default TriviaQuiz;
