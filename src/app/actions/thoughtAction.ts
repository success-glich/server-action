"use server";

import prisma from "@/DB/db.conifg";
import { CustomError } from "@/validation/CustomErrorReporter";
import { thoughtSchema } from "@/validation/thoughtValidation";
import vine, { errors } from "@vinejs/vine";
import { revalidatePath } from "next/cache";

export async function thoughtAction(prevState: any, formData: FormData) {
  try {
    const payload = {
      title: formData.get("title"),
      thought: formData.get("thought"),
    };
    vine.errorReporter = () => new CustomError();

    const validator = vine.compile(thoughtSchema);
    const output = await validator.validate(payload);
    await prisma.thought.create({
      data: output,
    });

    revalidatePath("/");
    return { status: 201, errors: 0 };
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      //   console.log(error.messages);
      return {
        status: 400,
        errors: error.messages,
      };
    }
  }

  //   const data = getDataTova
}

// * To delete thought action

export async function deleteThoughtAction(prevState: any, formData: FormData) {
  try {
    await prisma.thought.delete({
      where: {
        id: Number(formData?.get("id")),
      },
    });
    revalidatePath("/");
    return { status: 200, errors: 0 };
    //     return { status: 200, errors: 0 };
  } catch (err) {
    return { status: 400, errors: "Something went wrong" };
    //     return { status: 400, errors: "Something went wrong" };
  }
}
