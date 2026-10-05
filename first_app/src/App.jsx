import Header from "./header";
import Sidebar from "./sidebar";  
import StudentCard from "./studentCard";
function App(){
  return(
    <>
    <Header/>
    <div className="flex">
      <Sidebar />
      <StudentCard />
    </div>
    </>
  
)
  
}
export default App