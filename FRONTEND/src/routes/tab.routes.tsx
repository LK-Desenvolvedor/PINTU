import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Feed from "../screens/Feed";
import New from "../screens/New";
import Login from "../screens/Login";
import Cadastro from "../screens/Cadastro";
import Home from "../screens/Home";
import Amigos from "../screens/Amigos";
import Perfil  from "../screens/Perfil";
import Pesquisa from "../screens/Pesquisa";
import Segurança from "../screens/Segurança";
import Comunidades from "../screens/Comunidades";
import Jogos from "../screens/Jogos";
import Livros from "../screens/Livros";
import MakeLove from "../screens/MakeLove";
import CrudScreen from "../screens/CrudScreen";

//CrudScreen
//Amigos

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="New" component={New} />
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="Cadastro" component={Cadastro} />
            <Tab.Screen name="Amigos" component={Amigos} />
            <Tab.Screen name="Perfil " component={Perfil} />
            <Tab.Screen name="Pesquisa" component={Pesquisa} />
            <Tab.Screen name="Segurança" component={Segurança} />
            <Tab.Screen name="Comunidades" component={Comunidades} />
            <Tab.Screen name="Jogos" component={Jogos} />
            <Tab.Screen name="Livros" component={Livros} />
            <Tab.Screen name="MakeLove" component={MakeLove} />
            <Tab.Screen name="CrudScreen" component={CrudScreen} />
        </Tab.Navigator>
    );
}