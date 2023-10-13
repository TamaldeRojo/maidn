import React from 'react'
import Link from 'next/link'

function NavbarRoutes() {

    
const links = [
{
  label: 'Home',
  value: '/'
},
{
  label: 'Mobile Recharge',
  value: '/'
},
{
  label: 'Mobile',
  value: '/'
},
{
  label: 'Pc',
  value: '/'
},
{
  label: 'Xbox',
  value: '/'
},
{
  label: 'Psn',
  value: '/'
},
{
  label: 'Nintendo',
  value: '/'
},
]

// {links.map(({label,value})=>{
//   <Link className="navbar__link relative" href={value}> 
//     {label}
//   </Link>
// })}
  return (
    <div className='hidden lg:block'>
        <div className="container">
            <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
            <Link className="navbar__link relative" href="/"> Home </Link>
            <Link className="navbar__link relative" href="/"> Mobile Recharge </Link>
            <Link className="navbar__link relative" href="/"> Mobile </Link>
            <Link className="navbar__link relative" href="/"> Pc </Link>
            <Link className="navbar__link relative" href="/"> Xbox </Link>
            <Link className="navbar__link relative" href="/"> Psn </Link>
            <Link className="navbar__link relative" href="/"> Nintendo </Link>
            </div>
        </div>
    </div>
  )
}

export default NavbarRoutes