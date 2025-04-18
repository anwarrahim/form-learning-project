

export default function Form(){


function signUp(formData){
    
    const email = formData.get("email")
    const password = formData.get("password")
    const descriptionJob = formData.get("description")
    const employmentStatus = formData.get("employment-status")
    const daitaryRestriction = formData.getAll("daitary-restriction")
    console.log(daitaryRestriction)

}


    return(
        <section>

            <h1>Sign Up form</h1>
            <form action={signUp} >  
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="hello@anwarrahim.com" name="email" />
                <label htmlFor="password">Password</label>
                <input id="password" type="password" placeholder="Er*****7@" name="password" />
                <label htmlFor="description"> Description:</label>
                <textarea id="description" defaultValue={"I am doing freelance job on Upwork"} placeholder="I am Frontend Engineer..." name="description"></textarea>
            <fieldset>
                <legend>Employment status:</legend>
                <label>
                <input type="radio" id="unemployed" name="employment-status" value="unemployed"/>   
                Unemployed
                </label>
                <label >
                   <input type="radio" name="employment-status" value="Part-Time" />
                   Part-Time
                </label>
                <label >
                    <input type="radio" name="employment-status" value="Full-Time" defaultChecked={true} />
                    Full-Time
                </label>
            </fieldset>
            <fieldset>
                <legend>Daitary Restriction</legend>
                <label >
                    <input type="checkbox" name="daitary-restriction" value="Kosher" />
                    Kosher
                </label>
                <label >
                    <input defaultChecked={true} type="checkbox" name="daitary-restriction" value="Vegan" />
                    Vegan
                </label>
                <label >
                    
                    <input type="checkbox" name="daitary-restriction" value="Glutin Free"/>
                    Glutin Free
                </label>
            </fieldset>

            <button>Submit</button>

            </form>
            
            
        </section>
    )
}