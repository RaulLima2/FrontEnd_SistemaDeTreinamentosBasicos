import { DivStyled, ImgStyled, TitleStyled } from "./style";
import Link from "next/link";
import { NextPage } from "next";

// function Header() {
const Header: NextPage = () => (
  <>
    <DivStyled>
      
      <TitleStyled>
        FitSys
      </TitleStyled>
      
      <ImgStyled src="../images/header/menu.png" />
    </DivStyled>
  </>

);

export default Header;
