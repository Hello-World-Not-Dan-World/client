import { React, useRef, useState } from "react";

function Main() {
  const videoRef = useRef();
  const setPlayBackRate = () => {
    videoRef.current.playbackRate = 0.5;
  };
  return (
    <div className="container">
      <video
        className="main-background"
        muted
        autoPlay
        loop
        ref={videoRef}
        onCanPlay={() => setPlayBackRate()}
      >
        <source src="Video.mp4" type="video/mp4" />
      </video>
      <Login />
    </div>
  );
}

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에 로그인 처리 로직을 추가하세요.
    console.log("Username:", username);
    console.log("Password:", password);
    // 예를 들어, 이 정보를 서버로 전송하여 인증을 수행할 수 있습니다.
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Main;
