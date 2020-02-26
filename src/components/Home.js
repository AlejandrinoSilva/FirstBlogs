import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import PostData from '../data/datalist.json';

const Styles = styled.div`
    .div-all{
        position: relative;
    }

`;

export const About = () => (
    <Styles>
        <div className="card p-4 mb-3 rounded">
            <h3 className="card-header">Acerca de mi</h3>
              <div className="card-body">
                <h5 className="card-title">Silva Ramón</h5>
                <h6 className="card-subtitle text-muted">Support card subtitle</h6>
              </div>
              <Card.Img variant="top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpng.pngtree.com%2Felement_our%2Fpng_detail%2F20181206%2Fusers-vector-icon-png_260862.jpg&f=1&nofb=1" />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>

              <div className="card-body ">
                      <button type="button" className="btn btn-outline-info"><a href="https://www.linkedin.com/in/ramon-alejandrino-silva" className="card-link">LinkedIn</a></button>
                  <button type="button" className="btn btn-outline-light"><a href="https://github.com/AlejandrinoSilva/" className="card-link">Github</a></button>
              </div>
              <div className="card-footer text-muted">
                2 days ago
              </div>
          </div>

    </Styles>
)

export const Contact = () => (
    <Styles>
        <h2 className="pb-4 mb-4 font-italic border-bottom">From the Contact</h2>
        <div className="col-md-16 blog-main">
            <div className="blog-post">
        <h2>Contact</h2>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div>
    </div>
    </Styles>
)

export const PostList = () => (
    PostData.map((postDetail, index) => {
        return (
            <Styles>
            <div className="col-md-16 blog-main">
                    <Table striped bordered>
                        <tbody>
                            <tr>
                                <td><h5 className="blog-post-title">{postDetail.kanji}</h5></td>
                                <td><p>{postDetail.reading}</p><br /><p>{postDetail.spanish}</p></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
        </Styles>
        )
    })
)

export const PostListView = () => (
            <Styles>
            <h2 className="pb-4 mb-4 font-italic border-bottom">From the PostListView</h2>
            <PostList />
        </Styles>
)
