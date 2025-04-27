import Head from "next/head";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <>
      <Head>
        <title>Get Started</title>
        <meta name="description" content="Learn how AI Mock Interview works." />
      </Head>
      <main className="bg-gray-100 p-8 mt-10">
        <section className="space-y-8">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">
                  How to take up a mock interview ?
                </h2>
              </AccordionTrigger>
              <AccordionContent className="flex justify-center items-center">
                <Image
                  src="/intprocess.svg"
                  className="flex"
                  width={900}
                  height={700}
                  alt="interview process"
                />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                {" "}
                <h2 className="text-xl md:text-2xl font-semibold mb-4">
                  Couldn't find the job role you're interested in ?
                </h2>
              </AccordionTrigger>
              <AccordionContent className="flex justify-center items-center">
                <Image
                  src="/newrolecontact.svg"
                  className="flex"
                  width={800}
                  height={600}
                  alt="send new job role request"
                />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">
                  What happens to the interview after it is already taken up ?
                </h2>
              </AccordionTrigger>
              <AccordionContent className="flex justify-center items-center">
                <Image
                  src="/intcard.svg"
                  className="flex"
                  width={800}
                  height={600}
                  alt="interview reuse"
                />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </main>
    </>
  );
};

export default HowItWorks;
