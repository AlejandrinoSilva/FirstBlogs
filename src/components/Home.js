import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import PostData from '../data/datalist.json';

const Styles = styled.div`
    .div-all{
        position: relative;
    }
    
`;

export const Home = () => (
    <Styles>
        <h2>What is Lorem Ipsum? / Home</h2>
        <PostList />
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
                <a className="p-2 text-muted" href="/">Instagram</a>
                <a className="p-2 text-muted" href="/">LinkedIn</a>
            </nav>
        </div>
        <br />
    </Styles>
)

export const Contact = () => (
    <Styles>
        <h2>Contact</h2>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
    </Styles>
)

export const PostList = () => (
    PostData.map((postDetail, index) => {
        return (
            <div className="row">
                <div className="col-md-8 blog-main">
                    <h3 className="pb-4 mb-4 font-italic border-bottom">From the Firehose</h3>

                    <div className="blog-post">
                        <h2 className="blog-post-title">{postDetail.title}</h2>
                        <p className="blog-post-meta">{postDetail.date} by <a href="/">{postDetail.author}</a></p>
                        <p>{postDetail.content}</p>
                    </div>

                    <nav className="blog-pagination">
                        <a className="btn btn-outline-primary" href="/">Older</a>
                        <a className="btn btn-outline-secondary disabled" href="/" tabindex="-1" aria-disabled="true">Newer</a>
                    </nav>
                </div>
            </div>
        )
    })
)