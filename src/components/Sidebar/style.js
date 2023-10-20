import styled from 'styled-components'

export const SidbarMain = styled.div`
  width: 20%;
  height: 90vh;
  background-color: ${props => (props.darkMode ? '#181818' : '#f1f5f9')};
  color: ${props => (props.darkMode ? '#ffffff' : '#383838')};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 10px;
  @media screen and (max-width: 768px){
    padding: 10px;
    align-items: center;
    flex-direction: row;
    height: 10vh;
    width: 100%;
    order: 2;
  }
`

export const ListItem = styled.li`
  background-color: ${props =>
    props.active && (props.darkMode ? '#212121' : '#f1f5f9')};
  padding: 8px 6px;
`

export const SidbarList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  @media screen and (max-width: 768px){
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`

export const SidbarListItem = styled.p`
  display: flex;
  align-items: center;
  width: 80%;
  color: ${props => (props.darkMode ? '#ffffff' : '#383838')};
  margin: 5px;
  @media screen and (max-width: 768px){
    display: none;
  }
`

export const SidbarImgCard = styled.div`
  display: flex;
  align-items: center;
  // justify-content: space-between;
`

export const SidbarImg = styled.img`
  width: 30px;
  margin: 5px;
`

export const SidbarConcact = styled.p`
  font-weight: 600;
`

export const Sidbarpara = styled.p`
  font-weight: 500;
  width: 70%;
`
