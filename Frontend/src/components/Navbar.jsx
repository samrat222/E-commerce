import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";

// import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  cursor: pointer;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.button`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  border: none ;
`;

const Navbar = () => {
  const navigate = useNavigate();
  // const showAllProduct = () => {
  //   navigate("/products")
  // }
  const goToHome = () => {
    navigate("/")
  }
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo onClick={goToHome}>Assam-kart</Logo>
        </Center>
        <Right>
          <Link to="/products">
            <MenuItem>PRODUCTS</MenuItem>
          </Link>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            {/* <Badge badgeContent={1} color="primary">
              <ShoppingCartOutlined />
            </Badge> */}
            <Link to="/cart">
              <ShoppingCart size={25} />
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;