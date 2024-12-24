import SocialLinks from './SocialLinks';
import NavBar from './NavBar';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="bg-blue-50 text-black">
      <div className="container mx-auto px-5 py-4 flex justify-evenly items-center">
        <Logo />
        <NavBar />
        <SocialLinks />
      </div>
    </header>
  );
};

export default Header;
