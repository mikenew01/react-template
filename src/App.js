import React from 'react';
import { Link } from 'react-router-dom';

import Routes from './routes';

export default function AppComponent() {

    return (<>
        <div>
            <h1>Minha aplicação</h1>

            <ul>
                <li>
                    <Link to="/clients">Listar Clients</Link>
                </li>
                <li>
                    <Link to="/clients/create">Adicionar Client</Link>
                </li>
                <li>
                    <Link to="/dash">Inicio</Link>
                </li>
            </ul>
        </div>

        <Routes />        
    </>);

}
