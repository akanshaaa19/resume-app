import { useRef, useState } from "react";

import resume01 from "../assets/resume-01.png";
import resume02 from "../assets/resume-02.png";
import resume03 from "../assets/resume-03.png";
import Header from "../ui/Header";
import { useDispatch } from "react-redux";
import { authActions} from '../../store'
import Loading from "../ui/Loading/Loading";
import { useNavigate } from "react-router-dom";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

function AuthPage() {
  const [isLogIn, setIsLogIn] = useState(true);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  async function addUser(name, email) {
    await setDoc(doc(db, "users", email), {
      name: name,
      email: email,
      personalDetails: {},
      educationDetails: [],
      workDetails: [],
      skills: [],
    });
  }

  async function getUser(email) {
    const docRef = doc(db, "users", email);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return;
    }
  }

  function authenticationHandeler(e) {
    e.preventDefault();
    setLoading(true);
    let url;
    if (isLogIn) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCzjum7JCEl7J1kTgJyHmCxZNM1XxLb7DI";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCzjum7JCEl7J1kTgJyHmCxZNM1XxLb7DI";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: emailRef.current.value,
        password: passwordRef.current.value,
        returnSecureToken: true,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          setLoading(false);
          return response.json();
        } else {
          setLoading(false);
          response.json().then((data) => {
            setError(data.error.message);
            console.log(error);
          });
        }
      })
      .then((data) => {
        console.log(data);

        if (isLogIn) {
          getUser(data.email).then((result) => {
            console.log(result);
            // localStorage.setItem("email", result.email);
          });
        } else {
          addUser(nameRef.current.value, emailRef.current.value);
        //   localStorage.setItem("email", emailRef.current.value);
        }

        dispatch(
          authActions.logInHandeler({
            token: data.token,
            email: emailRef.current.value,
          })
        );
        navigate("/edit/templates");
      });
  }

  return (
    <>
      {/* <header className="py-6 px-8 fixed text-xl font-semibold">
        <p>resunator</p>
      </header> */}
      <Header />
      <section className=" auth h-screen flex ">
        <div className="w-2/5 h-full flex items-center justify-center">
          <div className="">
            <h2 className="text-2xl mb-4 font-semibold">
              {isLogIn ? "Log In" : "Sign Up"}
            </h2>
            <form onSubmit={authenticationHandeler}>
              {!isLogIn && (
                <div className="mb-3">
                  <label className="block text-sm mb-1 font-medium">Name</label>
                  <input
                    className="bg- py-2 px-4 bg-[#292929] rounded-lg focus:border-violet-500"
                    ref={nameRef}
                    placeholder="John Doe"
                    type="name"
                  />
                </div>
              )}
              <div className="mb-3">
                <label className="block text-sm mb-1 font-medium">Email</label>
                <input
                  className="bg- py-2 px-4 bg-[#292929] rounded-lg focus:border-violet-500"
                  ref={emailRef}
                  placeholder="example@mail.com"
                  type="email"
                />
              </div>
              <div className="">
                <label className="block text-sm mb-1 font-medium">
                  Password
                </label>
                <input
                  className="bg- py-2 px-4 bg-[#292929] rounded-lg focus:border-violet-500"
                  ref={passwordRef}
                  placeholder="●●●●●●●"
                  type="password"
                />
                <p className="text-violet-400 text-right font-medium mt-2">
                  Forgot Password?
                </p>
              </div>
              <div className="w-full flex justify-center">
                {loading ? (
                  <Loading />
                ) : (
                  <button
                    type="submit"
                    className="py-2 px-4 w-full bg-violet-400 rounded-lg mt-4"
                  >
                    {isLogIn ? "Log In" : "Sign Up"}
                  </button>
                )}
              </div>
              <p className="mt-3">
                {isLogIn
                  ? "Don't have an account?"
                  : "Already have an account?"}{" "}
                <span
                  className="underline font-semibold text-violet-400"
                  onClick={() => {
                    setIsLogIn(!isLogIn);
                  }}
                >
                  {isLogIn ? "Sign Up" : "Log In"}
                </span>
              </p>
              {error && <p>{error}</p>}
            </form>
          </div>
        </div>
        <div
          style={{
            background: "#0F2027",
            //   background:
            // "-webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027)" ,
            background: "linear-gradient(to right, #1e1e1e, #203A43, #2a2a2a)",
          }}
          className="w-3/5 h-full overflow-y-hidden relative"
        >
          <div>
            <div className="">
              <img
                style={{ top: "2rem", right: "10rem" }}
                className="h-3/4 absolute drop-shadow-xl rounded-md"
                src={resume01}
              />
              <img
                style={{ top: "6rem", right: "16rem" }}
                className="h-3/4 absolute drop-shadow-xl rounded-md"
                src={resume02}
              />
              <img
                style={{ top: "10rem", right: "22rem" }}
                className="h-3/4 absolute drop-shadow-xl rounded-md"
                src={resume03}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AuthPage;
