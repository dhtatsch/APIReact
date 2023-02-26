import api from "../api";
import apiRepo from '../apiRepo';

export async function pegarRepositoriosDoUsuario(id) {
    try {

        const resultado = await apiRepo.get();

        return resultado.data;
    }
    catch (error) {
        console.log(error);
        return []
    }
}


export async function salvarRepositoriosDoUsuario(postId, nome, data, Id) {
    try {

        await api.put(`/repos/${Id}`, {
            name: nome,
            data: data,
            postId: postId,
            id: Id
        });

        return 'sucesso';
    }
    catch (error) {
        console.log(error);
        return 'erro'
    }
}


export async function criarRepositoriosDoUsuario(postId, nome, data) {
    try {

        await api.post(`/repos`, {
            name: nome,
            data: data,
            postId: postId
        });

        return 'sucesso';
    }
    catch (error) {
        console.log(error);
        return 'erro'
    }
}


export async function deletarRepositoriosDoUsuario(Id) {
    try {

        await api.delete(`/repos/${Id}`);

        return 'sucesso';
    }
    catch (error) {
        console.log(error);
        return 'erro'
    }
}