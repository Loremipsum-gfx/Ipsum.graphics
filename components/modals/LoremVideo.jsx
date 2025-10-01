const LoremVideo = () => {
    return (
        <video controls className="w-full">
        <source src={'https://www.w3schools.com/html/mov_bbb.mp4'} type={'video/mp4'} />
        Your browser does not support HTML5 video.
      </ video>
    )
  };
  
  export default LoremVideo;
