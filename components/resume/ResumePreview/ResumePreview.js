import React, { useEffect, useRef, useState } from 'react'

const IFRAME_WIDTH = 720

const ResumePreview = ({ id }) => {
  const wrapperRef = useRef()
  const iframeRef = useRef()
  const [wrapperWidth, setWrapperWidth] = useState(0)
  const [iframeHeight, setIframeHeight] = useState(800)
  const iframe_scale = (wrapperWidth / IFRAME_WIDTH).toPrecision(4)
  // console.log(iframe_scale)

  useEffect(() => {
    setWrapperWidth(wrapperRef.current.offsetWidth)
  }, [])

  const onLoad = () => {
    const timer = setTimeout(() => {
      setIframeHeight(
        iframeRef.current.contentWindow.document.body.scrollHeight
      )
    }, 100)
    return () => clearTimeout(timer)
  }

  return (
    <div ref={wrapperRef} className='relative'>
      <iframe
        onLoad={onLoad}
        ref={iframeRef}
        // To change hard-coded url
        src={`http://localhost:3000/resume/preview/${id}`}
        title='Preview'
        className='absolute left-0 top-0 origin-top-left overflow-hidden rounded-xl shadow-lg'
        style={{
          width: IFRAME_WIDTH + 'px',
          height: iframeHeight + 'px',
          transform: `scale(${iframe_scale})`,
        }}
      />
    </div>
  )
}

export default ResumePreview
