import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from "./shared/Card"

function FeedbackItem({item, handleDelete}) {
  
    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => handleDelete(item.id)} className='close'>
                <FaTimes color='Purple'/>
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

FeedbackItem.propTrypes = {
    item: PropTypes.object.isRequired
}
export default FeedbackItem