import MainNavbar from '../Navbar/MainNavbar'
import { Outlet } from 'react-router'
import { I18nextProvider, useTranslation } from 'react-i18next';
import LanguageDropdown from '../LangComponent/LanguageDropdown';
import { useEffect } from 'react';
import CursorCircle from '../CircleComponent/CircleComponent';
import Footer from '../Footer/Footer';
import FormModal from '../Modal/FormModal';
import SocialBtn from '../SocialBtn/SocialBtn';

const RootLayout = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const dir = i18n.dir(i18n.language);
    document.documentElement.dir = dir;
    console.log(dir)
 }, [i18n, i18n.language]);
  return (
    <div>
      <I18nextProvider i18n={i18n}>
      <MainNavbar/>
      <Outlet/>   
      {/* <LanguageDropdown/> */}
      <CursorCircle/>
      <Footer/>
      {/* <FormModal/> */}
      {/* <SocialBtn/> */}
       </I18nextProvider>
    </div>
  )
}

export default RootLayout
