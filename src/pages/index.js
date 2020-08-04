import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <Link to="/contact/">Contact</Link>
      <h1>그레이트 코멧</h1>
      <p>comming soon!</p>
      <img src="https://image.genie.co.kr/Y/IMAGE/IMG_MUZICAT/IV2/Genie_Magazine/8006/Mgz_Sub_IMG_20200207121923.jpg" alt="" />
      <button class="primary-button">Click me</button>
    </div>
  );
  // return React.createElement("div", null, "Hello world!")
}

