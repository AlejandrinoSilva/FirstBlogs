import React from 'react';
import { Card } from 'react-bootstrap'
import styled from 'styled-components';

const Styles = styled.div`
    .div-all{
        position: relative;
    }
    
`;



export const About = () => (
    <Styles>
        <h2>Where does it come from? / About</h2>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpng.pngtree.com%2Felement_our%2Fpng_detail%2F20181206%2Fusers-vector-icon-png_260862.jpg&f=1&nofb=1" />
            <Card.Body>
                <Card.Title>Ramón A. Silva</Card.Title>
                <Card.Text>
                    Aqui va escrito una mini descripcion de quien soy yo y a que me dedico
                </Card.Text>
            </Card.Body>
        </Card>
        <br />
        <h3>Tambien puedes seguirme:</h3>
        <div className="nav-scroller py-1 mb-2">
            <nav className="nav d-flex justify-content-between">
                <a className="p-2 text-muted" href="/">Facebook</a>
                <a className="p-2 text-muted" href="/">Twitter</a>
                <a className="p-2 text-muted" href="/">LinkedIn</a>
            </nav>
        </div>
        <br />
    </Styles>
)
