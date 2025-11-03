const MarqueeComponent = () => {
  return (
    <>
      <div className="items-center w-screen w-fit space-x-4">
        <div className="overflow-hidden bg-red-500">
          <div className="marquee animate-marquee">
            <span className="text-xs">hey there how are you on this fine day today :D some element here</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarqueeComponent;
