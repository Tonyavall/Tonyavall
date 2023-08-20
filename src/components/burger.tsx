import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { FaHamburger } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

type Page = { name: string }

interface Props {
    currentLocation: string;
    pages: Page[]
}

const Burger: React.FC<Props> = ({ currentLocation, pages }) => {
    
  return (
    <Menu as="div" className="relative inline-block text-left md:hidden">
        <div>
            <Menu.Button as={FaHamburger} className="text-[2rem] text-white">
                Options
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
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[#1F2937] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                    {pages.map(({ name }: { name: string }) => (
                        <Menu.Item key={name}>
                            <Link to={`/${name}`}>
                                <button
                                    className={classNames(
                                        name === currentLocation ? 'bg-vs-bg text-vs-green' : 'text-white',
                                        'block px-4 py-2 text-sm',
                                        'w-full',
                                        'text-left',
                                        'capitalize'
                                    )}
                                >
                                    {name}
                                </button>
                            </Link>
                        </Menu.Item>
                    ))}
                </div>
            </Menu.Items>
        </Transition>
    </Menu>
  )
}

export default Burger;