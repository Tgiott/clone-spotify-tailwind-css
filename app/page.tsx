import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, Laptop2, Maximize2, Volume, LayoutList} from "lucide-react"
import Image from "next/image"
import { SideBar } from "./components/sidebar"
import { Footer } from "./components/footer"

export default function Home() {


return (
  <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <SideBar/>
        <main className="flex-1 p-6">
              <div className="flex items-center gap-4">
                  <button className="rounded-full bg-black/40 p-1"><ChevronLeft/></button>
                  <button className="rounded-full bg-black/40 p-1"><ChevronRight/></button>
              </div>

  	          <h1 className="font-bold text-3xl mt-10">Good Afternoon</h1>

              <div className="grid grid-cols-3 gap-6 mt-4">
                  <a href="" className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
                    <Image src="/Darksideofthemoon.jpg" alt="" width={104} height={104}/>
                    <strong>Darkside of the Moon</strong>
                    <button className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                      <Play/>
                    </button>
                  </a>
                  <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                    <Image src="/Darksideofthemoon.jpg" alt="" width={104} height={104}/>
                    <strong>Darkside of the Moon</strong>
                    <button className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                      <Play/>
                    </button>
                  </a>
                  <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                    <Image src="/Darksideofthemoon.jpg" alt="" width={104} height={104}/>
                    <strong>Darkside of the Moon</strong>
                    <button className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                      <Play/>
                    </button>
                  </a>
                  <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                    <Image src="/Darksideofthemoon.jpg" alt="" width={104} height={104}/>
                    <strong>Darkside of the Moon</strong>
                    <button className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                      <Play/>
                    </button>
                  </a>
                  <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
                    <Image src="/Darksideofthemoon.jpg" alt="" width={104} height={104}/>
                    <strong>Darkside of the Moon</strong>
                    <button className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                      <Play/>
                    </button>
                  </a>           
              </div>

              <h1 className="font-semibold text-2xl mt-10">Made for Felipe Santos</h1>

              <div className="grid grid-cols-8 gap-4 mt-4">
                <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                  <Image src="/Darksideofthemoon.jpg" className="w-full" alt="Darkside of the moon." width={120} height={120}/>
                  <strong className="font-semibold">Daily Mix 1 </strong>
                  <span className="text-sm text-zinc-400">Wallowsm, Coin, girl in red and more</span>
                </a>
                <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                  <Image src="/Darksideofthemoon.jpg" className="w-full" alt="Darkside of the moon." width={120} height={120}/>
                  <strong className="font-semibold">Daily Mix 1 </strong>
                  <span className="text-sm text-zinc-400">Wallowsm, Coin, girl in red and more</span>
                </a>
                <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                  <Image src="/Darksideofthemoon.jpg" className="w-full" alt="Darkside of the moon." width={120} height={120}/>
                  <strong className="font-semibold">Daily Mix 1 </strong>
                  <span className="text-sm text-zinc-400">Wallowsm, Coin, girl in red and more</span>
                </a>
                <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                  <Image src="/Darksideofthemoon.jpg" className="w-full" alt="Darkside of the moon." width={120} height={120}/>
                  <strong className="font-semibold">Daily Mix 1 </strong>
                  <span className="text-sm text-zinc-400">Wallowsm, Coin, girl in red and more</span>
                </a>
                <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                  <Image src="/Darksideofthemoon.jpg" className="w-full" alt="Darkside of the moon." width={120} height={120}/>
                  <strong className="font-semibold">Daily Mix 1 </strong>
                  <span className="text-sm text-zinc-400">Wallowsm, Coin, girl in red and more</span>
                </a>
                <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                  <Image src="/Darksideofthemoon.jpg" className="w-full" alt="Darkside of the moon." width={120} height={120}/>
                  <strong className="font-semibold">Daily Mix 1 </strong>
                  <span className="text-sm text-zinc-400">Wallowsm, Coin, girl in red and more</span>
                </a>
                <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                  <Image src="/Darksideofthemoon.jpg" className="w-full" alt="Darkside of the moon." width={120} height={120}/>
                  <strong className="font-semibold">Daily Mix 1 </strong>
                  <span className="text-sm text-zinc-400">Wallowsm, Coin, girl in red and more</span>
                </a>
                <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                  <Image src="/Darksideofthemoon.jpg" className="w-full" alt="Darkside of the moon." width={120} height={120}/>
                  <strong className="font-semibold">Daily Mix 1 </strong>
                  <span className="text-sm text-zinc-400">Wallowsm, Coin, girl in red and more</span>
                </a>
              </div>

        </main>
      </div>
      <Footer/>
  </div>
  )
}