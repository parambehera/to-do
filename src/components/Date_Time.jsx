import { useEffect,useState } from "react"

export function Date_Time(){
    const [date_time, setDate_time] = useState("");
    useEffect(() => {
        const interval = setInterval(() => {
          const now = new Date();
          const timeFormatter = now.toLocaleTimeString();
          const dateFormater = now.toLocaleDateString();
          setDate_time(`${dateFormater} - ${timeFormatter}`);
        }, 1000);
        return () => clearInterval(interval);
      }, []);
  return(
    <div>
        <h1 className="h1">To-Do List</h1>
        <h2>{date_time}</h2>
    </div>
  )
}