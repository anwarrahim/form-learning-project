export default function Form(){

    return(
        <section>

            <h1>Sign Up form</h1>
            <form action="signUp">  
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="hello@anwarrahim.com" name="email" />
                <label htmlFor="password">Password</label>
                <input id="password" type="password" placeholder="Er*****7@" name="password" />
                <label htmlFor="description"> Description:</label>
                <textarea id="description" placeholder="I am Frontend Engineer..." name="description"></textarea>
            </form>
            
        </section>
    )
}