import * as Yup from 'yup';

export function initialValues(post) {
    return {
        name: post?.name || "",
        email: post?.email || "",
        mensaje: post?.mensaje || "",
    }
}

export function validationSchema() {
    return Yup.object({
        name: Yup.string().required(true),
        email: Yup.string().required(true),
        mensaje: Yup.string().required(true),
        
    });
}