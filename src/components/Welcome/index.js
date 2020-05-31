import React, { Component } from "react";

import Link from "next/link";

export default class Welcome extends Component {
  state = {
    loggedIn: false,
  };

  componentDidMount() {
    console.log("carregou");
    const logged = localStorage.getItem("occasion");
    console.log(logged);
    this.setState({ loggedIn: true });
  }

  // if (logged !== null) {
  //   return (
  //     <Container>
  //       <p>{`Bem vindo ${username}`}</p>
  //       <SubmitButton onClick={handleLogout}>Sair</SubmitButton>
  //     </Container>
  //   )
  // }

  render() {
    if (this.loggedIn !== false) {
      console.log(111111);
    }
    function name(params) {
      console.log(params);
    }
    return (
      <>
        <h1>Welcome</h1>
        <button onClick={() => name()}>Abrir</button>
        <Link href={{ pathname: "/", query: { name: "test" } }}>
          <a>About us</a>
        </Link>
      </>
    );
  }
}
