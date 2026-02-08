const BannerSection = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0">
        <div className="banner-background absolute inset-0"></div>
        <div className="ssss absolute inset-0"></div>
      </div>
      <div className="relative flex items-center justify-center md:justify-end h-screen px-0 md:px-6">
        <h1 className="font-heading text-white text-center">
          <div className="block w-full text-white text-3xl md:text-4xl lg:text-5xl">
            บ่อยครั้งไหมที่คุณกำลัง
            <span className="my-2 md:my-5 block w-full font-semibold text-secondary-color text-6xl md:text-7xl lg:text-8xl">
              "ทำงานหนัก"
            </span>
            แต่ไม่แน่ใจว่ามาถูกทาง
          </div>
        </h1>
      </div>
    </div>
  )
}

export default BannerSection
