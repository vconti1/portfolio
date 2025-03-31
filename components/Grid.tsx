import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id="about">Grid
    <BentoGrid>
        {gridItems.map
        ((item, i)=> (
            <BentoGridItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            />
        ))}
    </BentoGrid>
    </section>
  )
}

export default Grid