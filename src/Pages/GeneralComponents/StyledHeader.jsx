import styled from "@emotion/styled";
import { colors } from "../../Styles/colors";
import { typography } from "../../Styles/typography";

const StyledHeader = styled.h1`
  color: ${colors.black};
  font-family: ${typography.title};
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: center;
`

export default StyledHeader;