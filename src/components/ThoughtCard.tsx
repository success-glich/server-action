import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ThoughtType } from "../../types";
import DeleteForm from "./DeleteForm";

export default function ThoughtCard({ thought }: { thought: ThoughtType }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{thought.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{thought.thought} </p>
      </CardContent>
      <CardFooter>
        <p>{thought.created_at.toString()}</p>
        <DeleteForm id={thought.id} />
      </CardFooter>
    </Card>
  );
}
