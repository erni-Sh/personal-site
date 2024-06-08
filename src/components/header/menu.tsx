import React, {FC, JSX, useEffect, useState} from 'react';
import mainMenuItems from '@/data/main-menu-items';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

interface IMenu {
  closeMenu: () => void,
}

const Menu: FC<IMenu> = ({closeMenu}): JSX.Element => {
  const pathname = usePathname();
  const [openedMenuItem, setOpenedMenuItem] = useState(0);

  const CloseButton = (
    <div className="x-filter" onClick={closeMenu}>
      <span/>
      <span/>
    </div>
  );

  useEffect(() => {
    setOpenedMenuItem(0);
    closeMenu();
  },[pathname])

  return (
    <nav>
      {CloseButton}
      <ul>
        {mainMenuItems.map((item, i) => (
          <li className={[
            'hover-sub-menu',
            (i + 1) === openedMenuItem ? 'click' :
            openedMenuItem && 'no-hovered'
          ].join(' ')} key={i}>
            <Link
              href={item.link || ''}
              onClick={() => setOpenedMenuItem(i + 1)}
            >{item.title}</Link>
            {!item.subMenu ? <></> :
              <ul className="sub-menu">
                {item.subMenu.map((subItem, j) => (
                  <li key={j}>
                    <Link href={subItem.link}>{subItem.title}</Link>
                  </li>
                ))}
              </ul>
            }
          </li>
        ))}
      </ul>
      {CloseButton}
    </nav>
  );
};

export default Menu;