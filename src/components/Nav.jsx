import { hamburger, cross } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const changeIcon = () => {
  const imgCross = document.getElementById("hamburger");
  if (imgCross) {
    imgCross.src = cross;
  }
};

const resetIcon = () => {
  const imgCross = document.getElementById("hamburger");
  if (imgCross) {
    imgCross.src = hamburger; 
  }
};

const handleClick = () => {
  const display = document.getElementById("RS");
  const imgCross = document.getElementById("hamburger");
  
  if (display) {
    if (display.classList.contains('max-lg:hidden')) {
      display.classList.remove('max-lg:hidden');
      display.classList.add('show', 'small-font'); 
      changeIcon(); 
      if (imgCross) {
        imgCross.classList.add('rotate'); 
      }
    } else {
      display.classList.add('max-lg:hidden');
      display.classList.remove('show', 'small-font'); 
      resetIcon(); 
      if (imgCross) {
        imgCross.classList.remove('rotate'); 
      }
    }
  }
};

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img
            src={headerLogo}
            alt='logo'
            width={120}
            height={25}
            className='m-0 w-[120px] h-[25px]'
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden' id="RS">
          {navLinks.map((item) => (
            <li key={item.label} className="menu-item">
              <a
                href={item.href}
                className='font-montserrat leading-normal text-slate-gray text-lg'
              > 
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a href='/'>Sign in</a>
          <span>/</span>
          <a href='/'>Explore now</a>
        </div>
        <div className='hidden max-lg:block'>
          <img 
            src={hamburger} 
            alt='hamburger icon' 
            id="hamburger" 
            width={25} 
            height={25} 
            onClick={handleClick} 
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
