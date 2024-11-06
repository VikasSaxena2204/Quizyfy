import { useContext, useMemo } from 'react';
import QuestionBox from '../../components/QuestionBox/QuestionBox';
import quizContext from '../../context/quizContext';
import Scoreboard from '../ScoreBoard/Scoreboard';

const QuizArea = () => {
    const { questions, next, len, score } = useContext(quizContext);

    const getOptions = (incorrectAns, correctAns) => {
        const optionsArray = [...incorrectAns];
        const randomIndex = Math.floor(Math.random() * (optionsArray.length + 1));
        optionsArray.splice(randomIndex, 0, correctAns); // Insert correct answer at random index
        return [optionsArray, correctAns];
    };

    const currentQuestion = questions?.[next];
    const options = useMemo(() => {
        return currentQuestion ? getOptions(currentQuestion.incorrect_answers, currentQuestion.correct_answer) : [];
    }, [currentQuestion]);

    return (
        <>
            {next < len ? (
                <div className="container p-4">
                    <QuestionBox
                        category={currentQuestion?.category}
                        options={options}
                        question={currentQuestion?.question}
                        key={currentQuestion?.question}
                    />
                </div>
            ) : (
                <Scoreboard
                    total_que={len}
                    wrong_que={score?.wrongAnswers}
                    correct_que={score?.rightAnswers}
                />
            )}
        </>
    );
};

export default QuizArea;
