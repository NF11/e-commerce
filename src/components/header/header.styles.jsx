import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo/maracas.svg";

const optionContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
  text-transform: uppercase;
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 15px;
`;

export const LogoSvg = styled(Logo)`
  height: 100%;
  width: 100%;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  ${optionContainerStyles}
`;

export const OptionDiv = styled.div`
  ${optionContainerStyles}
`;
