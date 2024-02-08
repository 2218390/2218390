import React from "react";

export default function Login(){
    return (
        <div class="logIn">
        <div class="wrapper login" id="login-form">
         <div class="title">
            Login
         </div>
         <form action="#">
            <div class="field">
               <input type="text" required></input>
               <label>Email Address</label>
            </div>
            <div class="field">
               <input type="password" required></input>
               <label>Password</label>
            </div>
            <div class="content">
                <div class="checkbox">
                   <input type="checkbox" id="remember-me"></input>
                   <label for="remember-me">Remember me</label>
                </div>
                <div class="pass-link">
                   <a href="#">Forgot password?</a>
                </div>
             </div>
             <div class="field">
                <input type="submit" value="Login"></input>
             </div>
             <div class="signup-link">
                Not a member?
                <label for="policy">
                    <a href="/register">Sign Up Now</a>
                </label>
             </div>
          </form>
       </div>
       </div>
    )
}