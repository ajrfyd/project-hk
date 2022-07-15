type ImgProps = {
  src: string;
}

const Img = ({ src }: ImgProps) => {

  return <img src={src}/> 
}

export default Img;