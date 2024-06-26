import { useEffect } from "react";
import "./LoginPage.css";

export default function LoginPage() {
  useEffect(() => {
    const signInBtn = document.getElementById("signIn");
    const signUpBtn = document.getElementById("signUp");
    const fistForm = document.getElementById("form1");
    const secondForm = document.getElementById("form2");
    const container = document.querySelector(".container");

    signInBtn.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });

    signUpBtn.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });

    fistForm.addEventListener("submit", (e) => e.preventDefault());
    secondForm.addEventListener("submit", (e) => e.preventDefault());

    // cleanup 함수를 반환하여 컴포넌트가 언마운트될 때 이벤트를 제거합니다.
    return () => {
      signInBtn.removeEventListener("click", () => {
        container.classList.remove("right-panel-active");
      });
      signUpBtn.removeEventListener("click", () => {
        container.classList.add("right-panel-active");
      });
      fistForm.removeEventListener("submit", (e) => e.preventDefault());
      secondForm.removeEventListener("submit", (e) => e.preventDefault());
    };
  }, []);
  return (
    <div class="container right-panel-active">
      <div class="container__form container--signup">
        <form action="#" class="form" id="form1">
          <h2 class="form__title">Sign Up</h2>
          <input type="text" placeholder="User" class="input" />
          <input type="email" placeholder="Email" class="input" />
          <input type="password" placeholder="Password" class="input" />
          <button class="btn">Sign Up</button>
        </form>
      </div>

      <div class="container__form container--signin">
        <form action="#" class="form" id="form2">
          <h2 class="form__title">Sign In</h2>
          <input type="email" placeholder="Email" class="input" />
          <input type="password" placeholder="Password" class="input" />
          <a href="#" class="link">
            Forgot your password?
          </a>
          <button class="btn">Sign In</button>
        </form>
      </div>

      <div class="container__overlay">
        <div class="overlay">
          <div class="overlay__panel overlay--left">
            <button class="btn" id="signIn">
              Sign In
            </button>
          </div>
          <div class="overlay__panel overlay--right">
            <button class="btn" id="signUp">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
