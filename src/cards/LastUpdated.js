import Moment from 'moment';

const LastUpdatedCard = (time) => {
    return(
        <div className="updated">{'updated: ' + Moment(time).format('DD MMM HH:mm')}</div>
    )
}

export default LastUpdatedCard;