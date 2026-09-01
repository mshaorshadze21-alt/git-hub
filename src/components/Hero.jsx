import photo from "../assets/wine.jpg"
const Hero = () => {
  return (
    <div className="w-2/3 flex flex-col gap-8  items-center">
        <h1 className="text-4xl font-semibold font-serif text-mauve-800">რჩეული ღვინის კოლექცია</h1>
        <img src={photo} alt="Image" className="rounded-xl"/>
    </div>
  )
}

export default Hero