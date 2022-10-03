import H3 from '@material-tailwind/react/Heading3';
import Paragraph from '@material-tailwind/react/Paragraph';
import Input from '@material-tailwind/react/Input';
import Textarea from '@material-tailwind/react/Textarea';
import Button from '@material-tailwind/react/Button';

export default function SupportSection() {
    return (
        <section className="pb-20 relative block bg-gray-100">
            <div className="container max-w-7xl mx-auto px-4 lg:pt-24">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-8/12 px-4">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
                            <div className="flex-auto p-5 lg:p-10">
                                <div className="w-full text-center">
                                    <H3 color="gray">How Can We Help?</H3>
                                    <Paragraph color="blueGray">
                                    We would love to hear from you! If you have queries or feedback for us, please fill up this short form so that we can better assist you. You may also drop us an email at support@dreamfighter.id.
                                    </Paragraph>
                                </div>
                                <form onSubmit={(e) => e.preventDefault()}>
                                    <div className="flex gap-8 mt-16 mb-12">
                                        <Input
                                            type="text"
                                            placeholder="Full Name"
                                            color="lightBlue"
                                        />
                                        <Input
                                            type="email"
                                            placeholder="Email Address"
                                            color="lightBlue"
                                        />
                                    </div>

                                    <Textarea color="lightBlue" placeholder="Message" />

                                    <div className="flex justify-center mt-10">
                                        <Button color="lightBlue" ripple="light">
                                            Send Message
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
