import React from 'react'

function BlogSecondPage() {
  return (
    <div className="relative bg-white dark:bg-black text-black dark:text-white">
            <img src="https://placehold.co/1822x768" alt="Architectural background" className="w-full h-auto object-cover opacity-50" crossorigin="anonymous"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black dark:from-black to-transparent">
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-16 lg:p-24">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">THE SOCIAL IMPACT OF ARCHITECTURAL INNOVATION</h1>
                <p className="text-lg md:text-xl lg:text-2xl max-w-2xl">
                Verdant believes that architecture goes beyond creating physical spaces; it has the power to be a social catalyst.
                Our projects are designed with a purpose, aiming to foster community engagement, inclusivity, and a sense of belonging.
                It's about breaking down walls and building bridges between people.
            </p>
            </div>
        </div>
  )
}

export default BlogSecondPage