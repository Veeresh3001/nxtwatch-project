import styled from 'styled-components'

export const Video = styled.li`
  width: 300px;
  margin: 10px 0px;
  box-shadow: 0px 0px 1px 1px ${props =>
    props.darkMode ? '#475569' : '#cbd5e1'};
  padding: 6px;
  @media screen and (max-width: 768px){
    width: 100%;
  }
`

export const Thubmnail = styled.img`
  width: 100%;
  @media screen and (max-width: 768px){
    height: 120px;
  }
`

export const Channelpara = styled.p`
  margin: 5px 0px 0px 0px;
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  @media screen and (max-width: 768px){
    font-size: 10px;
  }
`

export const ViewCard = styled.div`
  display: flex;
  // width: 80%;
  align-items: center;
  // justify-content: space-between;
`

export const ChannelCard = styled.div`
  display: flex;
  text-decoration: none;
  color: ${props => (props.darkMode ? '#ffffff' : '#181818')};
`

export const ChannelImg = styled.img`
  width: 50px;
  height: 50px;
  margin-top: 10px;
  margin-right: 20px;
  @media screen and (max-width: 768px){
    width: 40px;
    height: 40px;
  }
`
