import AboutImg from '../assets/aboutUs.png';
export const AboutSection = () => {
    return (
    <div id='about' className='flex items-center justify-between p-32 aboutShape gap-9'>
        <div>
            
            <div className='flex flex-col max-w-2xl gap-3'>
                <h1 className='text-5xl font-extrabold'>About Us</h1>
                <p className='text-xl pb-5'>
                Harnessing the power of artificial intelligence, Zheimed is at the forefront of transforming Alzheimer's disease diagnosis. Our mission is to empower healthcare professionals with cutting-edge technology for early and accurate detection. <br />
Our state-of-the-art AI model analyzes MRI scans for the brain to identify subtle patterns indicative of Alzheimer's, even in the early stages. This technology, built on a foundation of deep learning and trained on thousands of anonymized scans, can reveal changes undetectable by the human eye.
                </p>
                <p className='text-xl '>
                Seamlessly integrating with existing healthcare systems, our user-friendly platform provides clear, actionable insights. Accuracy is paramount, and our rigorously tested model meets and surpasses industry standards. <br />
Patient privacy and data security are our top priorities. We ensure all data are handled with the utmost care and comply with all regulations. <br />
Our vision is a future where Alzheimer's is effectively managed through early detection. We believe Zheimed's technology can be a pivotal tool in this fight, empowering healthcare systems to intervene sooner and more effectively.
                </p>
            </div>
        </div>
        <div>
            <img className='' src={AboutImg} alt="" />
        </div>
    </div>
    )
}