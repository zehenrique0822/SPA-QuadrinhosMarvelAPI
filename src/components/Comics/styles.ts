import styled from "styled-components";

export const Container = styled.div`
    width: 300px;
    margin: 10px;    
    box-shadow: 0px 0px 13px 0px  #000000;
`;

export const ContainerComicImg = styled.div`
    width: 300px;
    overflow: hidden;    
    background-color: #E51C23;
    img {
        max-width: 100%;
        .moz-transation: all 0.3s;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;        
    :hover {
        -moz-transform: scale(1.1);
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
        cursor: pointer;
    }
`;
export const ContainerComicTitle = styled.div`
    height: 75px;       
    padding-left: 10px;
    text-align: center;
    padding-top: 5px;
    background-color: #E51C23;
    p {
        font-size: 15px;
        font-family: 'font', sans-serif; 
        color: #FFF;
        font-weight: bold;
    }
`;
export const ContainerComicButton = styled.div`
    text-align: center;    
    background-color: #E51C23;
    button {
        margin: 0px;
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
    }
    p {
        margin: 0px;
        color: #FFF;
        font-size: 35px;
        font-family: 'font', sans-serif; 
        font-weight: bold;
    }
`;