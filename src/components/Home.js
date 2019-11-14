import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap'

const Styles = styled.div`
    .div-all{
        position: relative;
    }
    
`;

export const Home = () => (
    <Styles>
        <h2>What is Lorem Ipsum? / Home</h2>
        <div className="row mb-2">
            <div className="col-md-6">
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-primary">World</strong>
                        <h3 className="mb-0">Featured post</h3>
                        <div className="mb-1 text-muted">Nov 12</div>
                        <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <a href="/" className="stretched-link">Continue reading 1</a>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-success">Design</strong>
                        <h3 className="mb-0">Post title</h3>
                        <div className="mb-1 text-muted">Nov 11</div>
                        <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <a href="/" className="stretched-link">Continue reading 2</a>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                    </div>
                </div>
            </div>
        </div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </Styles>
)

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

export const Contact = () => (
    <Styles>
        <h2>Why do we use it? / Contact</h2>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
    </Styles>
)