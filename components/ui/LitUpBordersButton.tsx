import React from 'react'

const LitUpBordersButton = ({
  title, icon, position, handleClick, otherClasses,  
}:{
    title: string; icon: React.ReactNode, position: string; handleClick?: () => void; otherClasses?: string;
}) => {
  
  return (
    <button className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10" onClick={handleClick}>
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#C084FC_0%,#A5F3FC_50%,#C084FC_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-black/80 gap-2 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
    {position === 'left' && icon}
    {title}
    {position === 'right' && icon}
  </span>
  
</button>
  )
}

export default LitUpBordersButton