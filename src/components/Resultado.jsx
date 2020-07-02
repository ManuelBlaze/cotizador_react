import React from 'react';
import styled from "@emotion/styled";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Mensaje = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    border-radius: .5rem;
    text-align: center;
    font-weight: bold;
    `;

const ResultadoCotizacion = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26c6da;
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;
    border-radius: .5rem;
`;

const Cotizacion = styled.p`
    padding: 1rem;
    color: #00838f;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;

const Resultado = ({cotizacion}) => {

    return (
        (cotizacion === 0) ? <Mensaje>Elige marca, año y tipo de seguro</Mensaje> 
        
        : 
            (   
                <ResultadoCotizacion>
                    <TransitionGroup
                        component="p"
                        className="resultado"
                    >
                        <CSSTransition
                            classNames="resultado"
                            key={cotizacion}
                            timeout={{ enter: 500, exit: 500 }}
                        >

                            <Cotizacion>El total es: $ {cotizacion}</Cotizacion>
                        
                        </CSSTransition>
                    </TransitionGroup>
                </ResultadoCotizacion>
            )
    )
}

export default Resultado;