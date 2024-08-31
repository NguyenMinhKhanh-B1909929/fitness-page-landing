import { motion } from "framer-motion";

import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  return (
    <section id="contactus" className="mx-auto w-5/6 pb-32 pt-24">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {/* HEADER */}
          <div>
            <HText>
              <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
            </HText>
            <p className="my-5">
              Congue adipiscing risus commodo placerat. Tellus et in feugiat
              nisl sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
              adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
            </p>
          </div>
        </motion.div>

        {/* FORM */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form>
              <input type="text" className="input" placeholder="NAME" />
              <input type="text" className="input" placeholder="EMAIL" />
              <textarea
                rows={4}
                cols={50}
                className="input"
                placeholder="MESSAGE"
              />
              <button className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white">
                SUBMIT
              </button>
            </form>
          </motion.div>

          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
              <img
                className="w-full"
                src={ContactUsPageGraphic}
                alt="contact-us-page-graphic"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
