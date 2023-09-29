import styled from "styled-components";
import { Button } from '../../global-styles/index.js';

export const HeaderContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #040714;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 4;
  @media (max-width: 500px) {
    padding: 0 10px;
  }
  @media (max-width: 800px) {
    border-bottom: 1px solid #FFF;
  }
`;

export const Logo = styled.div`
  padding: 0;
  width: 80px;
  font-size: 0;
  display: inline-block;
  cursor: pointer;
  img {
    display: block;
    height: 40px;
  }
`;

export const SignUpButton = styled(Button)`
	background-color: #113ccf;
	border: none;
	margin-right: 0.5em;
	&:hover {
    	background-color: #0483ee;
    	color: #FFF;
  	}
`

export const UserImg = styled.img`
  height: 100%;
`;

export const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

export const Buttons = styled.div`
  display: flex;
`

export const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;