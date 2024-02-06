import React from 'react'
import mc_login from './assets/projects/MC-Login.png'
import ea_login from './assets/projects/EA-Login.png'
import ec_login from './assets/projects/ECatering-Login.png'
import { Project } from './Project'
import { ProjectRight } from './ProjectRight'

export const ProjectsPage = () => {
  return (
    <div id='projects' className='w-3/4 mx-auto min-h-screen'>
        <p className='text-center text-3xl font-medium mb-10'>Projects</p>
        <div className='w-full mx-auto'>
            <Project imageName={mc_login} projectName="Monticasa Drugstore Medicine Information System" details={"The Monticasa Drugstore Medicine Information System is a comprehensive platform designed to streamline medication management within drugstores. It facilitates efficient inventory tracking, prescription management, and provides valuable information on medication interactions and usage guidelines, ensuring safe and effective dispensation of pharmaceuticals."}/>
            <ProjectRight imageName={ea_login} projectName="E-Authentication System" details={"An e-authentication system is a digital framework that verifies the identity of users accessing online services or systems, typically through the use of credentials such as passwords and biometrics. These systems are crucial for ensuring secure access to sensitive information and protecting against unauthorized access or fraudulent activities."}/>
            <Project imageName={ec_login} projectName="ECatering Management System" details={"The ECatering Management System is a digital platform revolutionizing the catering industry, streamlining order management, menu selection, and delivery logistics. It offers user-friendly interfaces for clients and caterers, ensuring seamless communication and efficient catering experiences for events of all sizes."}/>
        </div>
    </div>
  )
}
