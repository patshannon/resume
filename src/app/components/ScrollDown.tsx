'use client'
import { MotionDiv, MotionSvg, MotionPath } from '../motion';

const ScrollDown = () => {
  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <MotionDiv
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="cursor-pointer group"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
    >
      <MotionSvg 
        xmlns="http://www.w3.org/2000/svg" 
        width="20" 
        height="32" 
        viewBox="0 0 20 32" 
        fill="none"
        animate={{ y: [0, 8, 0] }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <MotionPath 
          d="M10 32C7.34784 32 4.8043 30.9464 2.92893 29.0711C1.05357 27.1957 0 24.6522 0 22V10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10V22C20 23.3132 19.7413 24.6136 19.2388 25.8268C18.7362 27.0401 17.9997 28.1425 17.0711 29.0711C16.1425 29.9997 15.0401 30.7362 13.8268 31.2388C12.6136 31.7413 11.3132 32 10 32ZM10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10V22C2 24.1217 2.84285 26.1566 4.34315 27.6569C5.84344 29.1571 7.87827 30 10 30C12.1217 30 14.1566 29.1571 15.6569 27.6569C17.1571 26.1566 18 24.1217 18 22V10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2Z" 
          fill="#FAFAFA"
          className="group-hover:fill-zinc-300 transition-colors duration-300"
        />
        <MotionPath 
          d="M10 13C9.73478 13 9.48043 12.8946 9.29289 12.7071C9.10536 12.5196 9 12.2652 9 12V8C9 7.73478 9.10536 7.48043 9.29289 7.29289C9.48043 7.10536 9.73478 7 10 7C10.2652 7 10.5196 7.10536 10.7071 7.29289C10.8946 7.48043 11 7.73478 11 8V12C11 12.2652 10.8946 12.5196 10.7071 12.7071C10.5196 12.8946 10.2652 13 10 13Z" 
          fill="#FAFAFA"
          className="group-hover:fill-zinc-300 transition-colors duration-300"
          animate={{ 
            y: [0, 4, 0],
            opacity: [1, 0.6, 1]
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </MotionSvg>
    </MotionDiv>
  )
}

export default ScrollDown
