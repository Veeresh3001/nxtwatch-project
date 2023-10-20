import styled from 'styled-components'

export const TrendingCard = styled.div`
  height: 90vh;
  overflow-y: scroll;
  width: 80%;
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#f9f9f9')};
  color: ${props => (props.darkMode ? '#f9f9f9' : '#181818')};
  @media screen and (max-width: 768px){
    width: 100%;
    height: 80vh;
  }
`

export const TrendingTop = styled.div`
  display: flex;
  padding: 20px 0px 20px 45px;
  align-items: center;
  background-color: ${props => (props.darkMode ? '#231f20' : '#e2e8f0')};
  height: 20vh;
  @media screen and (max-width: 768px){
    width: 100%;
    height: 10vh;
    padding: 10px;
  }
`

export const TrendingHead = styled.h1`
  margin: 0px 0px 0px 45px;
  @media screen and (max-width: 768px){
    margin-left: 20px;
    font-size: 20px;
  }
`

export const TrendingMain = styled.div`
  display: flex;
  @media screen and (max-width: 768px){
    width: 100%;
    flex-direction: column;
    height: 90vh;
  }
`

export const TrendingVideo = styled.div`
  display: flex;
  color: ${props => (props.darkMode ? '#f9f9f9' : '#181818')};
  width: 90%;
  box-shadow: 0px 0px 1px 2px #92b3b9;
  border-radius: 6px;
  @media screen and (max-width: 768px){
    width: 100%;
    flex-direction: column;
    padding: 10px;
  }
`

export const TrendingVideoImg = styled.img`
  width: 400px;
  margin-right: 30px;
  @media screen and (max-width: 768px){
    width: 100%;
    height: 130px;
  }
`

export const TrendingVideoDetails = styled.div`
  margin: 20px;
  color: ${props => (props.darkMode ? '#ffffff' : '#181818')};
  @media screen and (max-width: 768px){
    width: 100%;
    margin: 5px;
  }
`
