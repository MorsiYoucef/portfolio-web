import { FaLocationArrow } from 'react-icons/fa'
import MagicButton from './ui/MagicButton'
import { FaGithub } from 'react-icons/fa'
import { IoLogoLinkedin } from 'react-icons/io5'
import { RiTwitterXFill } from 'react-icons/ri'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="absolute left-0 -bottom-72 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          width={100}
          height={100}
          className="w-full h-full opacity-50"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="lg:w-[850px] heading">
          Ready to take <span className="text-purple">Your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:morsiyoucef.pro@gmail.com">
          <MagicButton
            title="Let's get in Touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Yusuf
        </p>
        <div className="flex gap-10 items-center mt-4 cursor-pointer">
          <a
            href="https://github.com/MorsiYoucef"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/MorsiYoucef"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <IoLogoLinkedin size={30} />
          </a>
          <a
            href="https://twitter.com/y0c0de"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <RiTwitterXFill size={30} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
