const Intro = ({ title, description }) => {
    return (
        <section className="intro">
            <h1>{ title }</h1>
            <p>{ description }</p>
        </section>
    );
};

export default Intro;
