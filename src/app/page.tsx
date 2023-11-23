import prisma from "@/DB/db.conifg";
import AddThought from "@/components/AddThought";
import { Button } from "@/components/ui/button";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThoughtType } from "../../types";
import ThoughtCard from "@/components/ThoughtCard";

export default async function Home() {
  const thoughts: Array<ThoughtType> | [] = await prisma.thought.findMany({
    orderBy: {
      id: "desc",
    },
  });
  return (
    <>
      <ToastContainer />
      <div className="container mt-14">
        <div className="text-end">
          <AddThought />
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {thoughts.length > 0 &&
            thoughts.map((item) => (
              <ThoughtCard key={item.id} thought={item} />
            ))}
        </div>
      </div>
      {/* * Display Thought */}
    </>
  );
}
