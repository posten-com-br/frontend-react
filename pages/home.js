import React from "react";
import Link from "next/link";
import Head from "next/head";

const Home = () => (
  <div>
    <Head>
      <title>Meu App NextJS</title>
    </Head>
    <img width="200" src="/static/panda.jpg" />
    <Link prefetch href="/users">
      <a>Usuários</a>
    </Link>
    <Link href="/tmp">
      <a>login</a>
    </Link>
  </div>
);

export default Home;
