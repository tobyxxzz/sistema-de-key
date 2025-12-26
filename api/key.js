// api/key.js
export default function handler(req, res) {
    // só libera se a rota for /codigoespecial
    if(req.url !== "/api/key?route=codigoespecial") {
        return res.status(403).send("Acesso negado!"); // bloqueia quem tentar direto
    }

    // gera a key do dia
    const hoje = new Date();
    const keyDoDia = "KEY" + hoje.getFullYear().toString() + 
                     (hoje.getMonth()+1).toString().padStart(2,"0") +
                     hoje.getDate().toString().padStart(2,"0");

    res.status(200).json({ key: keyDoDia });
}
