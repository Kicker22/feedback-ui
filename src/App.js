import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';

// import data 
import FeedbackData from './data/FeedbackData';

function App() {
const [feedback, setFeedback] = useState(FeedbackData)

const deleteFeedback = (id) =>{
  if (window.confirm('Would You like to delete this item?')) {
    setFeedback(feedback.filter((item) => item.id !== id))
  }


}
  return (

    <div className="App">
      <>
        <Header />
        <div className="container">
          <feedbackStats feedback={feedback}/>
          <FeedbackList feedback={feedback}
            handleDelete={deleteFeedback}
          />

        </div>

      </>
    </div>
  );
}



export default App;
