import { useEffect } from "react";
import { useAuth } from "../contexts/FakeAuthContext"
import { useNavigate } from "react-router-dom";

export function ProtectRotue({children})
{
    const {isAuthenticated}= useAuth();
    const navigte = useNavigate()
    useEffect(function(){
        if(!isAuthenticated) navigte('/');
    },[isAuthenticated,navigte])
    return isAuthenticated ? children : null
}