import React, { FC, useEffect, useState } from 'react';
import './TriviaQuiz.styles.css';
import { useHistory } from 'react-router-dom';
import TriviaQuizAnswer from './TriviaQuizAnswer';

type Props = {
  difficulty: 'easy' | 'medium' | 'hard';
};

type TQuizData = {
  correct_answer: string;
  incorrect_answers: string[];
  question: string;
};

const TriviaQuiz: FC<Props> = ({ difficulty }) => {
  const [quizData, setQuizData] = useState<TQuizData[]>([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('loading');
  const history = useHistory();

  const fetchMovieQuestions = async () => {
    setStatus('loading');
    try {
      const res = await fetch(
        `https://opentdb.com/api.php?amount=10&category=11&difficulty=${difficulty}&type=multiple&encode=base64`
      );
      const { results } = await res.json();
      setQuizData(results);
      setStatus('idle');
    } catch (error) {
      console.log(error);
      setStatus('error');
    }
  };

  useEffect(() => {
    fetchMovieQuestions();
  }, []);

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

  return (
    <main className='trivia-quiz-container'>
      <header className='trivia-question'>
        <h1>{atob(question)}</h1>
      </header>
      <section className='trivia-quiz-options'>
        {allAnswers.map((answer) => {
          return <TriviaQuizAnswer answer={atob(answer)} key={answer} />;
        })}
      </section>
    </main>
  );
};

export default TriviaQuiz;
