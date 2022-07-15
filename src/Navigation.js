import { Disclosure } from '@headlessui/react'

import { NavLink, } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faCartShopping } from '@fortawesome/free-solid-svg-icons';




const navigation = [
  { name: 'HomePage', href: '/HomePage', current: false },
  { name: 'Store', href: '/Store', current: false },
  { name: 'Contact', href: '/Contact', current: false },
]

const navigation2 = [
  { name: 'HomePage', href: '#/HomePage', current: false },
  { name: 'Store', href: '#/Store', current: false },
  { name: 'Contact', href: '#/Contact', current: false },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Navigation() {
  return (
    <>

      <Disclosure as="nav" className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 bg-slate-200">
        {({ open }) => (
          <>
            <div className="max-w-7xl  ">
              <div className="relative flex items-center  h-16">
                <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <FontAwesomeIcon icon={faBars} className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <FontAwesomeIcon icon={faBars} className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center lg:items-stretch lg:justify-start">
                  <div className="hidden lg:block ">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            item.current ? 'bg-white text-slate-700 border-rose-700 border-2' : 'rounded-full nm-flat-gray-200 hover:nm-flat-gray-200-lg leading-5 px-8 py-4 uppercase font-bold tracking-widest transition duration-200 ease-in-out transform hover:scale-110',
                            'px-3 py-2 rounded-md text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Disclosure.Panel className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation2.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-white text-slate-300 border-rose-700 border-2' : 'rounded-full nm-flat-gray-200 hover:nm-flat-gray-200-lg leading-5 px-8 py-4 uppercase font-bold tracking-widest transition duration-200 ease-in-out transform hover:scale-110',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <div className=" max-w-7xl justify-evenly items-center mx-auto h-3 sm:px-6 lg:px-8 nm-inset-gray-200-sm ">
      </div>
    </>
  )
}



