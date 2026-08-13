import { create } from 'zustand';
import { authAPI } from '../utils/api';
const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem('user') || 'null'),
  token: localStorage.getItem('token'), isLoading:false, error:null,
  init: async () => {
    const token=localStorage.getItem('token'); if(!token) return;
    try { const {data}=await authAPI.me(); localStorage.setItem('user',JSON.stringify(data)); set({user:data,token}); }
    catch { localStorage.removeItem('token'); localStorage.removeItem('user'); set({user:null,token:null}); }
  },
  login: async (email,password) => { set({isLoading:true,error:null}); try { const {data}=await authAPI.login({email,password}); localStorage.setItem('token',data.token); localStorage.setItem('user',JSON.stringify(data.user)); set({user:data.user,token:data.token,isLoading:false}); return true; } catch(e){ set({error:e.response?.data?.error||'Login failed',isLoading:false}); return false; } },
  register: async (payload) => { set({isLoading:true,error:null}); try { const {data}=await authAPI.register(payload); localStorage.setItem('token',data.token); localStorage.setItem('user',JSON.stringify(data.user)); set({user:data.user,token:data.token,isLoading:false}); return true; } catch(e){ set({error:e.response?.data?.error||'Registration failed',isLoading:false}); return false; } },
  logout: () => { localStorage.removeItem('token'); localStorage.removeItem('user'); set({user:null,token:null,error:null}); }
}));
export default useAuthStore;
