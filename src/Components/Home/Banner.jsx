import React from 'react'
import BannerImg from '../../Assets/mama.gif'
import '../../Stylesheet/Banner.css'

export const Banner = () => {
  return (
    <div>
      <img src={BannerImg} alt="Home Image Banner" className="Banner-image"/>
    </div>
  )
}
