import Link from "next/link";
import Image from "next/image";

export default function Nav(): JSX.Element {
  return (
    <div className="nav">
      <div className="nav-items">
        <Link href="/">
          <a className="nav-brand">
            <div className="nav-brand-icon w-8 h-8 rounded-md bg-white p-1 aspect-w-8 aspect-h-8">
              <Image src={"/brand/prosperity-logo_mono.png"} width="100%" height="100%" className="bg-gray-500" />
            </div>
            <p className="invisible absolute md:visible md:contents">Prosperity MC</p>
          </a>
        </Link>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/wiki/home">
          <a>Wiki</a>
        </Link>
        <Link href="/gallery">
          <a>Gallery</a>
        </Link>
        <Link href="/stats">
          <a>Stats</a>
        </Link>
      </div>
      <div className="nav-items">
        <a href="https://github.com/ProsperityMC" target="_blank" rel="noreferrer">
          {/* GitHub SVG */}
          <svg className="w-6 md:w-8" viewBox="0 0 1024 1024">
            <g className="fill-current" transform="matrix(31.4313,0,0,32.2267,511.953,1028.16)">
              <path d="M0,-31.904C-8.995,-31.904 -16.288,-24.611 -16.288,-15.614C-16.288,-8.417 -11.621,-2.312 -5.148,-0.157C-4.333,-0.008 -4.036,-0.511 -4.036,-0.943C-4.036,-1.329 -4.05,-2.354 -4.058,-3.713C-8.589,-2.729 -9.545,-5.897 -9.545,-5.897C-10.286,-7.778 -11.354,-8.279 -11.354,-8.279C-12.833,-9.29 -11.242,-9.27 -11.242,-9.27C-9.607,-9.154 -8.747,-7.591 -8.747,-7.591C-7.294,-5.102 -4.934,-5.821 -4.006,-6.237C-3.858,-7.29 -3.438,-8.008 -2.972,-8.415C-6.589,-8.826 -10.392,-10.224 -10.392,-16.466C-10.392,-18.244 -9.757,-19.698 -8.715,-20.837C-8.883,-21.249 -9.442,-22.905 -8.556,-25.148C-8.556,-25.148 -7.188,-25.586 -4.076,-23.478C-2.777,-23.839 -1.383,-24.02 0.002,-24.026C1.385,-24.02 2.779,-23.839 4.08,-23.478C7.19,-25.586 8.555,-25.148 8.555,-25.148C9.444,-22.905 8.885,-21.249 8.717,-20.837C9.761,-19.698 10.392,-18.244 10.392,-16.466C10.392,-10.208 6.583,-8.831 2.954,-8.428C3.539,-7.925 4.06,-6.931 4.06,-5.411C4.06,-3.234 4.04,-1.477 4.04,-0.943C4.04,-0.507 4.333,0 5.16,-0.159C11.628,-2.318 16.291,-8.419 16.291,-15.614C16.291,-24.611 8.997,-31.904 0,-31.904" />
            </g>
          </svg>
        </a>
        <a href="https://trello.com/b/5REhvGyT/survival-projects" target="_blank" rel="noreferrer">
          {/* Trello SVG */}
          <svg className="w-6 md:w-8" width="100%" height="100%" viewBox="0 0 1024 1024">
            <g className="fill-current" transform="matrix(16.4155,0,0,16.4076,-94.8817,-623.49)">
              <path d="M60.75,38L13.19,38C9.125,38 5.78,41.345 5.78,45.41L5.78,93C5.78,97.065 9.125,100.41 13.19,100.41L60.75,100.41C64.815,100.41 68.16,97.065 68.16,93L68.16,45.43C68.16,45.423 68.16,45.417 68.16,45.41C68.16,41.345 64.815,38 60.75,38ZM32.65,83C32.65,84.351 31.541,85.465 30.19,85.47L19.76,85.47C18.407,85.465 17.295,84.353 17.29,83L17.29,52C17.295,50.647 18.407,49.535 19.76,49.53L30.19,49.53C31.541,49.535 32.65,50.649 32.65,52L32.65,83ZM56.65,68.79C56.645,70.143 55.533,71.255 54.18,71.26L43.75,71.26C42.399,71.255 41.29,70.141 41.29,68.79L41.29,52C41.29,50.649 42.399,49.535 43.75,49.53L54.18,49.53C55.533,49.535 56.645,50.647 56.65,52L56.65,68.79Z" />
            </g>
          </svg>
        </a>
        <a
          className="invisible absolute sm:visible sm:contents"
          href="https://discord.gg/hfTxZ4XxYj"
          target="_blank"
          rel="noreferrer"
        >
          <button className="btn btn-amber">Join ↗</button>
        </a>
      </div>
    </div>
  );
}
