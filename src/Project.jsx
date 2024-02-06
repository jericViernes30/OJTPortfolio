import React from 'react'

export const Project = ({ imageName, projectName, details }) => {
  return (
    <div className='flex mb-16'>
        <div className='w-1/2'>
            <img className='w-[800px] h-auto mx-auto rounded-md' src={imageName} alt={projectName} />
        </div>
        <div className='w-1/2 flex flex-col justify-center p-4'>
            <p id='project_name' className='text-xl mb-3 font-semibold'>{projectName}</p>
            <p className='h-auto overflow-y-auto mb-3 text-justify'>{details}</p>
        </div>
    </div>
  )
}
