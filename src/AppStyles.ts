import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin: 0;  
`
export const Header = styled.div`
    width: 100%;
    height: 70px;
    background-color: #E51C23;
    display: flex;         
    justify-content: space-evenly;   
`
export const HeaderItem = styled.div`    
    nav li {
        display: inline-block;
        padding: 5px 10px;    
        font-family: 'font', sans-serif;
        font-size: 25px;
        color: #FFF;        
    }  
    nav li:hover {
        color: #000;
        cursor: pointer;
    }
    img {
        width: 280px;
        padding-top: 12px; 
    }
`

export const Footer = styled.footer` 
    background-color: #E51C23;
    color: #FFF;
    font-family: 'font', sans-serif;
    font-size: 20px;
    width: 100%;
    height: 60px;   
    margin: top: 10px;
    padding-top: 5px;
    p {
        text-align: center;
    }
`
