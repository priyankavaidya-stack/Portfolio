import React from 'react';

const skillsData = [
    {
        id:1,
        skill: 'html/Css',
        expertise: '95%'
    },
    {
        id: 2,
        skill: 'Javascript',
        expertise: '75%'
    },
    {
        id: 3,
        skill: 'React Js',
        expertise: '70%'
    },
    {
        id: 4,
        skill: 'Redux',
        expertise: '55%'
    },
    {
        id: 5,
        skill: 'Tailwind CSS',
        expertise: '75%'
    },
    {
        id: 6,
        skill: 'Bootstrap',
        expertise: '90%'
    },
    {
        id: 7,
        skill: 'SQL',
        expertise: '70%'
    },
    {
        id: 8,
        skill: 'MongoDB',
        expertise: '60%'
    },
    {
        id: 9,
        skill: 'Web Design',
        expertise: '65%'
    },
    {
        id: 10,
        skill: 'Figma',
        expertise: '70%'
    },

]

const Skill = () => {
  return (
    <div>
      <h2 className='text-2xl font-semibold mt-6 mx-3 text-white' id="skills">My Skills</h2>
        <div className="grid xl:grid-cols-12 min-[991px]:grid-cols-12 grid-cols-12 mt-6 gap-4">
            { skillsData.map((ele) => (
                <div className="max-[768px]:col-span-12 min-[768px]:col-span-6 mx-3" key={ele.id}>
                    <p className='font-medium text-left mb-1.5 text-[#dee3e4] leading-[1.8]'>{ele.skill}
                        <span className='float-right'>{ele.expertise}</span>
                    </p>
                    <div className='bg-[#111418] h-2 rounded-md'>
                        <div className="bg-[#20c997] h-2 rounded-s" id="skillLevel" style={ele.expertise ? {width: ele.expertise} : ' '}></div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Skill
