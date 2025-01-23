import React, { useEffect, useState } from "react"
import ButtonCV from "../Components/ButtonCV"
import AOS from "aos"
import "aos/dist/aos.css"
import { db } from "../firebase" 
import { collection, getDocs } from "firebase/firestore" 

const AboutMe = () => {
	const [projectCount, setProjectCount] = useState(0)
	const [certificateCount, setCertificateCount] = useState(0)

	useEffect(() => {
		AOS.init()
		AOS.refresh()

		
		const projectCollection = collection(db, "projects") // Mengacu pada koleksi "projects" di Firestore
		getDocs(projectCollection)
			.then((querySnapshot) => {
				setProjectCount(querySnapshot.size)
			})
			.catch((error) => {
				console.error("Error fetching projects: ", error)
			})

		
		const certificateCollection = collection(db, "certificates") // Mengacu pada koleksi "certificates" di Firestore
		getDocs(certificateCollection)
			.then((querySnapshot) => {
				setCertificateCount(querySnapshot.size)
			})
			.catch((error) => {
				console.error("Error fetching certificates: ", error)
			})
	}, [])

	return (
		<>
			<div className="md:px-[10%] px-[6%]" id="About">
				<div
					className="text-4xl text-[#ced4d7] font-bold md:pb-8 pb-4"
					data-aos="fade-up"
					data-aos-duration="400">
					ABOUT ME
				</div>
				<div className="flex flex-col md:flex-row">
					
					<div className="flex justify-center items-center md:pr-10 pr-0 md:w-auto ">
						<div data-aos="fade-up" data-aos-duration="1000">
							<img
								src="/"
								alt="Photo Siluet"
								className="
                            w-[30rem] h-auto rounded-xl "
								id="ImgAbout"
							/>
						</div>
					</div>


					<div className="md:w-full flex flex-col justify-between">
						<p
							className="text-[#a6adba] w-full text-justify text-xl mb-5 mt-5 md:mt-0"
							data-aos="fade-up"
							data-aos-duration="600">
							I am a Computer Science undergraduate with expertise in Python, Django, and automation. As a Python Developer at T.B. Solutions, I streamlined workflows and cut manual tasks using tools like ChatGPT and Zapier. Previously, as a Web Specialist at Alliance, I boosted system reliability and built a responsive platform that increased engagement. Proficient in English with basic Japanese skills, I thrive on solving challenges and driving innovation.
						</p>

						<div className="relative " data-aos="fade-up" data-aos-duration="800">
							<ButtonCV />
						</div>

						<div
							class="grid grid-cols-3 md:gap-4 gap-5 mt-5"
							data-aos="fade-up"
							data-aos-duration="1000">
							<div
								class="w-auto h-[8em] flex flex-col justify-center items-center rounded-sm"
								id="InfoAbout">
								<b className="text-3xl text-[#ced4d7]">4+</b>
								<div className="text-center text-[#a6adba]">Years of Experience</div>
							</div>
							<div
								class="w-auto h-[8em] flex flex-col justify-center items-center rounded-sm"
								id="InfoAbout">
								<b className="text-3xl text-[#ced4d7]">{projectCount}+</b>
								<div className="text-center text-[#a6adba]">Project Created</div>
							</div>
							<div
								class="w-auto h-[8em] flex flex-col justify-center items-center rounded-sm"
								id="InfoAbout">
								<b className="text-3xl text-[#ced4d7]">{certificateCount}+</b>
								<div className="text-center text-[#a6adba]">Certificate</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default AboutMe
