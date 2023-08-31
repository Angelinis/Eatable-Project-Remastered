import styled from "@emotion/styled";
import { colors } from "../../Styles/colors";
import { typography } from "../../Styles/typography";

const StyledParagraph = styled.p`
  color: ${colors.black};
  font-family: ${typography.title};
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 10px;
  margin-top: 10px;
`
export default StyledParagraph;