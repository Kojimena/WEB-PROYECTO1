import styled from "styled-components"

const Nav = styled.nav`
  box-shadow: inset 0 -1px 0 #21262d;
  display: flex;
  justify-content: flex-start;
  gap: 16px;
  min-height: 40px;
  margin-top: 30px;
  width: 100%;
  padding: 0px 0px 10px 10px;
`

const NavLink = styled.a`
  font-size: 14px;
  line-height: 1.5;
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #fff;
  }
`

const Button = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  justify-content: center;
  align-content: center;

  &:hover {
    background-color: #b1bac41f;
    border-radius: 6px;
    text-decoration: none;
  }
`

const ButtonFirst = styled(Button)``
const ButtonSecond = styled(Button)``

const Beta = styled.span`
  text-shadow: none;
  border-color: #238636;
  color: #3fb950;
  font-size: 12px;
  padding: 0.1em 0.4em;
  line-height: 18px;
  white-space: nowrap;
  border: 1px solid #3fb950;
  border-radius: 2em;
  height: 14px;
  align-items: center;
  font-weight: bold;
  display: flex;
`

export {
  Nav, NavLink, ButtonFirst, ButtonSecond, Beta,
}
