import Audience1 from '../assets/Audience1.svg'
import Audience2 from '../assets/Audience2.svg'
export const TargetAudience = () => {
    return (
        <div className="p-32 bg-[#F5F5F5]">
            <div className="flex flex-col items-center gap-10">
            <div className='flex flex-col gap-5  '>
            <h1 className="text-5xl font-bold text-center">Who can use Zhemied?</h1>
            <h5 className='font-regular text-lg'>Are you eager to make the world a healthier place? Zhemied is for you</h5>
            </div>
            <div className="grid grid-cols-2 gap-5">
                <img src={Audience1} alt="" />
                <img src={Audience2} alt="" />
            </div>
            </div>
        </div>
    )
}