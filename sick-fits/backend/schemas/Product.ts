import { integer, select, text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";

export const Product = list({
  // ToDo
  // access:
  fields: {
    name: text({ isRequired: true }),
    description: text({
      ui: {
        displayMode: "textarea",
      },
    }),
    status: select({
      options: [
        { label: "Draft", value: "Draft" },
        { label: "Available", value: "Available" },
        { label: "Unavailable", value: "Unavailable" },
      ],
      defaultValue: "Draft",
      ui: {
        displayMode: "segmented-control",
        createView: { fieldMode: "hidden" },
      },
    }),
    price: integer(),
    // ToDo Photo
  },
});
