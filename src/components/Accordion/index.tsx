
export default function Accordion() {
    const lightestYellow = "#FFE7BF";
    const lighterYellow = "#FFDBA1";
    const yellow = "#FFCB77";
    const darkerYellow = "#FFC25F";
    const darkestYellow = "#FFB43B";

    return(
        <main>
            <div className="collapse collapse-arrow bg-base-200 w-3/4 mb-2" style={{ backgroundColor: lightestYellow }}>
                <input type="radio" name="my-accordion-2" defaultChecked /> 
                <div className="collapse-title text-xl font-medium">
                    How can I contact customer service?
                </div>
                <div className="collapse-content"> 
                    <p>The adoption process timeline varies depending on factors such as application volume, the pet's availability, and the completion of necessary paperwork. We strive to expedite the process while ensuring careful consideration of each adoption.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 w-3/4 mb-2" style={{ backgroundColor: lighterYellow}}>
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                    Are all pets spayed/neutered before adoption?
                </div>
                <div className="collapse-content"> 
                    <p>Yes, all pets available for adoption are spayed or neutered, vaccinated. These services are included as part of the adoption fee.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 w-3/4 mb-2" style={{ backgroundColor: yellow}}>
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                    Are there any adoption fees?
                </div>
                <div className="collapse-content"> 
                    <p> Yes, adoption fees help cover the cost of veterinary care, vaccinations, and other essential services provided to each pet. The adoption fee varies depending on factors such as the pet's age, species, and medical history.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 w-3/4 mb-2" style={{ backgroundColor: darkerYellow}}>
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                    What if my application is not approved?
                </div>
                <div className="collapse-content"> 
                    <p> While we make every effort to accommodate all applications, there may be instances where a match isn't suitable. If your application is not approved, we encourage you to explore other available pets on our website or contact us for further assistance.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 w-3/4 mb-2" style={{ backgroundColor: darkestYellow}}>
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                    Can I adopt if I live outside of British Columbia?
                </div>
                <div className="collapse-content"> 
                    <p> In some cases, we may consider adoptions outside our immediate area. Please contact us directly to discuss your specific situation and explore potential arrangements.</p>
                </div>
            </div>

        </main>
    )
}