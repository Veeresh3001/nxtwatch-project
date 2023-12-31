import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import ModeContext from '../../context/ModeContext'

import ActiveMenu from '../../context/ActiveMenu'

import {
  Video,
  Thubmnail,
  ChannelCard,
  ChannelImg,
  Channelpara,
  ViewCard,
} from './style'

const VideoItem = props => {
  const {item} = props
  const {
    id,
    title,
    thumbnailUrl,
    channelName,
    channelImage,
    publishedAt,
    viewCount,
  } = item
  return (
    <ModeContext.Consumer>
      {value => {
        const {darkMode} = value
        // console.log(publishedAt, new Date().getFullYear(), formatDistanceToNow(new Date(publishedAt)))
        let date = formatDistanceToNow(new Date(publishedAt))
        // console.log(date.split(' '))
        date = date.split(' ')
        if (date.length === 3) {
          date.shift()
        }
        // console.log(date)
        date = date.join(' ')
        return (
          <ActiveMenu.Consumer>
            {val => {
              const {changeActiveItem} = val
              return (
                <Video
                  darkMode={darkMode}
                  onClick={() => changeActiveItem('INITIAL')}
                >
                  <Link className="link-item" to={`/videos/${id}`}>
                    <Thubmnail src={thumbnailUrl} alt="video thumbnail" />
                    <ChannelCard darkMode={darkMode}>
                      <ChannelImg src={channelImage} alt="channel logo" />
                      <div>
                        <Channelpara>
                          {title}
                        </Channelpara>
                        <Channelpara
                          style={{fontWeight: '600', fontSize: '14px'}}
                        >
                          {channelName}
                        </Channelpara>
                        <ViewCard>
                          <Channelpara>{viewCount} views</Channelpara>
                          <Channelpara>{date} ago</Channelpara>
                        </ViewCard>
                      </div>
                    </ChannelCard>
                  </Link>
                </Video>
              )
            }}
          </ActiveMenu.Consumer>
        )
      }}
    </ModeContext.Consumer>
  )
}

export default VideoItem
