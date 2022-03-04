import styled from "styled-components";

export const Container = styled.div`
    min-height: calc(100vh - 70px - 65px)
    .imgCart {
        width: 80px;
    }
    display: flex;
    display: space-evenly;
    margin: 20px;
    width: 100%;  
`
export const Div = styled.div`
    width: 90%; 
    margin:0;
`
export const ContainerList = styled.div`
    width: 60%;
    margin: auto;
    text-align: center;
`
export const ContainerCart = styled.div`
    width: 30%;
    text-align: center;    
    p {
        font-size: 20px;
        font-family: 'font', sans-serif; 
        font-weight: bold;    
        margin-top: 30px;
    }
`
export const Button = styled.button`
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
`
export const Alert = styled.div`    
    padding-top: 150px;
    text-align: center;
    font-size: 35px;
    font-family: 'font', sans-serif; 
    font-weight: bold;
`
export const Img = styled.img`
    width: 80px;
`

export const TableCart = styled.table`
    width: 100%;
    text-align: center;
    font-size: 20px;
    font-family: 'font', sans-serif; 
    font-weight: bold;    
    td {
        border-bottom: 1px solid black;
        border-collapse: collapse;
    }
`
export const Table = styled.table`
    width: 100%;
    text-align: center;
    font-size: 20px;
    font-family: 'font', sans-serif; 
    font-weight: bold;
    td {        
        border-bottom: 1px solid black;
        border-collapse: collapse;
    }
`
export const Input = styled.input`
    width: 60px;
    height: 28px;
    font-size: 20px;
`
export const InputCp = styled.input`
    width: 150px;
    height: 28px;
    margin: 10px;
`