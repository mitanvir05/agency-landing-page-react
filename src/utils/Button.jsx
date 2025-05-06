import React from 'react'

const Button = ({text}) => {
  return (
    <div>
       <a
            href="#"
            class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
          >
            {text}
          </a>
    </div>
  )
}

export default Button
