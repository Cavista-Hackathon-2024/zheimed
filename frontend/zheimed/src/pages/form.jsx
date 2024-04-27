const Form = () => {
    return (
        <section className="BODY bg-[#e4defe] min-h-screen py-10 ">
            <section className="bg-white w-[60%] mx-auto px-4">
                <section className="">
                    <header className="py-6 text-center ">
                        <h2 className="text-4xl font-bold ">LET'S GET STARTED</h2>
                        <p className="text-sm ">Self Administered Gerocognitive Examination (SAGE)</p>
                    </header>
                </section>
                <section className="mt-8 questions">
                    <div>
                        <header>
                            <h3 className="text-2xl font-semibold"><i>How Well Are You Thinking?</i></h3>
                            <p >Please complete this form in ink without the assistance of others.</p>
                        </header>
                    </div>
                    <div className="mt-4 ">
                        <ul className="flex flex-col gap-4 pl-4 list-decimal">
                            <li className="mb-3 ">
                                <div>
                                    <h3 className="mb-2 font-semibold">Your Name</h3>
                                    <input className="border-2 border-transparent rounded-none otline-none border-b-black w-[200px] " type="text" placeholder="Username"/>
                                </div>
                            </li>
                            {/*  */}
                            <li className="mb-3">
                                <div>
                                    <h3 className="mb-2 font-semibold">I am </h3>
                                    <div>
                                        <select name="ethnicity" className="border-2 border-black " id="">
                                            <option disabled value="">Select your ethnicity</option>
                                            <option value="Black">Black</option>
                                            <option value="Hispanic">Hispanic</option>
                                            <option value="Asian">Asian</option>
                                            <option value="White">White</option>
                                        </select>
                                
                                    </div>
                                </div>
                            </li>
                            <li className="mb-3">
                                <div>
                                    <h3 className="mb-2 font-semibold">Have you had any problems with memory or thinking?</h3>
                                    <div>
                                        <select name="memory1" className="border-2 border-black " id="">
                                            <option disabled value="">Select an option</option>
                                            <option value="Yes">Yes</option>
                                            <option value="Only occassionally">Only occassionally</option>
                                            <option value="No">No</option>
                                        </select>
                                    </div>
                                </div>
                            </li>
                            <li className="mb-3">
                                <h3 className="mb-2 font-semibold">Do you have more difficulties doing everyday activities due to thinking problems?</h3>
                                <div>
                                        <select name="memory2" className="border-2 border-black " id="">
                                            <option disabled value="">Select an option</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>
                                </div>
                            </li>
                            <li>
                                <h3 className="mb-2 font-semibold">Have you gotten lost in familiar places recently?</h3>
                                <div>
                                    <select name="memory2" className="border-2 border-black " id="">
                                        <option disabled value="">Select an option</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                
                            </li>

                        </ul>
                    </div>
                    
                </section>
            </section>
        </section>
    )
}

export default Form;