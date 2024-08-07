import { navLinks } from "@/lib/NavItems";
import { Link } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";

export default function Nav() {

  return (
    <div className="w-full h-[75px] flex justify-between bg-background">
      <div className="w-[25%] h-full flex justify-center items-center">
        <p className="font-bold text-2xl text-primary">HireQuest</p>
      </div>

      <div className="w-[40%] h-full">
        <ul className="flex font-bold  h-full justify-around items-center">
          {
            navLinks.map((item, index: number) => {
              return (
                <Link key={index} to={item.link}><li className="text-sm text-neutral-400 font-medium">{item.label}</li></Link>
              )
            })
          }
        </ul>
      </div>

      <div className="w-[15%] h-full flex justify-center items-center">
          <ModeToggle/>
      </div>
    </div>
  )
}


