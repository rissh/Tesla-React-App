import React, { useState } from 'react'
import styled from "styled-components"
import { selectCars } from "../features/Cars/carSlice";
import { useSelector } from  "react-redux";
 
function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars)
    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt=""/>
            </a>
            <LeftMenu>
                {cars && cars.map((car, index) =>(
                    <a  key={index} href="#">{car}</a>
                ))}
            </LeftMenu> 
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenuIcon onClick={()=>setBurgerStatus(true)}>
                    <a>
                        <img src="/images/icons8-menu (3).svg" alt="" />
                    </a>
                </CustomMenuIcon>
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomCloseIcon onClick={()=>setBurgerStatus(false)}>
                        <a>
                            <img src="/images/delete.svg" alt=""/>
                        </a>
                    </CustomCloseIcon>
                </CloseWrapper>
                {cars && cars.map((car, index) =>(
                    <li key={index}><a href="#">{car}</a></li>
                ))}
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadster</a></li>
                <li><a href="#">Solar Roof</a></li>
                <li><a href="#">Solar Panels</a></li>            
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Test Drive</a></li>
                <li><a href="#">Powerwall</a></li>   
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`

const LeftMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a{
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px
        
    }

    @media(max-width: 768px) {
        display: none;
    }

`

const RightMenu = styled.div`
    display: flex;
    align-items:center;
    
    a{
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    
    }

`
 
const CustomMenuIcon = styled.div`
    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: #fff;
    width: 300px;
    z-index: 16; 
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s ease-in;

    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);

        a{
            font-weight: 600;
        }
    }

`

const CustomCloseIcon = styled.div`
    cursor: pointer;
`

const CloseWrapper = styled.div`
    
    display: flex;
    justify-content: flex-end;
`
