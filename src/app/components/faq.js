export default function Faq() {

    function FaqItem({question, answer}){

        return(
            <div className="py-6">
			<details className="group">
				<summary className="flex justify-between items-center mobile:items-start cursor-pointer list-none">
					<span className="text-[1.2rem] mobile:text-[1.1rem]">{question}</span>
					<span className="transition duration-[400ms] group-open:rotate-180">
                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
				</summary>
				<p className="text-[#646464] text-[1.1rem] mobile:text-[1rem] leading-[1.8rem] mt-4 group-open:animate-fadeIn">
					{answer}
				</p>
			</details>
		</div>
        )
    }

    return(
        <>
            <div className="flex flex-col items-center pt-[3rem]">
                <h2 className="tracking-wide text-5xl">
                    FAQ
                </h2>
                <p className="opacity-60 text-[1.2rem] mt-3">
                    Frequenty asked questions
                </p>
            </div>
            <div className="grid divide-y divide-neutral-200 w-[50rem] tablet-s:w-[85%] mx-auto mt-8 pb-[8rem]">
                <FaqItem 
                    question="How long does it usually take to complete a website?"
                    answer="The timeline for creating a website varies depending on the specific needs and complexity of the project. 
                    Typically, the process takes about two months from start to finish. This includes everything from the initial 
                    consultation and design to development and final revisions."
                ></FaqItem>

                <FaqItem 
                    question="Do I have to pay the full price of the website upfront?"
                    answer="No, we charge half the total price after the initial designs of the website are made. Once we finish the final 
                    designs and move on to website development, the other half of the total price will be charged."
                ></FaqItem>

                <FaqItem 
                    question="Are there any refunds if I’m not satisfied with the website?"
                    answer="We understand that investing in a new website is a significant decision, and we are committed to delivering 
                    the work that meets your expectations. However, due to the extensive time, effort, and resources invested in 
                    each project, we do not offer refunds once payment has been received."
                ></FaqItem>

                <FaqItem 
                    question="Can you help me update an existing website?"
                    answer="Absolutely! We can help revamp your site with the latest design trends and technologies. Get in touch with
                    us and we’ll provide more detailed information on all the services we can provide for you."
                ></FaqItem>

                <FaqItem 
                    question="Do you handle domain registration and hosting?"
                    answer="While we do not directly register domains or host websites, we can recommend the best trusted providers 
                    based on your website’s needs and assist with the setup process."
                ></FaqItem>

                <FaqItem 
                    question="What happens if I need changes after the project is completed?"
                    answer="Once your website is launched, we provide 30 days of complimentary support to ensure everything runs 
                    smoothly at no extra cost. If you want us to modify the design or add new pages after launch, we are happy to help with these 
                    changes, which will be discussed and charged separately."
                ></FaqItem>

            </div>
        </>
    )
}