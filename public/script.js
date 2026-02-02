let isLogin = true;

function switchForm() {
  isLogin = !isLogin;
  title.innerText = isLogin ? "Login" : "Signup";
}

async function submit() {
  const res = await fetch(isLogin ? "/login" : "/signup", {
    method:"POST",
    headers:{ "Content-Type":"application/json" },
    body:JSON.stringify({
      email: email.value,
      password: password.value
    })
  });
  const data = await res.json();
  msg.innerText = data.message || "Success";
}
