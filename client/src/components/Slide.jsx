import { Carousel } from './lib'

function Slide() {
  const data = [
    {
      image:
        "https://images.pexels.com/photos/11593467/pexels-photo-11593467.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      caption: `<div>
        San Francisco<br/><span>Next line</span>
      </div>`,
    },
    {
      image:
        "https://images.pexels.com/photos/11593467/pexels-photo-11593467.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      caption: "<div>San Francisco</div>",
    },
    {
      image:
        "https://images.pexels.com/photos/11593467/pexels-photo-11593467.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      caption: "<div>San Francisco</div>",
    },
    {
      image:
        "https://images.pexels.com/photos/11593467/pexels-photo-11593467.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      caption: "<div>San Francisco</div>",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div className="Slide">
      <div style={{ textAlign: "center" }}>
        <h2>React Carousel Minimal</h2>
        <p>
          Easy to use, responsive and customizable carousel component for React
          Projects.
        </p>
        <div
          style={{
            padding: "0 20px",
            backgroundColor: "Black",
          }}
        >
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            showNavBtn={true}
            style={{
              textAlign: "center",
              maxWidth: "850px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Slide;