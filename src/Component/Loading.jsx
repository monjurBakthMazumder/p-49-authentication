import { GridLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <GridLoader
                color="#0000FF"
                size={30}
                />
        </div>
    );
};

export default Loading;