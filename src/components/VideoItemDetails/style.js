import styled from 'styled-components'

export const DisLikeBtn = styled.button`
  padding: 20px;
  align-items: center;
  border: none;
  outline: none;
  background-color: transparent;
  display: flex;
  cursor: pointer;
  color: ${props => (props.disLike ? '#2563eb' : '#64748b')};
  @media screen and (max-width: 768px){
    padding: 10px;
  }
`

export const LikeBtn = styled.button`
  padding: 20px;
  align-items: center;
  border: none;
  outline: none;
  background-color: transparent;
  display: flex;
  cursor: pointer;
  color: ${props => (props.like ? '#2563eb' : '#64748b')};
  @media screen and (max-width: 768px){
    padding: 10px;
  }
`

export const VideoDetailsMain = styled.div`
  padding: 20px;
  color: ${props => (props.darkMode ? '#ebebeb' : '#181818')};
  @media screen and (max-width: 768px){
    padding: 10px;
  }
`

export const VideoDetailsLikes = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30%;
  @media screen and (max-width: 768px){
    // overflow-x: scroll;
    justify-content: flex-start;
  }
`

export const VideoDetailsCard = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

export const VideoDetailsLikesCard = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px){
    overflow-x: scroll;
    justify-content: flex-start;
  }
`
