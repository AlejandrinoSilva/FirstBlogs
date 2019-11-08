import React from 'react';
import styled from 'styled-components';

const Styles = styled.footer`
    .con-color {
        background-color: black;
        position:relative; 
        bottom: 0; 
        width: 100%;
    }
    
`;

export const FooterBar = () => (
    <Styles>
        <footer className="footer mt-auto py-3 con-color">
            <div className="container">
                <span className="text-muted">Pagina con licencia CC</span>
            </div>
        </footer>
    </Styles>
)