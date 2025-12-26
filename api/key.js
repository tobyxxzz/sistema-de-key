export default function handler(req, res) {
    // Token obrigatório do Work Ink
    const { token } = req.query;
    const VALID_TOKEN = "MEU_TOKEN_DO_WORKINK";

    if(token !== VALID_TOKEN) {
        res.status(403).json({ error: "Access denied" });
        return;
    }

    // Key do dia automática (ex: YYYYMMDD random ou fixa)
    const today = new Date();
    const keyDoDia = "KEY-" + today.getFullYear() + (today.getMonth()+1) + today.getDate();

    res.status(200).json({ key: keyDoDia });
}
