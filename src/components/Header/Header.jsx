import React from 'react'
import { Container, Logo } from '../index.js'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import LogoutBtn from "./LogoutBtn.jsx"

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]

  return (
    <header className='py-4 shadow-md bg-white text-black'>
      <Container>
        <nav className='flex items-center justify-between'>
          {/* Logo Section*/}
          <div className='flex items-center space-x-4'>
            <Link to='/'>
              <Logo width='10px' />
            </Link>
          </div>

          {/* Navigation Links */}
          <ul className='flex items-center space-x-6'>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.slug}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className='px-4 py-2 rounded-lg text-black hover:text-white hover:bg-blue-600 duration-200 transition ease-in-out'
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}

            {/* Logout Button if Authenticated */}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
