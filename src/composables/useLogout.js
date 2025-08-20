import { ref } from 'vue';
import { projectAuth } from '../firebase/config';

// refs
const error = ref(null);
const isPending = ref(false);

// logout function
const logout = async () => {
  error.value = null;
  isPending.value = true;

  try {
    await projectAuth.signOut();
  }
  catch (err) {
    console.log(err.message);
    error.value = err.message;
  }
  finally {
    isPending.value = false;
  }
}

const useLogout = () => ({ error, logout, isPending });

export default useLogout;
