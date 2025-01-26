
const Heading = ({title, subtitle, tc, stc}) => {
    return (
        <div className="text-center">
            <h1 className={`text-4xl font-semibold ${tc}`}>{title}</h1>
            <p className={`font-semibold py-2 ${stc}`}>{subtitle}</p>
        </div>
    );
};

export default Heading;