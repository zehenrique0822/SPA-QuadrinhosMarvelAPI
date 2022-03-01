import styled from "styled-components";

export const Container = styled.div`
    min-height: calc(100vh - 70px - 65px)
    text-align: center;
    display: flex;
    justify-content: space-evenly;        
`;

export const ContainerItem = styled.div`
    box-shadow: 0px 0px 13px 0px  #000000;
    margin: 20px;    
    width: 100%;
    text-align: center;
    h1{
        font-family: 'League Gothic', sans-serif;
        font-size: 80px;
    }
    p {
        font-family: 'League Gothic', sans-serif;
        font-size: 40px;
        line-height: 10px;
    }
    button {
        margin: 10px;
        border: 1px solid #000000;
        background-color: #000000;
        color: #FFF;
        font-size: 15px;
        font-family: 'font', sans-serif; 
        font-weight: bold;
        border-radius: 5px;
        padding: 10px;
        margin-bottom: 5px;
        max-width: 100%;
        .moz-transation: all 0.3s;
        -webkit-transition: all 0.3s;
        transition: all 0.3s; 
        :hover {
            background-color: #FFF;
            color: #000000;
            border: 1px solid #000000;
            cursor: pointer;
            -moz-transform: scale(1.1);
            -webkit-transform: scale(1.1);
            transform: scale(1.1);
        }
`;