import img1 from '@/assets/images/hero-1.jpg'
import img2 from '@/assets/images/hero-2.jpg'
import img3 from '@/assets/images/hero-3.jpg'
import img4 from '@/assets/images/hero-4.png'
import img5 from '@/assets/images/hero-5.jpg'


type Slide = {
  title: string
  description: string
  image: string
}


export const slides: Slide[] = [
  {
    title: 'Innovation in Education',
    description: 'Empowering students with practical learning and modern technology.',
    image: img1,
  },
  {
    title: 'Student Activities and Campus Life',
    description: 'A vibrant environment with academic and extracurricular opportunities.',
    image: img2,
  },
  {
    title: 'Career-Focused Courses',
    description: 'Programs designed to prepare students for real jobs and future growth.',
    image: img3,
  },
  {
    title: 'School Trips and Outdoor Learning',
    description: 'Students explore real-world environments.',
    image: img4,
  },
  {
    title: 'School Events and Celebrations',
    description: 'Engaging events that bring students together for fun.',
    image: img5,
  },
  
]