import styled from 'styled-components'

export const VideosList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  @media screen and (max-width: 768px){
    margin: 0px;
    flex-ddirection: column;
  }
`

export const SearchCard = styled.div`
  display: flex;
  justify-contnet: space-between;
  align-items: center;
  border-radius: 4px;
  border: 2px solid #92b3b9;
  margin: 20px;
  height: 40px;
  width: 35%;
  @media screen and (max-width: 768px){
    // height: 75vh;
    width: 90%;
    margin: 8px 0px;
    height: 30px;
  }
`

export const LoadingCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 90vh;
`

export const DisplayCard = styled.div`
  padding: 0px 20px 20px 0px;
  @media screen and (max-width: 768px){
    padding: 0px;
  }
`

export const SearchInput = styled.input`
  outline: none;
  background-color: transparent;
  padding: 10px;
  font-size: 15px;
  width: 90%;
  border: none;
  height: 30px;
  font-size: 18px;
  color: ${props => (props.darkMode ? '#ffffff' : '#181818')};
  @media screen and (max-width: 768px){
    padding: 6px;
    font-size: 10px;
  }
`

export const SearchBtn = styled.button`
  outline: none;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  background-color: transparent;
  justify-content: center;
`

export const HomeMain = styled.div`
  display: flex;
  @media screen and (max-width: 768px){
    flex-direction: column;
    width: 100%;
  }
`

export const BannerCloseBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
`

export const HomeBannerCard = styled.div`
  display: flex;
  justify-content: space-between;
`

export const HomeBanner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  // display: flex;
  // justify-content: space-between;
  width: 100%;
  background-size: cover;
  padding: 10px 15px;
  @media screen and (max-width: 768px){
    display: none;
  }
`

export const HomeCard = styled.div`
  height: 90vh;
  overflow-y: scroll;
  width: 80%;
  background-color: ${props => (props.darkMode ? '#181818' : '#f9f9f9')};
  // color: ${props => (props.darkMode ? '#f9f9f9' : '#181818')};
  @media screen and (max-width: 768px){
    height: 80vh;
    width: 90%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`
