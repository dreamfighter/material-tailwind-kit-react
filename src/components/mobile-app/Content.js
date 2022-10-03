import Button from '@material-tailwind/react/Button';
import Image from '@material-tailwind/react/Image';
import H3 from '@material-tailwind/react/Heading3';
import Icon from '@material-tailwind/react/Icon';
import LeadText from '@material-tailwind/react/LeadText';

export default function Content(props) {
    return (
        <section className="relative py-16 bg-gray-100">
            <div className="container max-w-7xl px-4 mx-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-2xl -mt-64">
                    <div className="px-6">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                <div className="relative">
                                    <div className="w-40 -mt-20">
                                        <Image
                                            src={props.icon}
                                            alt="Profile picture"
                                            raised
                                            
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:self-center flex justify-center mt-10 lg:justify-end lg:mt-0">
                                <Button color="lightBlue" ripple="light">
                                    App Store
                                </Button>
                            </div>
                            <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                    <div className="mr-4 p-3 text-center">
                                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                                        100K
                                        </span>
                                        <span className="text-sm text-gray-700">
                                            Download
                                        </span>
                                    </div>
                                    <div className="mr-4 p-3 text-center">
                                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                                            5.0
                                        </span>
                                        <span className="text-sm text-gray-700">
                                            Rating
                                        </span>
                                    </div>
                                    <div className="lg:mr-4 p-3 text-center">
                                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                                            2.21K
                                        </span>
                                        <span className="text-sm text-gray-700">
                                            Review
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center my-8">
                            <H3 color="gray">{props.title}</H3>
                            <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                                <Icon name="place" size="xl" />
                                West Java, Indonesia
                            </div>
                            <div className="mb-2 text-gray-700 mt-10 flex items-center justify-center gap-2">
                                <Icon name="apple" size="xl" />
                                App Store
                            </div>
                            <div className="mb-2 text-gray-700 flex items-center justify-center gap-2">
                                <Icon name="shop" size="xl" />
                                Google Play
                            </div>
                        </div>

                        <div className="mb-10 py-2 border-t border-gray-200 text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-9/12 px-4 flex flex-col items-center">
                                    <LeadText color="blueGray">
                                    Assalamu'alaikum,<br/>
                                    Dream Quran is per-page Quran application with Indonesian standart. Dream Quran equipped with full color tajwid guidance, daily target Quran recitation with graph, and many other. In this application also comes with the following features :<br/>
                                    <br/>
                                    <ol>
                                    <li>1. Full color tajwid guidance</li>
                                    <li>2. Indonesian translation standart from the Ministry of Religious Affairs of the Republic of Indonesia</li>
                                    <li>3. Daily target Quran recitation with graph</li>
                                    <li>4. 30 Juz of Quran recitation from International Qori</li>
                                    <li>5. Indonesian standart per page khat.</li>
                                    </ol>
                                    This app is free and no advertising inside. Forward Dream Quran for next update and features.
                                    </LeadText>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
