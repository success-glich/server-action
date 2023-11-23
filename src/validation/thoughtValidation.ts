import vine from "@vinejs/vine";

export const thoughtSchema = vine.object({
  title: vine.string().minLength(4).maxLength(32),
  thought: vine.string().minLength(10).maxLength(1000),
});
