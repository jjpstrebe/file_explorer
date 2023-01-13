import Link from 'next/link';
import styles from './top_menu.module.sass';
import { slide as Menu } from 'react-burger-menu'


export default function TopMenu({ }) {
  return (
    <div className={styles.container}>
      <Menu>
        <Link id="home" className="menu-item" href="/">Home</Link>
        <Link id="user-guide" className="menu-item" href="/help/user-guide">User Guide</Link>
        <Link id="settings" className="menu-item" href="/help/user-guide">Settings</Link>
      </Menu>
      <div>Back</div>
    </div>
  );
}
