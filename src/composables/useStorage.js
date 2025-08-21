import { ref } from "vue";
import { projectStorage } from "@/firebase/config";
import getUser from "./getUser";

const { user } = getUser();

const useStorage = () => {
    const error = ref(null);
    const url = ref(null);
    const filePath = ref(null);

    const uploadImage = async (file) => {
        filePath.value = `covers/${user.value.uid}/${file.name}`;
        const storageRef = projectStorage.ref(filePath.value);

        try {
            const response = await storageRef.put(file);
            url.value = response.ref.getDownloadURL();
        } catch (error) {
            console.log(error.message);
            error.value = error.message;
        }
    };

    return { url, filePath, error, uploadImage };
}

export default useStorage;
