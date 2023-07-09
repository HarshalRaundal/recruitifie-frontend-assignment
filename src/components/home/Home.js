import React from 'react';
import "./Home.css";
import Card from "../cards/Card";
import Canvas from '../canvas/Canvas';
import Background from '../background/Background';




const Home = () => {

    const jobSeekerTheme = {
        bg: "#FFCA27",
        text: "#000000"
    };
    const recruiterTheme = {
        bg: "#172742",
        text: "#FFFFFF"
    };

    const circularStyle = {
        width: "12vw",
        height: "12vw",
        borderRadius: "50%"
    }
    const JobSeekerCardData = [
        {
            heading: "Application Tracking",
            items: ["Stay updated, organized, succeed.",
                "Real-time updates, centralized management.",
                "Maximize dream job chances."]
        },

        {
            heading: "Real-Time Skill Assessment",
            items: [
                "Skill showcase, insights, job alignment.",
                "Evaluate, certify, control career.",
                "Empowering job seekers."
            ]
        },
        {
            heading: "Career Counselling",
            items: [
                "Clarity, confidence, purpose:our counselling.",
                "Unlock potential, achieve goals: Personalised guidance.",
                "Job seekers empowered: Recruitifie career."
            ]
        },

        {
            heading: "ATS- Friendly Resume Building",
            items: [
                "Impress managers: Our ATS-friendly resumes.",
                "Optimize visibility, unlock opportunities.",
                "Job seekers empowered: Resume builder."
            ]
        }
    ]

    const RecruiterCardData = [
        {
            heading: "Hiring Analysis",
            items: [
                "Powerful analytics, valuable insights: Recruitifie.",
                "Optimize hiring process with data.",
                "Track metrics, make informed decisions."
            ]
        },

        {
            heading: "Real-Time Skill Assessment",
            items: [
                "Skill showcase, insights, job alignment.",
                "Evaluate, certify, control career.",
                "Empowering job seekers."
            ]
        },
        {
            heading: "Free ATS and Integration",
            items: [
                "Streamlined ATS: Simplify application management. ",
                "Centralize and organize candidate profiles. ",
                "Securely review and filter candidates."
            ]
        },

        {
            heading: "Advance Matching Algorithim",
            items: [
                "Advanced matching: Comprehensive candidate profiles. ",
                "Machine learning, AI: Analyzing skills. ",
                "Holistic understanding: Candidate capabilities."
            ]
        }
    ]

    return (
        <div className="mx-auto fs-5 w-100 " style={{ minHeight:"200vh"}}>


           
            <div className=' m-2  row    justify-content-center h-100' style={{ minHeight:"200vh" }}>
                <div className='row   p-2  ' >
                    <div className='row my-auto  '>
                        <div className='col-md-12 col-lg-4   '>
                            <div className='row h-75 justify-content-center align-content-center' >

                                <Canvas role={"Job Seeker"} theme={jobSeekerTheme} />
                            
                            </div>
                            <div className='row fw-bold fs-2 text-center  justify-content-center'>
                                What you get
                            </div>
                        </div>
                        <div className='col-md-12 col-lg-8  '>
                            <div className='row justify-content-center'>
                                {JobSeekerCardData.map((card, index) => (
                                    <div className="col-sm-12 col-md-7 col-lg-5 m-2" key={index} >
                                        <Card card={card} theme={jobSeekerTheme} />
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
               
                <div className='row  p-2 '  >
                    <div className='row my-auto  '>
                        <div className=' col-md-12 col-lg-8'>
                            <div className='row justify-content-center'>
                                {RecruiterCardData.map((card, index) => (
                                    <div className="col-sm-12 col-md-7 col-lg-5 m-2" key={index} >
                                        <Card card={card} theme={recruiterTheme} />
                                    </div>
                                ))}
                        </div>

                        </div>
                        <div className='col-md-12 col-lg-4   '>
                            <div className='row h-75 justify-content-center align-content-center ' >
                                <Canvas role={"Recruiter"} theme={recruiterTheme} />
                                {/* <div className='d-block bg-warning  border  rounded-circle ' style={circularStyle}></div> */}
                            </div>
                            <div className='row fw-bold fs-2 text-center  justify-content-center'>
                                Advantages for Recruiting
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home