import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, Laptop2, Maximize2, Volume, LayoutList} from "lucide-react"

import DarkSideOfTheMoon from '../app/img/Darksideofthemoon.jpg'
import ThisIsPavarotti from '../app/img/Pavarotti.png'
import QueenMix from '../app/img/Queen.jpg'
import ThisIsKanaboon from '../app/img/Kanaboon.jpg'
import RockForEver from '../app/img/RockForEver.jpg'
import BohemianRhapsody from '../app/img/bohemianRhapsody.jpg'
import HardRock from '../app/img/hardrock.jpg'
import HotelCalifornia from '../app/img/hotelCalifornia.jpg'


import Image from "next/image"
import { SideBar } from "./components/sidebar"
import { Footer } from "./components/footer"
import { Header } from "./components/header"

export default function Home() {


return (
  <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <SideBar/>
        <main className="flex-1 p-6">
              <Header/>
  	          <h1 className="font-bold text-3xl mt-10">Good Afternoon</h1>

              <div className="grid grid-cols-3 gap-6 mt-4">
                  <a href="" className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
                    <Image src={DarkSideOfTheMoon} alt="" width={104} height={104}/>
                    <strong>Darkside of the Moon</strong>
                    <button className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                      <Play/>
                    </button>
                  </a>
                  <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                    <Image src={ThisIsPavarotti} alt="" width={104} height={104}/>
                    <strong>This is: Pavarotti</strong>
                    <button className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                      <Play/>
                    </button>
                  </a>
                  <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                    <Image src={QueenMix} alt="" width={104} height={104}/>
                    <strong>Queen Mix</strong>
                    <button className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                      <Play/>
                    </button>
                  </a>
                  <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                    <Image src={ThisIsKanaboon} alt="" width={104} height={104}/>
                    <strong>This is Kana-Boon</strong>
                    <button className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                      <Play/>
                    </button>
                  </a>
                  <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                    <Image src={RockForEver} alt="" width={104} height={104}/>
                    <strong>Rock Forever </strong>
                    <button className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                      <Play/>
                    </button>
                  </a>           
              </div>

              <h1 className="font-semibold text-2xl mt-10">Made for Felipe Santos</h1>

              <div className="grid grid-cols-8 gap-4 mt-4">
                <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                  <Image src={QueenMix} className="w-full" alt="Darkside of the moon." width={120} height={120}/>
                  <strong className="font-semibold">Quem Mix </strong>
                  <span className="text-sm text-zinc-400">Wallowsm, Coin, girl in red and more</span>
                </a>
                <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                  <Image src={BohemianRhapsody} className="w-full" alt="Darkside of the moon." width={120} height={120}/>
                  <strong className="font-semibold">Bohemian Rhapsody</strong>
                  <span className="text-sm text-zinc-400">Wallowsm, Coin, girl in red and more</span>
                </a>
                <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                  <Image src="/Darksideofthemoon.jpg" className="w-full" alt="Darkside of the moon." width={120} height={120}/>
                  <strong className="font-semibold">Darkside of the moon </strong>
                  <span className="text-sm text-zinc-400">Wallowsm, Coin, girl in red and more</span>
                </a>
                <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                  <Image src={ThisIsKanaboon} className="w-full" alt="Darkside of the moon." width={120} height={120}/>
                  <strong className="font-semibold">This is Kana-boon </strong>
                  <span className="text-sm text-zinc-400">This is Kana-boon, Queen Mix and more</span>
                </a>
                <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                  <Image src={HotelCalifornia} className="w-full" alt="Darkside of the moon." width={120} height={120}/>
                  <strong className="font-semibold">Hotel California (2013 Remaster) </strong>
                  <span className="text-sm text-zinc-400">Eagles and more</span>
                </a>
                <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                  <Image src={ThisIsPavarotti} className="w-full" alt="Darkside of the moon." width={120} height={120}/>
                  <strong className="font-semibold">This is Pavarotti </strong>
                  <span className="text-sm text-zinc-400">This is Pavarotti, Classical Hits and more</span>
                </a>
                <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                  <Image src={RockForEver} className="w-full" alt="Darkside of the moon." width={120} height={120}/>
                  <strong className="font-semibold">Rock Mix </strong>
                  <span className="text-sm text-zinc-400">Rock Forever, Aerosmith, Queen and more.</span>
                </a>
                <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                  <Image src={HardRock} className="w-full" alt="Darkside of the moon." width={120} height={120}/>
                  <strong className="font-semibold">Mix Hard Rock </strong>
                  <span className="text-sm text-zinc-400">Darkside of The Moon, Dragonforce and more</span>
                </a>
              </div>

        </main>
      </div>
      <Footer/>
  </div>
  )
}