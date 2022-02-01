import Head from "next/head";
import styles from '../../styles/People.module.css';

export const getStaticProps = async () => {
    // this function runs at built time

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        // props property
        // we pass in the values we want to see on the page 
        props: { peoples: data }
    }
};

const People = ({ peoples }) => {
    return (  
        <>  
            <Head>
                <title>People's List | People</title>
                <meta name="keywords" content="people" />
            </Head>
            <div>
                <h1>All People</h1>
                { peoples.map(people => (
                    <div key={people.id}>
                        <a className={styles.single}>
                            <h3>{ people.name }</h3>
                        </a>
                    </div>
                ))}
            </div>
        </>
    );
}
 
export default People;