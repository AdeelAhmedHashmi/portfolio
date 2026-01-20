import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <>
      <header className="p-4 flex items-center bg-gray-800 text-white shadow-lg">
        <h1 className="ml-4 text-xl font-semibold bg-sur">
          <Link to="/">
            <h1>AdeelAhmed</h1>
          </Link>
        </h1>
      </header>
    </>
  )
}
