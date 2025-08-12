import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-gray-200">
      <div className="max-w-[90%] mx-auto">
        <div className="flex flex-col md:flex-row justify-between  py-6 items-baseline">
          <div>
            <p className="text-xl font-medium py-3">Contact</p>
            <ul className="flex flex-col gap-2">
              <li>Phone: 7667991277</li>
              <li>Email: fitness@contact.com</li>
              <li>
                Location: BBD University, Lucknow, Uttar Pradesh, India (226028)
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xl font-medium py-3">Course</p>
            <ul className="flex flex-col gap-2">
              <li className="hover:text-gray-300 cursor-pointer">Fitness</li>
              <li className="hover:text-gray-300 cursor-pointer">
                Body Building
              </li>
              <li className="hover:text-gray-300 cursor-pointer">
                Yoga & Meditation
              </li>
              <li className="hover:text-gray-300 cursor-pointer">
                Registration
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xl font-medium py-3">Quick Link</p>
            <ul className="flex flex-col gap-2">
              <li className="hover:text-gray-300 cursor-pointer">Home</li>
              <li className="hover:text-gray-300 cursor-pointer">Courses</li>
              <li className="hover:text-gray-300 cursor-pointer">About</li>
              <li className="hover:text-gray-300 cursor-pointer">Schedules</li>
            </ul>
          </div>
          <div>
            <p className="text-xl font-medium py-3">Follow Us On</p>
            <ul className="flex gap-3">
              <li className="px-2 py-2 bg-gray-500 cursor-pointer rounded-full">
                <FaFacebookF />
              </li>
              <li className="px-2 py-2 bg-gray-500 cursor-pointer rounded-full">
                <FaTwitter />
              </li>
              <li className="px-2 py-2 bg-gray-500 cursor-pointer rounded-full">
                <FaInstagram />
              </li>
              <li className="px-2 py-2 bg-gray-500 cursor-pointer rounded-full">
                <FaLinkedinIn />
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="text-center py-4">
          Copyright © 2025. Designed and Developed by Rounak & Aman
        </p>
      </div>
    </div>
  );
};

export default Footer;
