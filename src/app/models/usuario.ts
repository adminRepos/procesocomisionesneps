export interface UsuarioI{
    id: string;
    nombre: string;
    correo: string;
    tipo_doc: string;
    numero_doc: string;
    numero_tel: string;
    password: string;
    perfil: string;
    estado: string;
    fecha_creacion: Date;
}