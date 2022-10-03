import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import DefaultHeader from 'components/DefaultHeader';
import Content from 'components/mobile-app/Content';
import MobileAppIcon from 'assets/img/dreamquran/icon.png';
import SupportSection from 'components/mobile-app/SupportSection';

export default function Dreamquran() {
    return (
        <>
            <div className="absolute w-full z-20">
                <DefaultNavbar/>
            </div>
            <main>
                <DefaultHeader bg="bg-dreamquran-background" />
                <Content title="Dream Quran" icon={MobileAppIcon}/>
                <SupportSection />
            </main>
            <DefaultFooter />
        </>
    );
}
