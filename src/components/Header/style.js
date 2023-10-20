import styled from 'styled-components'

export const PopupMain = styled.div`
  padding: 20px 30px 20px 30px;
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#ffffff')};
  border-radius: 10px;
  margin: auto;
  height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: ${props => !props.darkMode && '0px 0px 6px 1px #7e858e'};
  align-items: center;
  color: ${props => (props.darkMode ? '#f9f9f9' : '#00306e')};
  @media screen and (max-width: 768px){
    padding: 20px 10px;
    height: 130px;
  }
`

export const PopupCard = styled.div`
  display: flex;
  flex-direction: space-between;
  justify-content: center;
  align-items: center;
`

export const HeaderMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px 10px 30px;
  background-color: ${props => (props.darkMode ? '#181818' : '#92b3b9')};
  width: 100%;
  height: 10vh;
  @media screen and (max-width: 768px){
    padding: 10px;
  }
`

export const HeaderCard = styled.div`
  display: flex;
  align-items: center;
  // height: 50px;
`

export const HeaderImage = styled.img`
  height: 40px;
  margin: 0px;
  @media screen and (max-width: 768px){
    height: 20px;
  }
`

export const HeaderProfile = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin: 0px 10px;
`

export const ThemeBtn = styled.button`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: none;
  margin-right: 20px;
  margin-top: 5px;
`

export const LogoutBtn = styled.button`
  background-color: transparent;
  color: ${props => (props.darkMode ? '#ffffff' : '#181818')};
  outline: none;
  cursor: pointer;
  border: 1px solid ${props => (props.darkMode ? '#ffffff' : '#181818')};
  margin-left: 20px;
  border-radius: 3px;
  height: 30px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-family: Roboto;
  font-size: 18px;
  @media screen and (max-width: 768px){
    padding: 6px 10px;
    height: 20px;
    margin-left: 10px;
    font-size: 10px;
    font-weight: 700;
  }
`

export const ConfirmBtn = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  outline: none;
  cursor: pointer;
  border: none;
  margin-left: 20px;
  border-radius: 5px;
  height: 35px;
  padding: 10px 20px 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-family: Roboto;
  font-size: 16px;
`

export const CancelBtn = styled.button`
  background-color: transparent;
  color: ${props => (props.darkMode ? '#ffffff' : '#4f46e5')};
  outline: none;
  cursor: pointer;
  border: 1px solid ${props => (props.darkMode ? '#ffffff' : '#4f46e5')};
  margin-right: 20px;
  border-radius: 5px;
  height: 35px;
  padding: 10px 20px 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-family: Roboto;
  font-size: 16px;
`
