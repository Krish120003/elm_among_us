import { type NextPage } from "next";
import { signIn, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home: NextPage = () => {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.status === "authenticated") {
      router.push("/game");
    }
  }, [session]);

  return (
    <>
      <Head>
        <title>AmongSUS</title>
        <meta name="description" content="Among Us Multiplayer made in Elm" />

        <meta property="og:url" content="https://elm-among-us.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AmongSUS" />
        <meta
          property="og:description"
          content="Among Us Multiplayer made in Elm"
        />
        <meta property="og:image" content="https://i.imgur.com/pZHaWqR.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="elm-among-us.vercel.app" />
        <meta
          property="twitter:url"
          content="https://elm-among-us.vercel.app"
        />
        <meta name="twitter:title" content="AmongSUS" />
        <meta
          name="twitter:description"
          content="Among Us Multiplayer made in Elm"
        />
        <meta name="twitter:image" content="https://i.imgur.com/pZHaWqR.png" />

        <title>AmongSUS</title>
        <meta name="description" content="Among us game in elm" />
        <link rel="icon" href="/favicon.jpeg" />
      </Head>
      <img src="/among-us-wallpaper-1.webp" className="h-full object-cover" />
      <button
        className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] rounded-xl bg-white py-10 px-20 text-2xl font-bold text-black shadow-2xl"
        onClick={() => {
          signIn();
        }}
      >
        Login
      </button>
    </>
  );
};

export default Home;

// export getServerSideProps() {}
