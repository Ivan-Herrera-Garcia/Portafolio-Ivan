import { ENV } from "../utils/constants"

export class Post {
    baseApi = ENV.BASE_API;

    async crearComentario(data) {
        try {
            const formData = new FormData();
            Object.keys(data).forEach((key) => {
                formData.append(key, data[key])
            });

            const url = `${this.baseApi}/${ENV.API_ROUTES.POST}`;
            const params = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            };

            const response = await fetch(url, params);
            
            const result = await response.json();

            if (response.status !== 200) throw result;

            return result;
        } catch (error) {
            throw error;
        }

    }}

    export default Post;