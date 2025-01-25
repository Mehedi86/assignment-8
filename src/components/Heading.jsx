
const Heading = ({title, subtitle}) => {
    return (
        <div className="text-center">
            <h1 className="text-4xl font-semibold">{title}</h1>
            <p className="text-neutral-400 font-semibold py-2">{subtitle}</p>
        </div>
    );
};

export default Heading;