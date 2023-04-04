import { FaTimes } from 'react-icons/fa';
import { social, links } from '../data';
import { useGlobalContext } from '../context';

const logoUrl =
  'https://res.cloudinary.com/dylvkdabj/image/upload/v1680496923/website%20pics%20family/development_logo_hpyyun.jpg';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={isSidebarOpen ? 'sidebar show-modal' : 'sidebar'}>
      <div className='sidebar-header'>
        <img src={logoUrl} alt='logo' className='logo-img' />
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      {/* id, social, icon */}
      <ul className='social-links'>
        {social.map((socialLink) => {
          const { id, url, icon } = socialLink;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
export default Sidebar;
