import styled from "styled-components";

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
}  
nav li:hover {
    color: #000;
    cursor: pointer;
}
img {
    width: 280px;
    padding-top: 12px; 
}
a {    
    text-decoration: none;
    font-family: 'font', sans-serif;
    font-size: 25px;
    color: #FFF;  
}
`