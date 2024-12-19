'use client'
import { useState } from "react"
export default function Registrar(){
    const [formData,setFormData] = useState({name:'',email:'', password:''})
    const [mensagem,setMensagem] = useState('')

  const Cadastrar  = async (e:any)=>{
    e.preventDefault()

    const res = await fetch('http://localhost:5000/users',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(formData)
    })

    if(res.ok){
        setMensagem('usuario cadastrado com sucesso')
        setFormData({name:'', email:'', password:''})
    }else{
        setMensagem('erro ao cadastrar usuario')
    }
  }
    return(
        <div className="flex justify-around flex-col items-center h-[400px]">
            <h1 className="text-2xl font-bold md:text-4xl">Cadastre-se </h1>
            <form action="" onSubmit={Cadastrar} className="flex flex-col">
               
                <input value={formData.name} onChange={(e)=>
                    setFormData({...formData, name: e.target.value})
                    } placeholder="Digite seu nome" className=" mb-5 w-[400px] border-b-2 border-black" type="text" name="" id="" />
               
                <input onChange={(e)=> setFormData({...formData,email: e.target.value})} value={formData.email} placeholder="Digite um email valido" className="mb-5 w-[400px] border-b-2 border-black" type="email" name="" id="" />
              
                <input onChange={(e)=> setFormData({...formData, password: e.target.value})} value={formData.password} placeholder="Digite uma senha" className="w-[400px] border-b-2 border-black" type="password" name="" id="" />

               <div className="flex mt-5 justify-center">
                 <input className=" text-white cursor-pointer font-bold bg-green-500 w-[200px] rounded-md h-[50px] border-solid border-2 border-black" type="submit" value="Enviar"/>
               </div>
              <p className="flex justify-center text-green-600">{mensagem}</p>
            </form>
        </div>
    )
}