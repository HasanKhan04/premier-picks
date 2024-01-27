import "./globals.css";
import PLIcon from "@/public/PLIcon";
import Badges from "@/public/Badges";

export default function Home() {

  return (
    <main className="relative flex">
      <h1 className="absolute bottom-60 left-20 z-10 text-white font-black text-8xl uppercase">
        Premier <br className="pb-4" /> Picks
      </h1>
      <p className="absolute bottom-40 left-20 z-10 text-white font-black text-lg uppercase">
        Premier League player stats at your fingertips.
      </p>
      <button className="absolute bottom-20 left-20 btn btn-outline btn-lg btn-secondary">Get Started</button>
      <PLIcon />
      <Badges />
    </main>
  )
}
