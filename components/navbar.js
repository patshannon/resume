export default function Navbar() {
  return (
    <nav className="px-10 py-5 bg-gray-600 uppercase text-white container-xl font-light">
      <div className="flex flex-row justify-between">
      <ul className="flex flex-row gap-4">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
      </ul>
      </div>
    </nav>
  )
}