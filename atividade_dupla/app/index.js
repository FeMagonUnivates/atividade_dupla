import { Button, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
    return (
        <View>
             <Link href="/guilherme" asChild>
                <Button title="Clique para ver o app do Guilherme"  />  
             </Link>
             <Link href="/fernando" asChild>
                <Button title="Clique para ver o app do Fernando"  />  
             </Link>
        </View>
    )
}