import Image from 'next/image'
import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, ListMusic, Laptop2, Volume1, Maximize2} from 'lucide'

createIcons({
  icons:{
    HomeIcon,
    Search,
    Library,
    ChevronLeft,
    ChevronRight,
    Play,
    Shuffle,
    SkipBack,
    SkipForward,
    Repeat,
    Mic2,
    ListMusic,
    Laptop2,
    Volume1,
    Maximize2
  }
});

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p=6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"/>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"/>
            <div className="w-3 h-3 bg-green-500 rounded-full"/>
          </div>


          <nav className="space-y-5 mt-10">
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200"><i icon-name = "HomeIcon"></i>Home</a>
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200"><i icon-name = "Search"></i>Seach</a>
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200"><i icon-name = "Library" ></i>Your Library</a>
          </nav>


          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">By the Way</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Stadium Arcadium</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Remenber That You Will Die</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">III: Lost Chapter</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Smite and Ignite</a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <i icon-name = "ChevronLeft"></i>
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <i icon-name = "ChevronRight"></i>
            </button>
          </div>

          <h1 className="text-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a href="#" className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"><Image src="/album1.jpg"  width={104} height={80} alt="Rock Believer"/>
            <strong>Daily Mix 1</strong>
            <button className="w-12 h-12 flex items-center justify-center pl=1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group:hover:visible">
              <i icon-name = "Play"></i>
            </button>
            </a>
            <a href="#" className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"><Image src="/album2.jpg"  width={104} height={80} alt="Remember That You Will Die"/>
            <strong>Daily Mix 2</strong>
            <button className="w-12 h-12 flex items-center justify-center pl=1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group:hover:visible">
              <i icon-name = "Play"></i>
            </button>
            </a>
            <a href="#" className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"><Image src="/album3.jpg"  width={104} height={80} alt="Playing God"/>
            <strong>Daily Mix 3</strong>
            <button className="w-12 h-12 flex items-center justify-center pl=1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group:hover:visible">
              <i icon-name = "Play"></i>
            </button>
            </a>
            <a href="#" className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"><Image src="/album4.jpg"  width={104} height={80} alt="III Lost Chapter"/>
            <strong>Daily Mix 4</strong>
            <button className="w-12 h-12 flex items-center justify-center pl=1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group:hover:visible">
              <i icon-name = "Play"></i>
            </button>
            </a>
            <a href="#" className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"><Image src="/album5.jpg"  width={104} height={80} alt="Grasp of the Undying"/>
            <strong>Daily Mix 5</strong>
            <button className="w-12 h-12 flex items-center justify-center pl=1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group:hover:visible">
              <i icon-name = "Play"></i>
            </button>
            </a>
            <a href="#" className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"><Image src="/album6.jpg"  width={104} height={80} alt="Californication"/>
            <strong>Daily Mix 6</strong>
            <button className="w-12 h-12 flex items-center justify-center pl=1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group:hover:visible">
              <i icon-name = "Play"></i>
            </button>
            </a>
          </div>

          <h2 className="text-semibold text-2xl mt-10">Feito para Laylson Rayan</h2>

          <div className="grid grid-cols-6 gap-4 mt-4">
            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image src="/album1.jpg" className="w-full" width={120} height={80} alt="Rock Believer"/>
              <strong className="font-semibold">Daily Mix 6</strong>
              <span className="text-sm text-zinc-400">RHCP, Imagine Dragons e Mais</span>
            </a>
            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image src="/album2.jpg" className="w-full" width={120} height={80} alt="Remember That You Will Die"/>
              <strong className="font-semibold">Daily Mix 7</strong>
              <span className="text-sm text-zinc-400">Eve, Mrs. Green Apple e Mais</span>
            </a>
            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image src="/album3.jpg" className="w-full" width={120} height={80} alt="Playing God"/>
              <strong className="font-semibold">Daily Mix 8</strong>
              <span className="text-sm text-zinc-400">Logic, November e Mais</span>
            </a>
            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image src="/album4.jpg" className="w-full" width={120} height={80} alt="III Lost Chapter"/>
              <strong className="font-semibold">Daily Mix 9</strong>
              <span className="text-sm text-zinc-400">Elton John, Queen, Kiss e Mais</span>
            </a>
            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image src="/album5.jpg" className="w-full" width={120} height={80} alt="Grasp of the Undying"/>
              <strong className="font-semibold">Daily Mix 10</strong>
              <span className="text-sm text-zinc-400">David Guetta, Alok e Mais</span>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
        <Image src="/album3.jpg" width={57} height={57} alt="Playing God"/>
        <div className="flex flex-col gap-1">
          <strong className="font-normal">Playing God</strong>
          <span className="text-xs text-zinc-400">Polyphia</span>
        </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-col items-center gap-6">
          <i icon-name = "Shuffle" className="text-zinc-200"></i>
          <i icon-name = "SkipBack" className="text-zinc-200"></i>
          <button className="w-10 h-10 flex items-center justify-center pl=1 rounded-full bg-white text-black">
              <i icon-name = "Play"></i>
            </button>
          <i icon-name = "SkipForward" className="text-zinc-200"></i>
          <i icon-name = "Repeat" className="text-zinc-200"></i>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">0.28</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="bg-zinc-2000 w-30 h-1 rounded-full"></div>
            </div>
            <span className="text-xs text-zinc-400">3.25</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
        <i icon-name = "Mic2"></i>
        <i icon-name = "ListMusic"></i>
        <i icon-name = "Laptop2"></i>
        <div className="flex items-center gap-2">
        <i icon-name = "Volume1"></i>
        <div className="h-1 rounded-full w-24 bg-zinc-600">
              <div className="bg-zinc-2000 w-10 h-1 rounded-full"></div>
            </div>
        </div>
        <i icon-name = "Maximize2"></i>
        </div>
      </footer>
    </div>
  )
}
function createIcons(arg0: { icons: {}; }) {
  throw new Error('Function not implemented.');
}

