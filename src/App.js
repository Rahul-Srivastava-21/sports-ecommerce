import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import ImageSlider from "./ImageSlider.js";

function App() {
  const slides = [
    { url: "https://i.imgur.com/IIdITv6.png", title: "beach" },
    { url: "https://i.imgur.com/7v4azq2.jpg", title: "boat" },
    {
      url:
        "https://i.imgur.com/XuSbT7j.jpg",
      title: "forest"
    },
    { url: "https://i.imgur.com/VXEp6Ks.gif", title: "city" },
    { url: "https://i.imgur.com/FWCBFSg.gif", title: "italy" }
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto"
  };

  return (
    <div className="appMain">
      <Header />
      <div style={containerStyles}>
        <ImageSlider slides={slides} parentWidth={500} />
      </div>
      <h1 id="cat">SPORTS</h1>
      <div>
        <div className="categories">
          <a className="link" href="football.html">
          <div style={{ backgroundImage: 'url("https://img.freepik.com/premium-vector/football-player-vector-illustration-line-art-eps-file_583131-240.jpg?w=740")',
            backgroundSize: 'contain' }} className="a">
           <p className="nameTag">Football</p>
          </div>
          </a>
          <a className="link" href="cricket.html">
            <div style={{ backgroundImage: 'url("https://img.freepik.com/premium-vector/cricket-player-logo-design-vector-icon-symbol-template-illustration_647432-116.jpg?w=740")',
            backgroundSize: 'contain' }} className="a">
            <p className="nameTag">Cricket</p>
            </div>
          </a>
          <a className="link" href="badminton.html">
            <div style={{ backgroundImage: 'url("https://img.freepik.com/free-vector/badminton-player_23-2148168073.jpg?w=740&t=st=1700634854~exp=1700635454~hmac=a20420f351f0d5ab88c8bcc5f03293ed5d64645fe196ade49cddf452ae6f01a8")',
            backgroundSize: 'contain' }} className="a">
            <p className="nameTag">Badminton</p>
            </div>
          </a>
        </div>

        <div className="categories">
          <a className="link" href="rugby.html">
            <div style={{ backgroundImage: 'url("https://imgs.search.brave.com/zA_gHD1o32AbfSCR5fWuj0c_ntudRDMpPrTyaHscquM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTg4/NjYwODU5L3Bob3Rv/L2Zvb3RiYWxsLW9u/LWJsYWNrLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1xU2lP/eVNhLTVUQThPNGJz/aE1zb19UMHMxb2tQ/cmJWQWJaeXlFRVhx/eE1ZPQ")',
            backgroundSize: 'contain' }} className="a">
            <p className="nameTag">Rugby</p>
            </div>
          </a>
          <a className="link" href="cycling.html">
            <div style={{ backgroundImage: 'url("https://imgs.search.brave.com/hkUCmfHQkkwU_J5EpgiMNLSofAIAZTEUq5lr3eLgJ0k/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMx/MDEzNTIxMi9waG90/by9jeWNsaXN0LW9u/LXBhdGgtYnktc2Vh/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1wcFVJTUZHR1kt/Nm5fLVVRd2ZEY2Fn/XzdKVWY3aDhSdnda/YnFJdXJfRVhBPQ")',
            backgroundSize: 'cover'}}  className="a">
            <p className="nameTag">Cycling</p>
            </div>
          </a>
          <a className="link" href="swimming.html">
            <div style={{ backgroundImage: 'url("https://hips.hearstapps.com/hmg-prod/images/female-swimmer-at-the-swimming-pool-royalty-free-image-1568376387.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=2048:*")',
            backgroundSize: 'contain'}} className="a">
            <p className="nameTag">Swimming</p>
            </div>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
