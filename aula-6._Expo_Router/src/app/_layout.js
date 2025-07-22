import { Stack, Tabs } from "expo-router";

export default function Layout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: { backgroundColor: '#228f6aff' },
                headerTintColor: '#ffffff',                
                headerTitleAlign: 'left',            
            }}
        >
            
            <Stack.Screen name="index" options={{ title: 'Homepage'}} />
            <Stack.Screen name="page2" options={{ title: 'Página 2'}} />
            <Stack.Screen name="user/index" options={{ title: 'Usuário'}} />
            <Stack.Screen name="(tabs)/dashboard" options={{ title: 'Painel', headerShown: false }} />
            
        </Stack>
    );
}
