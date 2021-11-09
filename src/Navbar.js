import React from "react";
import SockJsClient from 'react-stomp';

const Navbar = () => {

    var menuMap = new Map();
    menuMap.set('/?key=estacao', 'Estação');
    menuMap.set('/?key=salaestar', 'Sala De Estar');
    menuMap.set('/?key=suite', 'Suíte');

    const listMenu = []
    const [alertVisibility, setAlertVisibility] = React.useState(false);
    const [alertMessage, setAlertMessage] = React.useState(null);

    for (var [url, name] of menuMap) {
        listMenu.push(<a key={name} id={name} className="nav-link" href={url}>{name}</a>)
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light top-line">
                <div className="container-fluid">
                    <a key="home" className="navbar-brand" href="?key=estacao">CASA</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {listMenu}
                        </div>
                    </div>
                </div>
            </nav>
            <SockJsClient url='https://allhomeapi.herokuapp.com/chat' 
                      topics={['/topic/alert']}
                      onMessage={(msg) => {
                          console.log(msg);
                          setAlertVisibility(true);
                          setAlertMessage(msg);
                      }}/>
            {alertVisibility &&
                <div id="alert-message" className="alert alert-danger d-flex align-items-center alert-dismissible fade show" role="alert">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
                <div>
                    {alertMessage}
                </div>
                <button id="warning-message" 
                    onClick={() => setAlertVisibility(false)} 
                    type="button" 
                    className="btn-close" 
                    aria-label="Close">
                </button>
                </div>
            }
        </div>
    )
}
export default Navbar;
