import React from 'react';
import styled from 'styled-components';
import { Card, Image } from 'react-bootstrap';
import PostData from '../data/datalist.json';
import QuizData from '../data/quizdata.json';

const Styles = styled.div`
    .div-all{
        position: relative;
    }

`;
const Button = styled.a`
  border-radius: 1px;
  margin: 0.5rem 1rem;
  width: 5rem;
  background: transparent;
  border: 1px solid white;
`;

export const Home = () => (
    <Styles>
        <main role="main" className="container">
            <div className="row">
                <div className="col-md-8 blog-main">
                    <h2 className="pb-4 mb-4 font-italic border-bottom">From the Firehose</h2>
                    <PostList />
                </div>
                <aside className="col-md-4 blog-sidebar">
                    <div className="p-4 mb-3 bg-light rounded">
                        <About />
                    </div>

                    <div className="p-4">
                        <h4 className="font-italic">Archives</h4>
                        <ol className="list-unstyled mb-0">
                            <li><a href="/">Enero</a></li>
                            <li><a href="/">Febrero</a></li>
                            <li><a href="/">Marzo</a></li>
                            <li><a href="/">Abril</a></li>
                        </ol>
                    </div>

                    <div className="p-4">
                        <h4 className="font-italic">Elsewhere</h4>
                        <ol className="list-unstyled">
                            <li><Image src="https://github.com/fluidicon.png" height="32px" width="32px" roundedCircle /><Button href="https://github.com/AlejandrinoSilva/">GitHub</Button></li>
                            <li><Image src="https://abs.twimg.com/favicons/favicon.ico" height="32px" width="32px" roundedCircle /><Button href="https://twitter.com/ralejandrino">Twitter</Button></li>
                            <li><Image src="https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico" height="32px" width="32px" roundedCircle /><Button href="https://www.facebook.com/ramon.themax">Facebook</Button></li>
                            <li><Image src="https://cdn.telanganatoday.com/wp-content/uploads/2019/04/LinkedIn-400x400.jpg" height="32px" width="32px" roundedCircle /><Button href="https://www.linkedin.com/in/ramon-alejandrino-silva">LinkedIn</Button></li>
                        </ol>
                    </div>
                </aside>
            </div>
        </main>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </Styles>
)

export const About = () => (
    <Styles>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpng.pngtree.com%2Felement_our%2Fpng_detail%2F20181206%2Fusers-vector-icon-png_260862.jpg&f=1&nofb=1" />
            <Card.Body>
                <Card.Title>Ramón A. Silva</Card.Title>
                <Card.Text>
                    Aqui va escrito una mini descripcion de quien soy yo y a que me dedico
                </Card.Text>
            </Card.Body>
        </Card>
    </Styles>
)

export const Contact = () => (
    <Styles>
        <h2>Contact</h2>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
    </Styles>
)

/*
Quiz Section
export function mostrarTest(){
    const preguntasYRespuestas=[];
    preguntas.forEach((preguntaActual, numeroDePregunta)=> {
        const respuestas=[];
        for(letraRespuesta in preguntaActual.respuestas){
            respuestas.push(
            ´<label>
                <input type="radio" name="${numeroDePregunta}" value="${letraRespuesta}" />
                    ${letraRespuesta}: ${preguntaActual.respuestas[letraRespuesta]}
             </label>
            ´
            );
        }; // endfor
        preguntasYRespuestas.push(
            ´<div className="cuestion">
                ${preguntaActual.pregunta}
            </div>
            <div className="respuestas">
                ${respuestas.join('')}
            </div>
            ´
        );
    }) // end preguntas
}

*/

export const PostList = () => (
    PostData.map((postDetail, index) => {
        return (

            <div className="col-md-8 blog-main">
                <div className="blog-post">
                    <h2 className="blog-post-title">{postDetail.title}</h2>
                    <p className="blog-post-meta">{postDetail.date} by <a href="/">{postDetail.author}</a></p>
                    <p>{postDetail.content}</p>
                </div>
                <hr />
            </div>
        )
    })
)