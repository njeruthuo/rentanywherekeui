import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { StyledInput } from "../styled-input";
import { SubmitButton } from "../buttons";

const formSchema = z.object({
  building_name: z.string().min(2), // Name of the building
  room_size: z.string().min(2), // JSON representation of room dimensions
  location: z.string().min(2), // JSON representation of coordinates
  rental_type: z.string().min(2), // Corresponds to RentalTypeChoices
  distance_from_tarmac: z.string().min(2),
  distance_from_cbd: z.string().min(2),
  pricing: z.string().min(2), // Price as a string
  deposit_required: z.string().min(2), // "yes" or "no"
  deposit_amount: z.string().min(2), // Deposit amount as a string
  vacant: z.string().min(2), // "yes" or "no" for vacancy
  area: z.string().min(2), // Area details
  bathrooms: z.string().min(2), // Number of bathrooms
  amenities: z.string().min(2), // Amenities as a string (e.g., comma-separated)
  owner: z.string().min(2), // Owner identifier (e.g., username or ID)
  multi_storey: z.string().min(2), // "yes" or "no"
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
  // 1. Define your form.
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
      deposit_required: "no", // Default to "no"
      deposit_amount: "",
      vacant: "yes", // Default to "yes" (or "no" as needed)
      area: "",
      bathrooms: "",
      amenities: "", // Comma-separated list or blank
      owner: "", // Identifier for the owner
      multi_storey: "no", // Default to "no"
      description: "",
      images: [], // Empty array for file uploads or URLs
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className=" grid grid-cols-3 gap-2">
            <FormField
              control={form.control}
              name="building_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Building name</FormLabel>
                  <FormControl>
                    <StyledInput
                      className="w-full"
                      placeholder="e.g Building name..."
                      {...field}
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
                    <StyledInput placeholder="e.g Kimathi st..." {...field} />
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
                  <FormLabel>Building name</FormLabel>
                  <FormControl>
                    {/* We will use Select shortly */}
                    <StyledInput placeholder="e.g Plato Plaza..." {...field} />
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
                    {/* We will use Select shortly */}
                    <StyledInput
                      placeholder="e.g 1.5km from the Thika Highway..."
                      {...field}
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
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    {/* We will use Select shortly */}
                    <StyledInput placeholder="e.g Shs. 20,000" {...field} />
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
                    {/* We will use Select shortly */}
                    <StyledInput placeholder="e.g Ngong area" {...field} />
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
                  <FormLabel>Area</FormLabel>
                  <FormControl>
                    <StyledInput
                      placeholder="e.g Swimming pools available..."
                      {...field}
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
