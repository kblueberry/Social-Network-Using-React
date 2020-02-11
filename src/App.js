import React from 'react';
// import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img
          src="https://pngimage.net/wp-content/uploads/2018/06/logo-background-png-6.png"
          alt="logo"
        />
      </header>
      <nav className="nav">
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className="content">
        <div className="content-image">
          <img
            src="https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg"
            alt="sea"
          />
        </div>
        <div className="profile-wrapper">
          <img
            src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1414,w_2101,x_20,y_0/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg?itok=Nj49PDxW"
            alt="cat"
          />
          <div className="desc-wrapper">
            <div className="profile-name">Dmitry K.</div>
            <div className="profile-desc">
              <p>Date Of Birth: Jan 2</p>
              <p>City: Minsk</p>
              <p>Education: BSU'11</p>
              <p>Website:https://it-kamasutra.com</p>
            </div>
          </div>
        </div>
        <div className="wall-wrapper">
          My posts
          <div className="create-a-post">
            <textarea className="post-field" rows="3" cols="120">
              Start posting
            </textarea>
            <button className="button-send">Send</button>
          </div>
        </div>
        <div className="wall-post">
          <div />
          <p>Hey, why nobody loves me?</p>
        </div>
        <div className="wall-post">
          <div />
          <p>It's our new program! Hey!</p>
        </div>
      </div>
    </div>
  );
};

export default App;
