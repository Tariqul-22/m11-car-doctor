import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div className="text-center space-y-7 mt-16">
            <h1 className="text-6xl font-bold">Oops!</h1>
            <p className="">Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to='/' className="btn btn-accent">Go Home</Link>
        </div>
    );
};

export default ErrorPage;