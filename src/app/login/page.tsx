"use client";
export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <button
        onClick={() => {
          window.localStorage.setItem("accessToken", "1234");
        }}
      >
        Login
      </button>
    </div>
  );
}
