import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
export default function Input({label,type='text',error,...props}) { const [show,setShow]=useState(false); return <div className="field"><label>{label}</label><div className="input-wrap"><input {...props} type={type==='password'&&show?'text':type} className={error?'error':''}/>{type==='password'&&<button type="button" className="icon-btn" onClick={()=>setShow(!show)}>{show?<EyeOff size={18}/>:<Eye size={18}/>}</button>}</div>{error&&<small className="error-text">{error}</small>}</div>; }
