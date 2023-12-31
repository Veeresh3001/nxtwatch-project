import {Component} from 'react'

import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'

import {HiFire} from 'react-icons/hi'

import ModeContext from '../../context/ModeContext'

import SavedVideosContext from '../../context/SavedVideosContext'

import ActiveMenu from '../../context/ActiveMenu'

import Header from '../Header'
import SideBar from '../Sidebar'

import {
  TrendingCard,
  TrendingMain,
  TrendingVideo,
  TrendingVideoDetails,
  TrendingTop,
  TrendingHead,
} from '../Trending/style'

import {LoadingCard, VideosList, DisplayCard} from '../Home/style'

import {Channelpara, ViewCard} from '../VideoItem/style'

import {SavedVideoImg} from './style'

class SavedVideos extends Component {
  trendingVideoItem = (item, darkMode) => {
    let date = formatDistanceToNow(new Date(item.publishedAt))
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
            <Link
              className="link-item"
              to={`/videos/${item.id}`}
              onClick={() => changeActiveItem('INITIAL')}
            >
              <TrendingVideo darkMode={darkMode}>
                <SavedVideoImg src={item.thumbnailUrl} alt="video thumbnail" />
                <div>
                  <p>{item.title}</p>
                  <p>{item.channelName}</p>
                  <ViewCard>
                    <Channelpara>{item.viewCount} views</Channelpara>
                    <Channelpara>{date} ago</Channelpara>
                  </ViewCard>
                </div>
              </TrendingVideo>
            </Link>
          )
        }}
      </ActiveMenu.Consumer>
    )
  }

  displaySavedVideos = (darkMode, savedVideosList) => (
    <>
      <TrendingTop darkMode={darkMode}>
        <HiFire size="50" color="red" />
        <TrendingHead>Saved Videos</TrendingHead>
      </TrendingTop>
      <VideosList>
        {savedVideosList.map(each => (
          <TrendingVideoDetails darkMode={darkMode} key={each.id}>
            {this.trendingVideoItem(each, darkMode)}
          </TrendingVideoDetails>
        ))}
      </VideosList>
    </>
  )

  render() {
    return (
      <ModeContext.Consumer>
        {value => {
          const {darkMode} = value

          return (
            <SavedVideosContext.Consumer>
              {valu => {
                const {savedVideosList} = valu

                const emptySavedList = savedVideosList.length === 0

                return (
                  <div>
                    <Header />
                    <TrendingMain>
                      <SideBar />
                      <TrendingCard
                        data-testid="savedVideos"
                        darkMode={darkMode}
                      >
                        <DisplayCard>
                          {emptySavedList ? (
                            <LoadingCard>
                              <img
                                className='no-saved-img'
                                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                                alt="no saved videos"
                              />
                              <h1 className='no-saved-h1'>No saved videos found</h1>
                              <p className='no-saved-p'>
                                You can save your videos while watching them
                              </p>
                            </LoadingCard>
                          ) : (
                            this.displaySavedVideos(darkMode, savedVideosList)
                          )}
                        </DisplayCard>
                      </TrendingCard>
                    </TrendingMain>
                  </div>
                )
              }}
            </SavedVideosContext.Consumer>
          )
        }}
      </ModeContext.Consumer>
    )
  }
}

export default SavedVideos
