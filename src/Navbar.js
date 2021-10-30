function Navbar() {

    var menuMap = new Map();
    menuMap.set('/?key=estacao', 'Estação');
    menuMap.set('/?key=salaestar', 'Sala De Estar');
    menuMap.set('/?key=suite', 'Suíte');
    menuMap.set('/detail', 'Detail');

    const listMenu = []

    for (var [url, name] of menuMap) {
        listMenu.push(<a key={name} id={name} className="nav-link" href={url}>{name}</a>)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
    );
}
export default Navbar;
