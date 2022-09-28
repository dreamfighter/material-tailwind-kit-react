import Title from 'components/landing/Title';
import TeamCard from 'components/landing/TeamCard';
import Image1 from 'assets/img/IMG_20220928_134724-enhance.png';
import Image2 from 'assets/img/IMG_20220928_134724-enhance.png';
import Image3 from 'assets/img/IMG_20220928_134724-enhance.png';
import Image4 from 'assets/img/IMG_20220928_134724-enhance.png';

export default function TeamSection() {
    return (
        <section className="pt-20 pb-48">
            <div className="container max-w-7xl mx-auto px-4">
                <Title heading="Here are our heroes">
                    According to the National Oceanic and Atmospheric
                    Administration, Ted, Scambos, NSIDClead scentist, puts the
                    potentially record maximum.
                </Title>
                <div className="flex flex-wrap">
                    <TeamCard
                        img={Image1}
                        name="Fitra"
                        position="Software Engineer"
                    />
                    <TeamCard
                        img={Image2}
                        name="Bayu"
                        position="Marketing Specialist"
                    />
                    <TeamCard
                        img={Image3}
                        name="Adi"
                        position="UI/UX Designer"
                    />
                    <TeamCard
                        img={Image4}
                        name="Nugraha"
                        position="Founder and CEO"
                    />
                </div>
            </div>
        </section>
    );
}
