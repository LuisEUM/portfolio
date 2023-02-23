import { useState, useEffect } from 'react'

function FloatingSoundButton ({ audioUrl }) {
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    const audio = new Audio(audioUrl)
    audio.loop = true
    audio.muted = true
    audio.play()

    return () => {
      audio.pause()
    }
  }, [audioUrl])

  const toggleMute = () => {
    setIsMuted(prevState => !prevState)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button className="bg-white hover:invert hover:border-black border-white border rounded-full w-16 h-16 flex items-center justify-center" onClick={toggleMute}>
        {isMuted
          ? <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.25 7.74999L18.5 9.99999M18.5 9.99999L20.75 12.25M18.5 9.99999L20.75 7.74999M18.5 9.99999L16.25 12.25M5.75 6.24999L10.47 1.52999C10.575 1.42518 10.7086 1.35383 10.8541 1.32498C10.9996 1.29613 11.1504 1.31106 11.2874 1.3679C11.4244 1.42473 11.5415 1.52092 11.6238 1.64429C11.7062 1.76765 11.7501 1.91267 11.75 2.06099V17.94C11.7499 18.0882 11.7058 18.2331 11.6234 18.3563C11.541 18.4795 11.4239 18.5756 11.2869 18.6323C11.15 18.689 10.9993 18.7038 10.8539 18.675C10.7085 18.6461 10.5749 18.5747 10.47 18.47L5.75 13.75H3.51C2.63 13.75 1.806 13.244 1.572 12.396C1.35752 11.6154 1.24922 10.8095 1.25 9.99999C1.25 9.16999 1.362 8.36699 1.572 7.60499C1.806 6.75699 2.63 6.24999 3.51 6.24999H5.75Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
          : <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.5 2.06C12.5 0.723998 10.884 0.0549979 9.94001 0.999998L5.44001 5.5H3.50801C2.36701 5.5 1.19001 6.164 0.848007 7.405C0.615984 8.25044 0.498931 9.12329 0.500007 10C0.500007 10.898 0.621007 11.768 0.850007 12.595C1.19101 13.835 2.36801 14.5 3.50901 14.5H5.43901L9.93901 19C10.884 19.945 12.5 19.276 12.5 17.94V2.06ZM17.584 3.106C17.7246 2.96555 17.9153 2.88666 18.114 2.88666C18.3128 2.88666 18.5034 2.96555 18.644 3.106C22.452 6.913 22.452 13.086 18.644 16.894C18.5753 16.9677 18.4925 17.0268 18.4005 17.0678C18.3085 17.1088 18.2092 17.1308 18.1085 17.1326C18.0078 17.1344 17.9078 17.1158 17.8144 17.0781C17.721 17.0404 17.6362 16.9843 17.565 16.913C17.4937 16.8418 17.4376 16.757 17.3999 16.6636C17.3622 16.5702 17.3436 16.4702 17.3454 16.3695C17.3472 16.2688 17.3692 16.1695 17.4102 16.0775C17.4512 15.9855 17.5103 15.9027 17.584 15.834C18.3502 15.0679 18.958 14.1584 19.3726 13.1574C19.7873 12.1564 20.0007 11.0835 20.0007 10C20.0007 8.9165 19.7873 7.84362 19.3726 6.84262C18.958 5.84161 18.3502 4.93209 17.584 4.166C17.4436 4.02537 17.3647 3.83475 17.3647 3.636C17.3647 3.43725 17.4436 3.24662 17.584 3.106Z" fill="black"/>
          <path d="M14.932 5.757C15.0016 5.6873 15.0843 5.63201 15.1753 5.59429C15.2664 5.55657 15.3639 5.53716 15.4625 5.53716C15.561 5.53716 15.6586 5.55657 15.7496 5.59429C15.8406 5.63201 15.9233 5.6873 15.993 5.757C16.5502 6.31416 16.9923 6.97564 17.2939 7.70366C17.5955 8.43168 17.7507 9.21198 17.7507 10C17.7507 10.788 17.5955 11.5683 17.2939 12.2963C16.9923 13.0244 16.5502 13.6858 15.993 14.243C15.8514 14.3795 15.662 14.4551 15.4653 14.4533C15.2687 14.4515 15.0806 14.3725 14.9416 14.2334C14.8026 14.0942 14.7238 13.9061 14.7222 13.7094C14.7206 13.5128 14.7963 13.3234 14.933 13.182C15.3508 12.7641 15.6823 12.2681 15.9085 11.7221C16.1346 11.1761 16.251 10.5909 16.251 10C16.251 9.40904 16.1346 8.82388 15.9085 8.27791C15.6823 7.73194 15.3508 7.23586 14.933 6.818C14.7925 6.67737 14.7136 6.48675 14.7136 6.288C14.7136 6.08924 14.7925 5.89862 14.933 5.758L14.932 5.757Z" fill="black"/>
        </svg>
        }
      </button>
    </div>
  )
}

export default FloatingSoundButton
