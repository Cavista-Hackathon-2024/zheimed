import AboutImg from '../assets/aboutUs.png';
export const AboutSection = () => {
    return (
    <div className='flex items-center justify-between p-32 aboutShape gap-9'>
        <div>
            
            <div className='flex flex-col max-w-2xl gap-3'>
                <h1 className='text-5xl font-extrabold'>About Us</h1>
                <p className='text-xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aperiam eum, exercitationem, voluptatem expedita culpa id, cumque consectetur nulla veritatis quae dignissimos temporibus perspiciatis ex soluta cum voluptatibus fuga illum.</p>
                <p className='text-xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aperiam eum, exercitationem, voluptatem expedita culpa id, cumque consectetur nulla veritatis quae dignissimos temporibus perspiciatis ex soluta cum voluptatibus fuga illum.</p>
            </div>
        </div>
        <div>
            <img className='' src={AboutImg} alt="" />
        </div>
    </div>
    )
}