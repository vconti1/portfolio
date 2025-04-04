import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  spareImg,
  imgClassName,
  titleClassName,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?:string;
  id: number;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className,
      )}
      style={{
        background: 'rgb(10, 10, 10)',
        backgroundColor: 'linear-gradient(90deg, rgba(0,0,0,0.8211659663865546) 11%, rgba(0,0,0,1) 50%, rgba(209,209,221,1) 85%)'
      }}
    >
      
      <div className={`${id === 6} && 'flex justify-center h-full`}>
          <div className="w-full h-full absolute">
            {img && (
              <img 
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover', 'object-center')}
              />
            )}
          </div>
            <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
            {spareImg && (
              <img
              src={spareImg}
              alt={spareImg}
              className= {'object-cover, object-center w-full h-full'}
              />
            )}
            </div>
            {id === 6 && (
              <BackgroundGradientAnimation>
                <div
                className="absolute z-50 flex items-center justify-center text-white font-gold"
                />
              </BackgroundGradientAnimation>
            )}

            <div className={cn(
              titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5'
              
            )}>
            
            <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
              {description}
            </div>

            <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
          {title}
            </div>
          

            {id === 2 && <GlobeDemo/>}
            
            {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              {/* tech stack lists */}

              {/* LEFT COLUMN */}
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-4">
                {['React.js', 'React.js', 'React.js'].map((item) => (
                  <span
                    key={item}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#101010]"
                  >
                    {item}
                  </span>
                ))}

              <span className="py-4 px-3 rounded-lg text-center bg-[#101010]"/>
              </div>

               {/* RIGHT COLUMN */}
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-4">
                
                {['React.js', 'hi', 'React.js'].map((item) => (
                  <span
                    key={item}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#101010]"
                  >
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#101010]"/>
              </div>
            </div>
          )}

      </div>


      <div className="transition duration-200 group-hover/bento:translate-x-2">
       

        </div>
      </div>
    </div>
  );
};
