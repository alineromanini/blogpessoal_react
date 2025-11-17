import { createContext, useState, type ReactNode } from "react";
import type UsuarioLogin from "../models/UsuarioLogin";
import { login } from "../services/Service";

interface AuthContextProps {
    usuario: UsuarioLogin
    handleLogout(): void
    handleLogin(usuario: UsuarioLogin): Promise<void>
    isLoading: boolean
}

interface AuthProviderProps{
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {

    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        token: ''
    })

    //Inicializar o Estado IsLoading (Exibir e ocular o loader no formulári de login)
    const [isLoading, setIsLoading] = useState<boolean>(false);

    //Implementação da função de login (autenticação n backend)
    async function handleLogin(usuarioLogin: UsuarioLogin) {
        setIsLoading(true);

        try{
            await login("/usuarios/logar", usuarioLogin, setUsuario);
            alert("Usuário autenticado com sucesso!");
        }catch(error){
            alert("Os dados de login estão incorretos. Tente novamente!");
        }
        setIsLoading(false);
    }
    //Implementação da função de logout
    function handleLogout() {
        setUsuario({
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
            token: ''
        })
    }

    return(
        <AuthContext.Provider value={{ usuario, handleLogout, handleLogin, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}
{/* //nao tem export default porque envolve todo o app */}