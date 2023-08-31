import styled from "@emotion/styled";
import { colors } from "../../Styles/colors";

const StyledButton = styled.button`
display: flex;
width: 310px;
height: 70px;
padding: 12px 16px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 30px;
background: ${colors.orange};
color: ${colors.white};
text-align: center;
font-family: Source Sans Pro;
font-size: 1.125rem;
font-style: normal;
font-weight: 600;
line-height: normal;
`

export default StyledButton;