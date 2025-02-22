import { useEffect, useContext, useState, createContext, ReactNode } from "react";

interface SignInProps {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

interface LoginProps {
    email: string;
    password: string;
}

interface User {
    email: string;
    firstName: string;
    lastName: string;
    id: string;
}

interface AuthContextType {
    user: User | null;
    token: string;
    isLoading: boolean;
    login: (props: LoginProps) => Promise<void>;
    signUp: (props: SignInProps) => Promise<void>;
    logout: () => Promise<void>;
}

interface AuthProviderProps {
    children: ReactNode;
}

// 創建 Context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// 創建 Provider 組件
export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string>("")
    const [isLoading, setIsLoading] = useState(true);

    const login = async (props: LoginProps) => {
        try {
            setIsLoading(true);
            // 在這裡實現登入邏輯
            // 例如：const response = await api.login(props);
            // setUser(response.user);
            // setToken(response.token);
            // localStorage.setItem("token", response.token);
        } catch (error) {
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setToken(token);
        }
    }, []);

    const signUp = async (props: SignInProps) => {
        try {
            setIsLoading(true);
            // 在這裡實現註冊邏輯
            // 例如：const response = await api.signUp(props);
            // setUser(response.user);
        } catch (error) {
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    const logout = async () => {
        try {
            setIsLoading(true);
            // 在這裡實現登出邏輯
            // 例如：await api.logout();
            setUser(null);
        } catch (error) {
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        // 在這裡檢查初始身份驗證狀態
        // 例如：檢查 localStorage 或發送請求到服務器
        setIsLoading(false);
    }, []);

    const value = {
        user,
        isLoading,
        token,
        login,
        signUp,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

// 創建自定義 Hook
export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

