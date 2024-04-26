import AboutImg from '../assets/AboutImg.svg';
export const AboutSection = () => {
    return (
    <div className='p-32 flex justify-between'>
        <div>
            
            <div className='flex flex-col gap-3 max-w-2xl'>
                <h1 className='text-4xl font-extrabold'>About us</h1>
                <p className='text-xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aperiam eum, exercitationem, voluptatem expedita culpa id, cumque consectetur nulla veritatis quae dignissimos temporibus perspiciatis ex soluta cum voluptatibus fuga illum.</p>
                <p className='text-xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aperiam eum, exercitationem, voluptatem expedita culpa id, cumque consectetur nulla veritatis quae dignissimos temporibus perspiciatis ex soluta cum voluptatibus fuga illum.</p>
            </div>
        </div>
        <div>
            <img src={AboutImg} alt="" />
        </div>
    </div>
    )
}