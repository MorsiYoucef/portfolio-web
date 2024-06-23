import { projects } from '@/data'
import { PinContainer } from './ui/3d-pin'
import { AnimatedTooltip } from './ui/animated-tooltip'
import { FaLocationArrow } from 'react-icons/fa'
import Image from 'next/image'

const RecentProject = () => {
  return (
    <section className="py-20 font-sans" id="projects">
      <h1 className=" heading">
        A small selection of
        <span className=" text-purple"> Recent Projects</span>
      </h1>
      <div className=" flex flex-wrap items-center justify-center p-4 gap-x-40 gap-y-16 mt-10 ">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="lg:min-h-[32.5rem] lg:w-[20rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
          >
            <PinContainer className=" grid gap-5" title={title} href={link}>
              <div className=" relative flex items-center justify-center lg:w-80 lg:h-60 sm:w-96 w-[80vw] overflow-hidden h-[20vh]">
                <div
                  className=" relative w-full h-full
                 overflow-hidden lg:rounded-3xl bg-[#13162d]"
                >
                  <Image src="/bg.png" alt="bg-img" width={100} height={100} />
                </div>
                <Image
                  src={img}
                  alt={title}
                  className=" z-10 absolute bottom-0"
                  width={300}
                  height={300}
                />
              </div>
              <div>
                <h1 className=" font-bold lg:text-xl md:text-xl text-base line-clamp-1">
                  {title}
                </h1>
                <p className=" lg:font-normal font-light text-sm line-clamp-2">
                  {des}
                </p>
              </div>
              <div className=" flex justify-between items-center mt-7 mb-3">
                <div className=" flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      style={{ transform: ` translateX(-${5 * index * 2}px)` }}
                      className=" border border-white/[0.2] rounded-full bg-black lg:w-9 lg:h-9 w-8 h-8 flex justify-center items-center"
                    >
                      <Image
                        src={icon}
                        alt={icon}
                        className=" p-2"
                        width={300}
                        height={300}
                      />
                    </div>
                  ))}
                </div>
                <div className=" flex justify-center items-center gap-2">
                  <p className=" flex lg:text-[15px] md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow color="#cbacf9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  )
}

export default RecentProject
