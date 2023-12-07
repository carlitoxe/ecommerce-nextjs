import { EnvelopeIcon } from '@heroicons/react/20/solid';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-black relative mt-28 px-8 w-full border-t border-gray-600">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="px-4 py-6 text-center md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
              © 2023 Made by{' '}
              <a href="https://github.com/carlitoxe" className="text-blue-500 hover:text-blue-300" target="_blank" rel="noreferrer">
                carlitoxe
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-5 justify-center items-center sm:justify-center md:mt-0">
              <a href="https://github.com/carlitoxe" target="_blank" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">GitHub account</span>
              </a>
              <a href="https://linkedin.com/in/carlos-romero" target="_blank" className="text-gray-400 hover:text-gray-900 dark:hover:text-white pb-[1px]">
                <svg className="w-5 h-5 text-gray-400 hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
                  <path
                    fill-rule="evenodd"
                    d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                    clip-rule="evenodd"
                  />
                  <path d="M3 5.012H0V15h3V5.012Z" />
                </svg>
  
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:cerc-12@hotmail.com" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <EnvelopeIcon className="h-5 w-5" />
                <span className="sr-only">E-mail</span>
              </a>
              <a href="https://twitter.com/carlitoxee" target="_blank" className="text-gray-400 dark:hover:text-white">
                <svg className="w-5 h-5 dark:text-gray-400 hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path
                    fill="currentColor"
                    d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z"
                  />
                </svg>
  
                <span className="sr-only">Twitter page</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer;