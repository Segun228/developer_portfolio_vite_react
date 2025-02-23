import Header from "../components/Header/Header";

const Home = () => {
    return (  
    <>
    <Header></Header>
    <main className="section">
        <div className="container">

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Design</h2>
                        <p>Photoshop, Figma, After Effects, Premiere Pro, Illustrator</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Frontend</h2>
                        <p>JavaScript, TypeScript, ReactJS, Redux, HTML, CSS, NPM, BootStrap, MaterialUI, Yarn</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Backend</h2>
                        <p>NodeJS, MySQL, Python, Django</p>
                    </li>
                </ul>

        </div>
    </main>
    </>
    );
}
 
export default Home;


