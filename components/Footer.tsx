import { FaLocationArrow } from 'react-icons/fa'
import MagicButton from './ui/MagicButton'
import { FaGithub } from 'react-icons/fa'
import { IoLogoLinkedin } from 'react-icons/io5'
import { RiTwitterXFill } from 'react-icons/ri'
import { WavyBackground } from './ui/WavyBackground'

const Footer = () => {
  return (
    // <footer className="w-full pt-20 pb-10 mt-20" id="contact">
    <footer id="contact">
      <WavyBackground className=" py-5">
        <div className="text-center">
          <p className="text-2xl md:text-4xl lg:text-5xl text-center text-white font-bold inter-var">
            Ready to take <span className="text-purple">Your digital </span>
            presence to the next level?
          </p>
          <p className="text-base md:text-lg mt-4 text-white font-normal inter-var">
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals.
          </p>
        </div>
        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
          <p className="md:text-base text-sm md:font-normal font-light text-white">
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
      </WavyBackground>
    </footer>

    // </footer>
  )
}

export default Footer
