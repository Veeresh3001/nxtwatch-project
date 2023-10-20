import styled from 'styled-components'

export const GamingCard = styled.div`
  // padding: 8px;
  color: ${props => (props.darkMode ? '#f9f9f9' : '#181818')};
  @media screen and (max-width: 768px){
    margin: 10px;
  }
`

export const GamingImg = styled.img`
  width: 200px;
  height: 280px;
  @media screen and (max-width: 768px){
    width: 70px;
    height: 90px;
  }
`

export const GamingList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  @media screen and (max-width: 768px){
    padding: 6px;
  }
`
