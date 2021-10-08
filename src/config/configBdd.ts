interface BddConfig {
    host:string;
    user:string;
    password:string;
    database:string;
    port:number
}

export function configBdd():BddConfig{
    return {
        database:process.env.DB_HOST!,
        host:process.env.DB_HOST!,
        password:process.env.DB_PASSWORD!,
        port:Number.parseInt(process.env.DB_PORT!),
        user:process.env.DB_USER!
    };
}