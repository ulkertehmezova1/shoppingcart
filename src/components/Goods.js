
import '../styles.css'
import React from 'react';
import GoodsItem from './GoodsItem';
const Goods=()=>{
  const [goods, setGoods]= React.useState([
    {
      id: 0,
      title: "Logitech C920 Hd Pro Webcam",
      description: "Full HD 1080p video that's faster, smoother and works on more computers. Skype in Full HD 1080p Get breathtaking Full HD 1080p video calls on Skype for the sharpest video-calling experience. Smoother. Sharper. Richer. Clearer. Logitech Fluid Crystal Technology. It's what makes a Logitech webcam better.",
      price: 120
  },
  {
      id: 1,
      title: "Logitech USB Headset H390 with Noise Cancelling Mic",
      description: "Padded headband and ear pads. Frequency response (Microphone): 100 hertz - 10 kilohertz Rotating, noise canceling microphone. Sensitivity (headphone) 94 dBV/Pa +/ 3 dB. Sensitivity (microphone) 17 dBV/Pa +/ 4 dB",
      price: 50
  },
  {
      id: 2,
      title: "Anker PowerCore 10000 Portable Charger",
      description: "One of The Smallest and Lightest 10000mAh Power Bank, Ultra-Compact Battery Pack, High-Speed Charging Technology Phone Charger for iPhone, Samsung and More.",
      price: 150
  }
  ])
  return(
    <div className="goods">
    <h2 className="goods__title">Video Games</h2>
    {goods.map(item => (
      <ul className="goods__list" key={item.id}>
        <li className="goods__list-item">
          <GoodsItem {...item} />
        </li>
      </ul>
    ))}
  </div>
  )
}
export default Goods