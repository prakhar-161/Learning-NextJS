// getStaticPaths

// job of nextjs is to build static pages and js bundles based on our components

// Reason for doing this getStaticPaths function -> 
// Is to first tell nextjs how many HTML pages need to be made based on our data
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(people => {
        return {
            params: { id: people.id.toString() }
        }
    });

    return {
        // paths: paths,
        paths,
        fallback: false
    }
};

// we get access to each parameter we need eact time around on a 'context' object that we automatically accept as an argument in this func.
// so id of each item we need to get is going to be attached to this context object
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: { people: data }
    }
};

const Details = ({ people }) => {
    return (  
        <div>
            <h1>{ people.name }</h1>
            <p>{ people.email }</p>
            <p>{ people.website }</p>
            <p>{ people.address.city }</p>
        </div>
    );
}
 
export default Details;