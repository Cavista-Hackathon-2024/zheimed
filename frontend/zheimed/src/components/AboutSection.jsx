import AboutImg from '../assets/aboutUs.png';
export const AboutSection = () => {
    return (
    <div id='about' className='flex items-center justify-between p-32 aboutShape gap-12'>
        <div>
            
            <div className='flex flex-col max-w-2xl gap-3'>
                <h1 className='text-5xl font-bold'>About Us</h1>
                <div className='flex flex-col gap-6 text-lg'>
                    <p>Welcome to Zheimed, the frontier in harnessing artificial intelligence to revolutionise the diagnosis of Alzheimer's disease. Our mission is to empower healthcare professionals with cutting-edge technology to detect the early signs of Alzheimer's with unprecedented accuracy and efficiency.</p>
                    <p>At Zheimed, we've developed a state-of-the-art AI-powered model designed specifically for the analysis of MRI scans for the brain. Utilising advanced machine learning techniques, our software can identify subtle patterns and changes in brain scans that may indicate the early stages of Alzheimer's disease—changes that might be imperceptible even to experienced specialists.</p>
                    <p>Our platform integrates seamlessly into existing healthcare systems, providing a user-friendly interface that delivers clear, actionable insights. The core of our technology is built on a foundation of deep learning algorithms that have been trained on thousands of anonymised MRI brain scans.</p>
                </div>
            </div>
        </div>
        <div>
            <img className='' src={AboutImg} alt="" />
        </div>
    </div>
    )
}