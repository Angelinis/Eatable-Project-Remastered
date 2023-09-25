import styled from '@emotion/styled';
import { colors } from '../../Styles/colors';
import { typography } from '../../Styles/typography';

const StyledDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center; 
`

const StyledParag = styled.p`
color: ${colors.black};
text-align: center;
font-family: ${typography.title};
font-size: 1.75rem;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-bottom: 180px;
`
const StyledImg = styled.img`
margin-top: 160px;
margin-bottom: 26px;
`


export const NoDataSection = ({image, children}) => {
  

  return (
    <>
    <StyledDiv>
    <StyledImg src={image} alt="no-icon" />
    <StyledParag>{children}</StyledParag>
    </StyledDiv>
    </>
  )

}


export default NoDataSection;
