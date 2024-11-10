import Image from 'next/image'
import imaag from "/Images/pic2.jpg"
import flag from "/pic4.jpg"
import image from "/pic5.jpg"






const Skills = () => {
  return (
    <div id='skills'>
        <div className='taxt-bold text-5xl text-blue-900 text-center'>
        <h1>SKILLS</h1>
        
        
      
      <div className='flex gap-40 mx-40 mt-5
      '>
        <Image src="/Images/pic2.jpg" width={100} height={100} alt="skill"/>
        <Image src="/pic4.jpg" width={100} height={100} alt="" />
       
        <Image src="/pic5.jpg" width={100} height={100} alt="skill" />
        
        
        
        
        </div>
      </div>
      </div>
 
  )
}

export default Skills
