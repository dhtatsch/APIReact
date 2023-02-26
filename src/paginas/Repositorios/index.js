import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import estilos from './estilos';
import { pegarRepositoriosDoUsuario } from '../../services/requisicoes/repositorios';
import { useIsFocused  } from '@react-navigation/native';

export default function Repositorios({ route, navigation }) {
    const [repo, setRepo] = useState([]);
    const estaNatela = useIsFocused();

    useEffect(() => {

        async function response() {
            console.log(route.params.id)
            const resultado = await pegarRepositoriosDoUsuario(route.params.id);

            setRepo(resultado)
            console.log(resultado)
        }
        response();
    }, [estaNatela])

    return (
        <View style={estilos.container}>
            <Text style={estilos.repositoriosTexto}>{repo.length} repositórios criados</Text>
            <TouchableOpacity
                style={estilos.botao}
                onPress={() => navigation.navigate('CriarRepositorio', {id: route.params.id})}
            >
                <Text style={estilos.textoBotao}>Adicionar novo repositório</Text>
            </TouchableOpacity>

            <FlatList
                data={repo}
                style={{ width: '100%' }}
                keyExtractor={repo => repo.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={estilos.repositorio}
                        onPress={() => navigation.navigate('InfoRepositorio', { item })}>

                        <Text style={estilos.repositorioNome}>{item.name}</Text>
                        <Text style={estilos.repositorioData}>Atualizado em {item.created_at}</Text>

                    </TouchableOpacity>



                )}


            />

        </View>
    );
}
