import logo from './logo.svg';
import './App.css';
import header_img from './header.png';
import footer_img from './footer.png';
import test_video from './test.mp4';
import a_video from './a.mp4';
import b_video from './b.mp4';

function App() {
  return (
    <div>
  <title>디스코드 학생비서</title>
  <header>
    <div className="header-logo">
      <img src={header_img} />
    </div>
    <div className="menu">
      <nav className="mainMenu">
        <a href="#">메인</a>
        <a href="https://studentassistant.xyz/commands">명령어</a>
        <a href="https://discord.gg/gwpVPprSZn">지원</a>
        <a href="https://studentassistant.xyz/intropage">개발자</a>
        <a href="#">로그인</a>
      </nav>
    </div>
    <button className="more-btn">
      <i className="icon" />
    </button>
  </header>
  <div className="container">
    <div className="contents">
      <video
        id="contents-video"
        src={test_video}
        muted
        autoPlay
        loop
      />
      <div className="jb-texts">
        <h3>초중고 학생들의 비서</h3>
        <h1>학생비서</h1>
        <h4>학교 생활 필수 봇!</h4>
      </div>
      <div id="btn">
        <button
          className="invi"
          onclick="window.location.href='https://discord.com/oauth2/authorize?client_id=1072757693107945552&permissions=8&scope=applications.commands%20bot';"
        >
          초대하기
        </button>
      </div>
    </div>
    <div className="first-banner">
      <div className="video-one">
        <video id="video-one" src={a_video} muted autoPlay loop />
      </div>
      <div className="fir-ba-text">
        <h1>오늘 밥 뭐 나오지?</h1>
        <h4>
          학교 생활에서 빠질 수 없는 중요한 3가지는 언제,
          <br />
          어디서든 장소 제약 없이 학생비서가
          <br />
          간편하고 빠르게 알려드립니다
        </h4>
        <button
          className="fir-funtion"
          onclick="window.location.href='https://docs.google.com/document/d/1jIWyK_DoboVsWDXxLwqNP6F-J0G23ufCAgLvaB_gOSQ/edit?usp=sharing';"
        >
          명령어보러가기
        </button>
      </div>
    </div>
    <div className="second-banner">
      <div className="video-two">
        <video id="video-two" src={b_video} muted autoPlay loop />
      </div>
      <div className="sec-ba-text">
        <h1>내 정보는 소중하니까</h1>
        <h4>
          개인정보 보호 모드를 통해 학생비서를
          <br />
          모든 서버에서 안전하게 사용하세요
        </h4>
        <button
          className="sec-funtion"
          onclick="window.location.href='https://docs.google.com/document/d/1jIWyK_DoboVsWDXxLwqNP6F-J0G23ufCAgLvaB_gOSQ/edit?usp=sharing';"
        >
          명령어 보러가기
        </button>
      </div>
    </div>
  </div>
  <footer>
    <div className="footer-logo">
      <img src={footer_img} />
    </div>
    <nav className="footer-mainMenu">
      <h3>학생비서</h3>
      <h3>지원</h3>
      <h3>운영약관</h3>
      <nav className="footer-subMenu" vlink>
        <ul>
          <li>
            <a href="#">메인</a>
          </li>
          <li>
            <a href="https://discord.com/oauth2/authorize?client_id=1072757693107945552&permissions=8&scope=applications.commands%20bot">
              초대
            </a>
          </li>
          <li>
            <a href="#">소개</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="https://discord.gg/gwpVPprSZn">지원서버</a>
          </li>
          <li>
            <a href="https://docs.google.com/document/d/1jIWyK_DoboVsWDXxLwqNP6F-J0G23ufCAgLvaB_gOSQ/edit?usp=sharing">
              명령어
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="https://docs.google.com/document/d/12AbT_BXpp_LvmbfIMBYoT4kss2khSUNm0Xt63waxdkU/edit?usp=sharing">
              이용약관
            </a>
          </li>
          <li>
            <a href="https://docs.google.com/document/d/1aRpseTcimmX4-ShpL8Ki1lGv8QiFz8RCR52gHXJbBO4/edit?usp=sharing">
              개인정보처리방침
            </a>
          </li>
        </ul>
      </nav>
    </nav>
    <div className="copyright">
      Copyright 2023. 학생비서 All rights reserved.
    </div>
  </footer>
</div>

  );
}

export default App;
