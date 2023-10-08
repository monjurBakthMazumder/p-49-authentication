import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import { AuthContext } from "../Provider/AuthProvider";
const LoginSocial = () => {
    const { singInWithGoogle, singInWithGithub} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleMediaLogin = (media) =>{
        media()
        .then(result=>{
            console.log(result.user);
            swal ( "Congratulation" ,  "Login Successful!" ,  "success" )
            navigate('/')
        })
        .catch(error=>{
            console.error(error);
            swal ( "Oops" ,  "Something went wrong!" ,  "error" )
        })
    }
    return (
        <>
            <div className="divider">Continue with</div>
            <div className="flex flex-wrap justify-center items-center gap-5">
                <button className="btn" onClick={()=>handleMediaLogin(singInWithGoogle)}>Google</button>
                <button className="btn" onClick={()=>handleMediaLogin(singInWithGithub)}>Github</button>
            </div>
        </>
    );
};

export default LoginSocial;