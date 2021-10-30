import React from 'react';
import SockJsClient from 'react-stomp';

const Detail = () => {

  const [card, setCard] = React.useState("feating");

  //React.useEffect(() => {
    
  //}, []);

  return (
    <div className="app-container">
      <h1>Details</h1>
        <SockJsClient url='https://allhomeapi.herokuapp.com/chat' 
                      topics={['/topic/news']}
                      onMessage={(msg) => {
                        console.log(msg);

                        if (msg.location === 'estacao') {
                          let maps = new Map();
                          maps = msg.values;
                          for (let [k, v] of Object.entries(maps)) {
                              if (require('./cards/'+ k).default) {
                                  var cardToRender = require('./cards/'+ k).default
                                  setCard(cardToRender(v));
                              }
                          }
                        }

                      }}
                      //ref={ (client) => { this.clientRef = client }}
                       />

        <div>{card}</div>
    </div>
  )
}

export default Detail;