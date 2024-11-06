import React, { useContext, useState } from 'react'
import Form from '../../components/Form/Form'
import QuizArea from '../QuizArea/QuizArea'
import quizContext from '../../context/quizContext'
import { HashLoader } from 'react-spinners';
import { Text } from '@chakra-ui/react'

const Home = () => {
    const context = useContext(quizContext)
    const { setUrl, url, fetchQuestions, setLoading, loading, questions } = context
    const [formData, setFormData] = useState({ number: '', category: '', difficulty: '', type: '' })

    const handleSubmit = (e) => {
        e.preventDefault();
        const { number, category, difficulty, type } = formData
        localStorage.setItem('timer', 30)
        setUrl(`https://opentdb.com/api.php?amount=${number}&category=${category}&difficulty=${difficulty}&type=${type}`, fetchQuestions(url))
        setLoading(true)
    }

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center p-4">
                <header className="text-center mb-4">
                    <h1 className="display-4 text-info">
                        🌟 Hi There! Welcome to Quizyfy! 🎉
                    </h1>
                    <p className="lead">
                        Ready to test your knowledge? 🤔 Start your Quiz below! 🚀
                    </p>
                </header>
                {/* Here you can add your quiz component or button */}
            </div>


            <div className="d-flex justify-content-center align-items-center">
                
                <HashLoader
                    color={'#3585c1'}
                    loading={loading}
                    size={100}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    style={{ backgroundColor: '#4d4d4dcc', width: '100%', height: '100vh', position: 'absolute', top: '13%' }}
                />
            </div>
            {
                (url === '' || questions.length === 0)
                    ?
                    <div className="container my-3">
                        <Text mb={'4'} fontSize='4xl'>Start your Quiz Now</Text>
                        <hr />
                        <Form handleSubmit={handleSubmit} onChange={onChange} />
                    </div>
                    :
                    <QuizArea />
            }
        </>
    )
}

export default Home
