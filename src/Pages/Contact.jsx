import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="py-10 flex flex-col items-center max-w-5xl mx-auto">
      <h1 className="heading mb-10">
        Contact <span className="span">us</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="w-full">
          <img
            className="w-full object-contain rounded-lg overflow-hidden"
            src={assets.contact_img}
            alt="ablout-img"
          />
        </div>

        <div className="w-full flex flex-col justify-center text-left text-neutral-500">
          <h2 className="heading2 my-5">Our Store</h2>
          <p className="para">
            54709 Willms Station Suite 350, Washington, USA
          </p>
          <p className="para">Tel: (415) 555-0132 Email: admin@forever.com</p>
          <h2 className="heading2 my-5">Careers at Forever</h2>
          <p className="para">Learn more about our teams and job openings.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
