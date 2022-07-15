
import backgroundImage from "./images/BallsBack1.jpg";


export default function HomePage() {
  return (
    <div className="flex flex-col place-items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-0" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="h-6 max-w-4xl mx-auto sm:px-6 lg:px-8">
      </div>
      <div className=" max-w-4xl mx-auto sm:px-6 lg:px-8 border-t-4 border-slate-200 bg-slate-200 text-black">
        <h2 className="text-lg font-extrabold">WELCOME TO THE BALL STORE</h2>
        <br />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <br />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <br />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div className="h-6 max-w-4xl mx-auto sm:px-6 lg:px-8">
      </div>
    </div >
  )
}


