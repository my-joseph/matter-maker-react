export default function Homepage() {
  return (
    <>
      <div className=" h-fit w-full">
        <div className=" h-banner-screen">
          <div className=" h-full w-full grid place-items-center overflow-hidden ">
            <video
              playsInline
              autoPlay
              loop
              muted
              src="/src/assets/video/hotdog.mp4"
              className=" w-full h-full object-cover "
            ></video>
          </div>
        </div>
      </div>
    </>
  );
}
