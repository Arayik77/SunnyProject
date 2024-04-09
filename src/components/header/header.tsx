import logo from '@/components/images/pulsdev.png';
import { Search } from 'lucide-react';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { SquarePlus, Sun, Newspaper, ShieldQuestion, User, Moon, Computer, LogIn, SquareUser } from 'lucide-react';
import { Link } from 'react-router-dom';
import useTheme from "@/hooks/useTheme";

const Header = () => {
    const { mode, setMode } = useTheme();

    return (
        <nav className="flex items-center justify-between bg-zinc-50 h-16 dark:bg-slate-500 shadow-light-300
            max-w-12xl mx-4 py-10 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
                <img src={ logo } className='w-11 pr-2'/>
                <h3 className='font-bold'>
                    PlusDev.
                    <span className='text-red-500'>NET</span>
                </h3>
            </div>
            <div className="flex w-full max-w-[600px] min-h-[46px] items-center rounded-xl bg-slate-200 px-4 dark:bg-slate-500">
                <Search className='text-slate-400' />
                <input placeholder='Search globally'
                    className='flex h-10 w-full border border-input px-3 py-2
                        bg-slate-200 outline-none 
                        placeholder:text-gray-400 dark:bg-slate-800 dark:text-zinc-100 dark:placeholder:text-gray-400'/>
            </div>
            <div className="flex items-center justify-between gap-5">
                {/* Post */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex  outline-none w-24">
                      <SquarePlus className='text-red-500' />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        <Link to="#" className='flex mx-5 my-3'>
                            <Newspaper className='mr-3' /> Create a Post
                        </Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link to="#" className='flex mx-5 my-3'>
                            <ShieldQuestion className='mr-3' /> Ask a Question
                        </Link>
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>


                {/* Dark Ligth */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex  outline-none w-24">
                      <Sun className='text-red-500' />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 py-4 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        <Link to="#" className='flex mx-5 my-3' onClick={() => setMode("light")}>
                            <Sun className='text-black-500 mx-3 dark:text-slate-500' />
                            <p className='dark:text-slate-500'>Ligth</p>
                        </Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link to="#" className='flex mx-5 my-3' onClick={() => setMode("dark")}>
                            <Moon className='text-black-500 mx-3 dark:text-slate-500' /> 
                            <p className='dark:text-slate-500'>Dark</p>
                        </Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link to="#" className='flex mx-5 my-3'  onClick={() => setMode("system")}>
                            <Computer className='text-black-500 mx-3 dark:text-slate-500' />
                            <p className='dark:text-slate-500'>System</p>
                        </Link>
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>


                {/* User */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex  outline-none w-24">
                      <User className='text-red-500' />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 py-4 z-10 mt-2 w-40 bg-gray-200 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        <Link to="#" className='flex mx-5 my-3'>
                            <LogIn className='text-black-500 mx-3 dark:text-slate-500' />
                            <p className='dark:text-slate-500'>Log In</p>
                        </Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link to="#" className='flex mx-5 my-3'>
                            <SquareUser className='text-black-500 mx-3 dark:text-slate-500' /> 
                            <p className='dark:text-slate-500'>Sign Up</p>
                        </Link>
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
            </div>
        </nav>
    );
}

export default Header;