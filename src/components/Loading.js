import React, {useEffect} from 'react';
import ReactLoading from 'react-loading';
import styled from 'styled-components';

const ContainerLoad = styled.div`
    position:fixed;
    left:0;
    top:0;
    bottom:0;
    right:0;
    display:none;
    transition:opacity ease 1s;
    justify-content: center;
    align-items: center;
    overflow-y:auto;
    background-color:#000;
    opacity:0;
`;

const WindowAreaLoad = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:5px;
    left:40%;
    flex-direction:column;
    transition:opacity ease 1s;
    top:40%;
    bottom:40%;
    right:40%;
    background-color:trasnparent;
    opacity:0;
    position:fixed;
`;



export const Loading = (props) =>{
    return(
        <ReactLoading type="spinningBubbles" color={props.color ? props.color : '#FF0000'} height={props.heght ? props.height : '5%'} width={props.width ? props.width : '5%'}/>
    );
}

export const LoadTela = (props) => {

    useEffect(()=>{
        if(props.visible){
            document.querySelector('.WindowBodyLoad').style.opacity = 0.3;
            document.querySelector('.WindowAreaLoad').style.opacity = 1;
        }else{
            document.querySelector('.WindowBodyLoad').style.opacity = 0;
            document.querySelector('.WindowArea').style.opacity = 0;
        }
    },[props.visible])
    return(
        <>
            <ContainerLoad className="WindowBodyLoad" style={{display: props.visible ? 'flex' : 'none'}}></ContainerLoad>
            <WindowAreaLoad className="WindowAreaLoad">
                <ReactLoading type="spinningBubbles" color={props.color ? props.color : '#FF0000'} height={props.heght ? props.height : '40px'} width={props.width ? props.width : '40px'}/>
            </WindowAreaLoad>
        </>
    )
}