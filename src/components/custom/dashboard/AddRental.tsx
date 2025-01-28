import { z } from "zod";
import { SubmitButton } from "../buttons";
import { useForm } from "react-hook-form";
import { StyledInput } from "../styled-input";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  building_name: z.string().min(3), // Name of the building
  room_size: z.string().min(2), // JSON representation of room dimensions
  location: z.string().min(2), // JSON representation of coordinates
  rental_type: z.string().min(2), // Corresponds to RentalTypeChoices (select)
  distance_from_tarmac: z.string().min(2),
  distance_from_cbd: z.string().min(2),
  pricing: z.string().min(2), // Price as a string
  deposit_required: z.boolean(), // "yes" or "no"
  deposit_amount: z.string().min(2), // Deposit amount as a string
  vacant: z.boolean(), // "yes" or "no" for vacancy
  area: z.string().min(2), // Area details
  bathrooms: z.string().min(1), // Number of bathrooms
  amenities: z.string().min(2), // Amenities as a string (e.g., comma-separated)
  owner: z.string().min(2), // Owner identifier (e.g., username or ID)
  multi_storey: z.boolean(), // "yes" or "no"
  description: z.string().min(2), // Additional details about the property
  images: z
    .array(
      z
        .instanceof(File)
        .refine(
          (file) => file.type.startsWith("image/"),
          "Each file must be an image"
        )
        .refine(
          (file) => file.size <= 5 * 1024 * 1024,
          "Each image size must be less than 5MB"
        )
    )
    .min(1, "At least one image is required"),
});

const AddRental = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      building_name: "",
      room_size: "", // JSON representation of room dimensions
      location: "", // JSON representation of coordinates
      rental_type: "", // Default rental type (e.g., "bedsitter" or leave blank)
      distance_from_tarmac: "",
      distance_from_cbd: "",
      pricing: "",
      deposit_required: false, // Default to "no"
      deposit_amount: "",
      vacant: true, // Default to "yes" (or "no" as needed)
      area: "",
      bathrooms: "",
      amenities: "", // Comma-separated list or blank
      owner: "", // Identifier for the owner
      multi_storey: false, // Default to "no"
      description: "",
      images: [], // Empty array for file uploads or URLs
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values, "values");
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-3 gap-2">
            <FormField
              control={form.control}
              name="building_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Building Name</FormLabel>
                  <FormControl>
                    <StyledInput
                      placeholder="e.g Building Name..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="room_size"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Room Size</FormLabel>
                  <FormControl>
                    <StyledInput placeholder="e.g 12x10 feet..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="distance_from_cbd"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Distance from CBD</FormLabel>
                  <FormControl>
                    <StyledInput
                      placeholder="e.g 2km from city center..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="deposit_required"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Deposit Required</FormLabel>
                  <FormControl>
                    <Select
                      value={field.value ? "true" : "false"} // Convert boolean to string for Select
                      onValueChange={(value) =>
                        field.onChange(value === "true")
                      } // Convert string back to boolean
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="true">Yes</SelectItem>
                        <SelectItem value="false">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="deposit_amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Deposit Amount</FormLabel>
                  <FormControl>
                    <StyledInput placeholder="e.g Shs. 5,000..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="vacant"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Is Vacant</FormLabel>
                  <FormControl>
                    <Select
                      value={field.value ? "yes" : "no"}
                      onValueChange={(value) => field.onChange(value === "yes")}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bathrooms"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of Bathrooms</FormLabel>
                  <FormControl>
                    <StyledInput placeholder="e.g 2" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="owner"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Owner</FormLabel>
                  <FormControl>
                    <StyledInput placeholder="e.g Owner ID..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="multi_storey"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Is Multi-Storey</FormLabel>
                  <FormControl>
                    <Select
                      value={field.value ? "yes" : "no"}
                      onValueChange={(value) => field.onChange(value === "yes")}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="images"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Images</FormLabel>
                  <FormControl>
                    <StyledInput
                      type="file"
                      multiple
                      onChange={(e) => {
                        const files = Array.from(e.target.files || []);
                        field.onChange(files);
                      }}
                      className="w-full border rounded p-2"
                    />
                  </FormControl>
                  <FormMessage />
                  {/* Display the selected files */}
                  <div className="mt-2 flex space-x-2">
                    {field.value?.length > 0 &&
                      field.value.map((file, index) => (
                        <div key={index} className="text-sm">
                          <img src={URL.createObjectURL(file)} alt="" />
                        </div>
                      ))}
                  </div>
                </FormItem>
              )}
            />

            {/* <FormField
              control={form.control}
              name="images"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Images</FormLabel>
                  <FormControl>
                    <StyledInput
                      type="file"
                      multiple
                      onChange={(e) => {
                        const files = Array.from(e.target.files || []);
                        field.onChange(files);
                      }}
                      className="w-full border rounded p-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <StyledInput
                      placeholder="Enter a brief description of the rental..."
                      {...field}
                      className="w-full border rounded p-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="area"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Area</FormLabel>
                  <FormControl>
                    <StyledInput
                      placeholder="Enter a brief description of the rental..."
                      {...field}
                      className="w-full border rounded p-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="distance_from_tarmac"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Distance from tarmac</FormLabel>
                  <FormControl>
                    <StyledInput
                      placeholder="Enter a brief description of the rental..."
                      {...field}
                      className="w-full border rounded p-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <StyledInput
                      placeholder="Enter a brief description of the rental..."
                      {...field}
                      className="w-full border rounded p-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="pricing"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pricing</FormLabel>
                  <FormControl>
                    <StyledInput
                      placeholder="Enter a brief description of the rental..."
                      {...field}
                      className="w-full border rounded p-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="rental_type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rental type</FormLabel>
                  <FormControl>
                    <textarea
                      placeholder="Enter a brief description of the rental..."
                      {...field}
                      className="w-full border rounded p-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="amenities"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amenities</FormLabel>
                  <FormControl>
                    <textarea
                      placeholder="Enter a brief description of the rental..."
                      {...field}
                      className="w-full border rounded p-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <SubmitButton>Submit</SubmitButton>
        </form>
      </Form>
    </div>
  );
};

export default AddRental;
