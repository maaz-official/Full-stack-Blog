import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';

export default function FooterCom() {
  return (
    <Footer container className='bg-gray-900 text-white border-t-8 border-teal-500'>
      <div className='container mx-auto py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Left Section */}
          <div className='md:col-span-1'>
          <Link
          to="/"
          className="flex items-center"
        >
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Lazzy
            </span> Code
          </span>
        </Link>
            <p className='mt-4 text-sm'>
              Explore a world of knowledge and creativity.
            </p>
          </div>

          {/* Middle Section */}
          <div className='md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-8'>
            {/* About */}
            <div>
              <Footer.Title title='About' />
              <Footer.LinkGroup>
                <Footer.Link to='/about'>About Us</Footer.Link>
                <Footer.Link to='/contact'>Contact Us</Footer.Link>
              </Footer.LinkGroup>
            </div>

            {/* Follow Us */}
            <div>
              <Footer.Title title='Follow us' />
              <Footer.LinkGroup>
                <Footer.Link href='https://www.github.com/maaz-official' target='_blank' rel='noopener noreferrer'>Github</Footer.Link>
                <Footer.Link href='#'>Twitter</Footer.Link>
                <Footer.Link href='#'>Instagram</Footer.Link>
              </Footer.LinkGroup>
            </div>

            {/* Legal */}
            <div>
              <Footer.Title title='Legal' />
              <Footer.LinkGroup>
                <Footer.Link href='#'>Privacy Policy</Footer.Link>
                <Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>

        {/* Divider */}
        <Footer.Divider className='my-8' />

        {/* Bottom Section */}
        <div className='flex items-center justify-between'>
          <p className='text-sm'>
            &copy; {new Date().getFullYear()} Lazzy Code. All rights reserved.
          </p>
          <div className='flex space-x-4'>
            <Footer.Icon href='#' icon={BsFacebook} />
            <Footer.Icon href='#' icon={BsInstagram} />
            <Footer.Icon href='#' icon={BsTwitter} />
            <Footer.Icon href='https://github.com/maaz-official' icon={BsGithub} />
            <Footer.Icon href='#' icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
