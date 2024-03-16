import React from 'react';
import './NewsCard.css';

const NewsCard = ({newsItem}) => {
    // console.log(newsItem)
  return (
    <div className='newsCard'>
      <div className="imgg">
      <img alt={newsItem.title} src={newsItem.urlToImage ? newsItem.urlToImage : newsItem.url} className='newsImage'></img></div>
      <div className='newsText'>
        <div>
            <span className='title'>{newsItem.title}</span>
        </div>
        <div>
            <div className='desc'>
                {newsItem.description}
            </div>
        </div>
      </div>
    </div>
  )
}

export default NewsCard
