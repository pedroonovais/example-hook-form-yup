"use client"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"

const schema = yup.object().shape({
    nome: yup.string().required("Campo obrigatório").min(2, "Minimo 2 caracteres"),
    email: yup.string().required("Campo obrigatório").email("Digite um email valido"),
    telefone: yup.string().required("Campo obrigatório").matches(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/, "Telefone invalido"),
})

export default function Home() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <main className="container mx-auto">
            <h1 className="text-5xl">Formulário</h1>
            <form className="w-96" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col">
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        id="nome"
                        className="rounded-sm text-lg text-black"
                        {...register("nome")}
                    />
                    {errors.nome && <span className="text-red-600">{errors.nome.message}</span>}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="text"
                        id="email"
                        className="rounded-sm text-lg text-black"
                        {...register("email")}
                    />
                    {errors.email && <span className="text-red-600">{errors.email.message}</span>}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="telefone">Telefone</label>
                    <input
                        type="text"
                        id="telefone"
                        className="rounded-sm text-lg text-black"
                        {...register("telefone")}
                    />
                    {errors.telefone && <span className="text-red-600">{errors.telefone.message}</span>}
                </div>
                <button className="bg-green-700 p-2 rounded-sm mt-2">
                    Salvar
                </button>
            </form>
        </main>
    );
}
