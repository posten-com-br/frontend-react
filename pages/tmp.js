import React, { useState, useEffect } from "react";

// import { Container } from './styles';

import "isomorphic-fetch";
import Link from "next/link";

const Tmp = ({ usr, ctx } = fetcher) => {
  const [username, setUsername] = useState();

  if (ctx.res) {
    ctx.res.writeHead(302, {
      Location: "/login",
    });
    ctx.res.end();
    console.log("backend");
  }

  function isUser() {
    // if (username === null || username === "") {
    //   console.log(username, "primeira verificacao se tem username");
    //   // return (
    //   //   <>
    //   //     <h1>Login</h1>
    //   //   </>
    //   // );
    //   if (!ctx.res) {
    //     console.log("frontend", username);

    //     if (username === null || username === "") {
    //       console.log("não tem", username);
    //       window.location.href = "/login";
    //     } else {
    //       console.log("tem", username);
    //     }
    //   }
    // }
    if (username === null || username === "") {
      console.log("não tem", username);
      window.location.href = "/login";
    } else {
      console.log("tem", username);
    }
  }

  useEffect(() => {
    // localStorage.setItem("loggedIn", "rafael");
    const user = localStorage.getItem("loggedIn");
    setUsername(user);
    isUser();
  }, [username]);

  return (
    <>
      {username && (
        <>
          <h1>tem {username} </h1>
          <Link href={{ pathname: "/", query: { name: "test" } }}>
            <a>HOME</a>
          </Link>
        </>
      )}
    </>
  );
};

export default Tmp;

// const Page = ({ name, stargazers_count }) => (
//   <div>
//     {name} stars: {stargazers_count}
//   </div>
// )

Tmp.getInitialProps = (ctx) => {
  // return fetch('https://api.github.com/repos/developit/preact')
  //   .then(res => res.json())

  const fetcher = {
    ctx,
    usr: "rafael",
  };
  return fetcher;
};
